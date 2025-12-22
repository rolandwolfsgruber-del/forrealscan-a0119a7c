import { useEffect, useRef } from 'react';

interface Spore {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
  pulsePhase: number;
  pulseSpeed: number;
  side: 'left' | 'right'; // Which side the spore belongs to (determines color)
}

const SPORE_COUNT = 50; // Increased for better distribution
const MIN_SIZE = 4;
const MAX_SIZE = 12;
const MOUSE_INFLUENCE_RADIUS = 150; // Radius of mouse influence
const MOUSE_REPEL_STRENGTH = 3; // How strongly spores are pushed away

export const SporeEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sporesRef = useRef<Spore[]>([]);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to full document height (not just viewport)
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight
      );
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Generate edge-biased x position (left or right side)
    const generateEdgeBiasedX = (side: 'left' | 'right'): number => {
      const edgeWidth = canvas.width * 0.25; // 25% on each edge
      const centerGap = canvas.width * 0.5; // 50% in center with fewer spores

      if (side === 'left') {
        // Left side: 0 to 25% with higher density
        return Math.random() * edgeWidth;
      } else {
        // Right side: 75% to 100% with higher density
        return canvas.width - Math.random() * edgeWidth;
      }
    };

    // Initialize spores with edge bias
    const initSpores = () => {
      sporesRef.current = Array.from({ length: SPORE_COUNT }, (_, index) => {
        // Alternate between left and right sides
        const side: 'left' | 'right' = index % 2 === 0 ? 'left' : 'right';

        return {
          x: generateEdgeBiasedX(side),
          y: Math.random() * canvas.height,
          size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5 - 0.2, // Slight upward drift
          opacity: 0.4 + Math.random() * 0.4, // 0.4-0.8 for better visibility
          hue: Math.random() * 30, // Variation in hue
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.015 + Math.random() * 0.015,
          side,
        };
      });
    };
    initSpores();

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY, // Account for scroll
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Handle scroll to update canvas height and mouse position
    const handleScroll = () => {
      resizeCanvas();
    };
    window.addEventListener('scroll', handleScroll);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollY = window.scrollY;

      sporesRef.current.forEach((spore) => {
        // Apply mouse repulsion if mouse is present
        if (mouseRef.current) {
          const dx = spore.x - mouseRef.current.x;
          const dy = spore.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MOUSE_INFLUENCE_RADIUS && distance > 0) {
            const force = (MOUSE_INFLUENCE_RADIUS - distance) / MOUSE_INFLUENCE_RADIUS;
            const angle = Math.atan2(dy, dx);
            spore.x += Math.cos(angle) * force * MOUSE_REPEL_STRENGTH;
            spore.y += Math.sin(angle) * force * MOUSE_REPEL_STRENGTH;
          }
        }

        // Update position
        spore.x += spore.speedX;
        spore.y += spore.speedY;

        // Update pulse
        spore.pulsePhase += spore.pulseSpeed;
        const pulseFactor = 0.8 + Math.sin(spore.pulsePhase) * 0.2;

        // Keep spores on their designated side with edge bias
        const edgeWidth = canvas.width * 0.3;

        if (spore.side === 'left') {
          // Left spores stay on left side
          if (spore.x < -spore.size) spore.x = edgeWidth;
          if (spore.x > edgeWidth) spore.x = -spore.size;
        } else {
          // Right spores stay on right side
          if (spore.x < canvas.width - edgeWidth) spore.x = canvas.width + spore.size;
          if (spore.x > canvas.width + spore.size) spore.x = canvas.width - edgeWidth;
        }

        // Vertical wrapping
        if (spore.y < -spore.size) spore.y = canvas.height + spore.size;
        if (spore.y > canvas.height + spore.size) spore.y = -spore.size;

        // Color based on side (not theme)
        // Left side: Veritas green (hsl 142)
        // Right side: Robo blue (hsl 210)
        const isLeft = spore.side === 'left';
        const baseHue = isLeft ? 142 + spore.hue * 0.3 : 210 + spore.hue * 0.5;
        const saturation = isLeft ? 76 : 85;
        const lightness = isLeft ? 45 : 55;

        const currentOpacity = spore.opacity * pulseFactor;
        const currentSize = spore.size * pulseFactor;

        // Draw glow (outer)
        const glowGradient = ctx.createRadialGradient(
          spore.x, spore.y, 0,
          spore.x, spore.y, currentSize * 3.5
        );
        glowGradient.addColorStop(0, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.6})`);
        glowGradient.addColorStop(0.4, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.3})`);
        glowGradient.addColorStop(1, `hsla(${baseHue}, ${saturation}%, ${lightness}%, 0)`);

        ctx.beginPath();
        ctx.arc(spore.x, spore.y, currentSize * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Draw core (inner bright part)
        const coreGradient = ctx.createRadialGradient(
          spore.x, spore.y, 0,
          spore.x, spore.y, currentSize
        );
        coreGradient.addColorStop(0, `hsla(${baseHue}, ${saturation}%, ${lightness + 25}%, ${currentOpacity})`);
        coreGradient.addColorStop(0.5, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.8})`);
        coreGradient.addColorStop(1, `hsla(${baseHue}, ${saturation}%, ${lightness - 10}%, 0)`);

        ctx.beginPath();
        ctx.arc(spore.x, spore.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = coreGradient;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1]"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }}
    />
  );
};

export default SporeEffect;

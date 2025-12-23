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
  targetX: number; // For organic movement
  targetY: number;
  attractX: number; // Attraction point
  attractY: number;
}

const SPORE_COUNT = 30; // Reduced for better performance
const MIN_SIZE = 4;
const MAX_SIZE = 12;
const MOUSE_INFLUENCE_RADIUS = 150; // Radius of mouse influence
const MOUSE_REPEL_STRENGTH = 2; // How strongly spores are pushed away

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

    // Set canvas size to viewport (not full document)
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
        const x = generateEdgeBiasedX(side);
        const y = Math.random() * canvas.height;

        return {
          x,
          y,
          size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3 - 0.15, // Slight upward drift
          opacity: 0.4 + Math.random() * 0.3, // 0.4-0.7 for subtle effect
          hue: Math.random() * 20, // Variation in hue
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.015 + Math.random() * 0.015,
          side,
          targetX: x,
          targetY: y,
          attractX: x + (Math.random() - 0.5) * 150,
          attractY: y + (Math.random() - 0.5) * 150,
        };
      });
    };
    initSpores();

    // Track mouse position (fixed canvas, so use clientX/Y directly)
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY, // No scroll adjustment needed for fixed canvas
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sporesRef.current.forEach((spore) => {
        // Apply mouse repulsion if mouse is present
        if (mouseRef.current) {
          const dx = spore.x - mouseRef.current.x;
          const dy = spore.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MOUSE_INFLUENCE_RADIUS && distance > 0) {
            const force = (MOUSE_INFLUENCE_RADIUS - distance) / MOUSE_INFLUENCE_RADIUS;
            const angle = Math.atan2(dy, dx);
            spore.speedX += Math.cos(angle) * force * MOUSE_REPEL_STRENGTH * 0.03;
            spore.speedY += Math.sin(angle) * force * MOUSE_REPEL_STRENGTH * 0.03;
          }
        }

        // Organic movement towards attraction point
        const dxAttract = spore.attractX - spore.x;
        const dyAttract = spore.attractY - spore.y;
        const distanceAttract = Math.sqrt(dxAttract * dxAttract + dyAttract * dyAttract);

        if (distanceAttract < 50) {
          // Generate new attraction point when reached
          const edgeWidth = canvas.width * 0.3;
          if (spore.side === 'left') {
            spore.attractX = Math.random() * edgeWidth;
          } else {
            spore.attractX = canvas.width - Math.random() * edgeWidth;
          }
          spore.attractY = Math.random() * canvas.height;
        } else {
          // Gentle attraction towards target
          spore.speedX += (dxAttract / distanceAttract) * 0.015;
          spore.speedY += (dyAttract / distanceAttract) * 0.015;
        }

        // Apply velocity damping
        spore.speedX *= 0.96;
        spore.speedY *= 0.96;

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
        const baseHue = isLeft ? 142 + spore.hue : 210 + spore.hue;
        const saturation = isLeft ? 75 : 85;
        const lightness = isLeft ? 60 : 65;

        const currentOpacity = spore.opacity * pulseFactor;
        const currentSize = spore.size * pulseFactor;

        // Simple rendering: outer glow + core (no blur filter for performance)
        // Draw outer glow
        const glowGradient = ctx.createRadialGradient(
          spore.x, spore.y, 0,
          spore.x, spore.y, currentSize * 3
        );
        glowGradient.addColorStop(0, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.6})`);
        glowGradient.addColorStop(0.5, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.3})`);
        glowGradient.addColorStop(1, `hsla(${baseHue}, ${saturation}%, ${lightness}%, 0)`);

        ctx.beginPath();
        ctx.arc(spore.x, spore.y, currentSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Draw core
        const coreGradient = ctx.createRadialGradient(
          spore.x, spore.y, 0,
          spore.x, spore.y, currentSize
        );
        coreGradient.addColorStop(0, `hsla(${baseHue}, 100%, ${lightness + 20}%, ${currentOpacity * 0.9})`);
        coreGradient.addColorStop(0.5, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.7})`);
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
      className="fixed inset-0 z-0"
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

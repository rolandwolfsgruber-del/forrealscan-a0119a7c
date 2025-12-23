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
  trailX: number[]; // Trail effect
  trailY: number[];
}

const SPORE_COUNT = 60; // Increased for better distribution
const MIN_SIZE = 6;
const MAX_SIZE = 18;
const MOUSE_INFLUENCE_RADIUS = 200; // Radius of mouse influence
const MOUSE_REPEL_STRENGTH = 4; // How strongly spores are pushed away
const SPORE_INTERACTION_RADIUS = 80; // Spores interact with each other
const SPORE_INTERACTION_STRENGTH = 0.05; // Gentle interaction
const TRAIL_LENGTH = 8; // Number of trail positions to remember

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
        const x = generateEdgeBiasedX(side);
        const y = Math.random() * canvas.height;

        return {
          x,
          y,
          size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8 - 0.3, // Slight upward drift
          opacity: 0.5 + Math.random() * 0.4, // 0.5-0.9 for better visibility
          hue: Math.random() * 30, // Variation in hue
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
          side,
          targetX: x,
          targetY: y,
          attractX: x + (Math.random() - 0.5) * 200,
          attractY: y + (Math.random() - 0.5) * 200,
          trailX: Array(TRAIL_LENGTH).fill(x),
          trailY: Array(TRAIL_LENGTH).fill(y),
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

    // Handle scroll to update canvas height and mouse position
    const handleScroll = () => {
      resizeCanvas();
    };
    window.addEventListener('scroll', handleScroll);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sporesRef.current.forEach((spore, index) => {
        // Update trail positions
        spore.trailX.pop();
        spore.trailX.unshift(spore.x);
        spore.trailY.pop();
        spore.trailY.unshift(spore.y);

        // Apply mouse repulsion if mouse is present
        if (mouseRef.current) {
          const dx = spore.x - mouseRef.current.x;
          const dy = spore.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MOUSE_INFLUENCE_RADIUS && distance > 0) {
            const force = (MOUSE_INFLUENCE_RADIUS - distance) / MOUSE_INFLUENCE_RADIUS;
            const angle = Math.atan2(dy, dx);
            spore.speedX += Math.cos(angle) * force * MOUSE_REPEL_STRENGTH * 0.1;
            spore.speedY += Math.sin(angle) * force * MOUSE_REPEL_STRENGTH * 0.1;
          }
        }

        // Spore-to-spore interaction (gentle attraction/repulsion)
        sporesRef.current.forEach((otherSpore, otherIndex) => {
          if (index === otherIndex) return;

          const dx = otherSpore.x - spore.x;
          const dy = otherSpore.y - spore.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < SPORE_INTERACTION_RADIUS && distance > 0) {
            const force = (SPORE_INTERACTION_RADIUS - distance) / SPORE_INTERACTION_RADIUS;
            // Gentle repulsion at close range, slight attraction at medium range
            const interactionForce = distance < 40 ? -force : force * 0.3;
            const angle = Math.atan2(dy, dx);
            spore.speedX += Math.cos(angle) * interactionForce * SPORE_INTERACTION_STRENGTH;
            spore.speedY += Math.sin(angle) * interactionForce * SPORE_INTERACTION_STRENGTH;
          }
        });

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
          spore.speedX += (dxAttract / distanceAttract) * 0.02;
          spore.speedY += (dyAttract / distanceAttract) * 0.02;
        }

        // Apply velocity damping
        spore.speedX *= 0.98;
        spore.speedY *= 0.98;

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
        const saturation = isLeft ? 80 : 90;
        const lightness = isLeft ? 55 : 65;

        const currentOpacity = spore.opacity * pulseFactor;
        const currentSize = spore.size * pulseFactor;

        // Draw trail (fading copies of previous positions)
        for (let i = 1; i < spore.trailX.length; i++) {
          const trailOpacity = currentOpacity * (1 - i / spore.trailX.length) * 0.3;
          const trailSize = currentSize * (1 - i / spore.trailX.length * 0.5);

          const trailGradient = ctx.createRadialGradient(
            spore.trailX[i], spore.trailY[i], 0,
            spore.trailX[i], spore.trailY[i], trailSize * 2
          );
          trailGradient.addColorStop(0, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${trailOpacity})`);
          trailGradient.addColorStop(1, `hsla(${baseHue}, ${saturation}%, ${lightness}%, 0)`);

          ctx.beginPath();
          ctx.arc(spore.trailX[i], spore.trailY[i], trailSize * 2, 0, Math.PI * 2);
          ctx.fillStyle = trailGradient;
          ctx.fill();
        }

        // Enable blur for soft glow effect
        ctx.filter = 'blur(1px)';

        // Draw outer glow (larger, softer)
        const outerGlowGradient = ctx.createRadialGradient(
          spore.x, spore.y, 0,
          spore.x, spore.y, currentSize * 5
        );
        outerGlowGradient.addColorStop(0, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.8})`);
        outerGlowGradient.addColorStop(0.3, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.5})`);
        outerGlowGradient.addColorStop(0.6, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.2})`);
        outerGlowGradient.addColorStop(1, `hsla(${baseHue}, ${saturation}%, ${lightness}%, 0)`);

        ctx.beginPath();
        ctx.arc(spore.x, spore.y, currentSize * 5, 0, Math.PI * 2);
        ctx.fillStyle = outerGlowGradient;
        ctx.fill();

        // Draw middle glow
        const glowGradient = ctx.createRadialGradient(
          spore.x, spore.y, 0,
          spore.x, spore.y, currentSize * 3
        );
        glowGradient.addColorStop(0, `hsla(${baseHue}, ${saturation}%, ${lightness + 10}%, ${currentOpacity})`);
        glowGradient.addColorStop(0.5, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.6})`);
        glowGradient.addColorStop(1, `hsla(${baseHue}, ${saturation}%, ${lightness}%, 0)`);

        ctx.beginPath();
        ctx.arc(spore.x, spore.y, currentSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Reset filter for sharp core
        ctx.filter = 'none';

        // Draw core (inner bright part) - sharp and bright
        const coreGradient = ctx.createRadialGradient(
          spore.x, spore.y, 0,
          spore.x, spore.y, currentSize * 1.2
        );
        coreGradient.addColorStop(0, `hsla(${baseHue}, 100%, ${lightness + 30}%, ${currentOpacity})`);
        coreGradient.addColorStop(0.3, `hsla(${baseHue}, ${saturation + 10}%, ${lightness + 15}%, ${currentOpacity * 0.9})`);
        coreGradient.addColorStop(0.7, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.6})`);
        coreGradient.addColorStop(1, `hsla(${baseHue}, ${saturation}%, ${lightness - 10}%, 0)`);

        ctx.beginPath();
        ctx.arc(spore.x, spore.y, currentSize * 1.2, 0, Math.PI * 2);
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

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
}

const SPORE_COUNT = 30;
const MIN_SIZE = 4;
const MAX_SIZE = 10;

export const SporeEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sporesRef = useRef<Spore[]>([]);
  const animationFrameRef = useRef<number>();
  const themeRef = useRef<'veritas' | 'robo'>('veritas');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize spores
    const initSpores = () => {
      sporesRef.current = Array.from({ length: SPORE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8 - 0.3, // Slight upward drift
        opacity: 0.3 + Math.random() * 0.4, // 0.3-0.7
        hue: Math.random() * 30, // Variation in hue
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      }));
    };
    initSpores();

    // Check theme
    const checkTheme = () => {
      themeRef.current = document.body.classList.contains('theme-robo') ? 'robo' : 'veritas';
    };

    // Observe theme changes
    const observer = new MutationObserver(() => {
      checkTheme();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    checkTheme();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sporesRef.current.forEach((spore) => {
        // Update position
        spore.x += spore.speedX;
        spore.y += spore.speedY;

        // Update pulse
        spore.pulsePhase += spore.pulseSpeed;
        const pulseFactor = 0.8 + Math.sin(spore.pulsePhase) * 0.2;

        // Wrap around edges
        if (spore.x < -spore.size) spore.x = canvas.width + spore.size;
        if (spore.x > canvas.width + spore.size) spore.x = -spore.size;
        if (spore.y < -spore.size) spore.y = canvas.height + spore.size;
        if (spore.y > canvas.height + spore.size) spore.y = -spore.size;

        // Get theme-based colors
        const isRobo = themeRef.current === 'robo';

        // Veritas: Saturated green (hsl 142)
        // Robo: Tech blue (hsl 210)
        const baseHue = isRobo ? 210 + spore.hue * 0.5 : 142 + spore.hue * 0.3;
        const saturation = isRobo ? 85 : 76;
        const lightness = isRobo ? 55 : 40;

        const currentOpacity = spore.opacity * pulseFactor;
        const currentSize = spore.size * pulseFactor;

        // Draw glow (outer)
        const glowGradient = ctx.createRadialGradient(
          spore.x, spore.y, 0,
          spore.x, spore.y, currentSize * 3
        );
        glowGradient.addColorStop(0, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.5})`);
        glowGradient.addColorStop(0.5, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.2})`);
        glowGradient.addColorStop(1, `hsla(${baseHue}, ${saturation}%, ${lightness}%, 0)`);

        ctx.beginPath();
        ctx.arc(spore.x, spore.y, currentSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Draw core (inner bright part)
        const coreGradient = ctx.createRadialGradient(
          spore.x, spore.y, 0,
          spore.x, spore.y, currentSize
        );
        coreGradient.addColorStop(0, `hsla(${baseHue}, ${saturation}%, ${lightness + 20}%, ${currentOpacity * 0.95})`);
        coreGradient.addColorStop(0.6, `hsla(${baseHue}, ${saturation}%, ${lightness}%, ${currentOpacity * 0.7})`);
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
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
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

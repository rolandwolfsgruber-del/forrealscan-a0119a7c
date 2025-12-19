import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type Theme = 'veritas' | 'robo';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  size?: 'sm' | 'default';
  className?: string;
}

export const ThemeToggle = ({ theme, onToggle, size = 'default', className }: ThemeToggleProps) => {
  const isRobo = theme === 'robo';

  return (
    <Button
      variant="ghost"
      size={size === 'sm' ? 'sm' : 'icon'}
      onClick={onToggle}
      className={cn(
        "relative overflow-hidden transition-all duration-500",
        size === 'sm' ? 'h-9 w-9 px-0' : 'h-10 w-10',
        isRobo
          ? "hover:bg-robo/20 text-robo"
          : "hover:bg-veritas/20 text-veritas",
        className
      )}
      aria-label={isRobo ? 'Switch to Veritas (Light Mode)' : 'Switch to Robo (Dark Mode)'}
    >
      {/* Sun Icon - visible in Robo mode (dark) */}
      <Sun
        className={cn(
          "absolute h-5 w-5 transition-all duration-500 ease-in-out",
          isRobo
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        )}
      />
      {/* Moon Icon - visible in Veritas mode (light) */}
      <Moon
        className={cn(
          "absolute h-5 w-5 transition-all duration-500 ease-in-out",
          isRobo
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        )}
      />
    </Button>
  );
};

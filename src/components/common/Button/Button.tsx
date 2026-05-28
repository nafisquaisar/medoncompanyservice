import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/utils/helpers';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-xl font-medium shadow-sm transition-all duration-300',
        variant === 'primary' &&
          'bg-primary text-white hover:bg-primary-dark hover:shadow-md',
        variant === 'outline' &&
          'border border-primary text-primary hover:bg-primary hover:text-white hover:shadow-md',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3',
        size === 'lg' && 'px-8 py-4 text-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';
import { buttonPress } from '../animations/variants';
import { useMagnetic } from '../hooks/useMagnetic';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isMagnetic?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-foreground hover:opacity-90 shadow-sm',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-border/20',
  ghost: 'bg-transparent text-foreground hover:bg-secondary',
  outline: 'bg-transparent text-foreground border border-border hover:bg-secondary',
  danger: 'bg-error text-white hover:opacity-90',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm font-medium rounded-xl',
  lg: 'px-8 py-3.5 text-base font-medium rounded-xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      isMagnetic = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const { ref: magneticRef, position, handleMouseMove, handleMouseLeave } = useMagnetic(0.2);

    const buttonContent = (
      <motion.button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        variants={buttonPress}
        initial="initial"
        whileHover={!disabled && !isLoading ? 'hover' : undefined}
        whileTap={!disabled && !isLoading ? 'tap' : undefined}
        animate={isMagnetic ? { x: position.x, y: position.y } : undefined}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {leftIcon && !isLoading && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </motion.button>
    );

    if (isMagnetic) {
      return (
        <div 
          ref={magneticRef} 
          onMouseMove={handleMouseMove} 
          onMouseLeave={handleMouseLeave}
          className="inline-block"
        >
          {buttonContent}
        </div>
      );
    }

    return buttonContent;
  }
);

Button.displayName = 'Button';
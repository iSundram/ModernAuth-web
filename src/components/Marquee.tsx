import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export function Marquee({ children, direction = 'left', speed = 20, className = '' }: MarqueeProps) {
  const initialX = direction === 'left' ? 0 : '-50%';
  const animateX = direction === 'left' ? '-50%' : 0;

  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
      <motion.div
        className="flex"
        initial={{ x: initialX }}
        animate={{ x: animateX }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="flex shrink-0">
          {children}
        </div>
        <div className="flex shrink-0">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

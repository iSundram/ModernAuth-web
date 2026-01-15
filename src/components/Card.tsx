import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { cardHover } from '../animations/variants';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <motion.div
      className={`
        bg-background border border-border/40 rounded-3xl p-8
        shadow-premium transition-all duration-500
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      variants={cardHover}
      whileHover="hover"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

export function FeatureCard({ icon, title, description, className = '' }: {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Card className={`group ${className}`}>
      <div className="flex flex-col gap-6">
        <div className="w-14 h-14 rounded-2xl bg-secondary border border-border/30 flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-foreground/50 text-[15px] leading-relaxed font-medium">{description}</p>
        </div>
      </div>
    </Card>
  );
}

export function TestimonialCard({ quote, author, role, avatar, className = '' }: {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  className?: string;
}) {
  return (
    <Card className={className}>
      <div className="flex flex-col gap-8">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
          ))}
        </div>
        <p className="text-foreground/80 font-semibold text-lg leading-snug">"{quote}"</p>
        <div className="flex items-center gap-4 border-t border-border/30 pt-6">
          <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary font-bold shadow-inner">
            {avatar ? <img src={avatar} className="rounded-2xl" /> : author.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-foreground tracking-tight">{author}</p>
            <p className="text-muted text-xs font-bold uppercase tracking-widest">{role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

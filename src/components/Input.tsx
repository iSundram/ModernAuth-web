import { forwardRef, useState, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputId = id || `input-${Math.random().toString(36).slice(2, 11)}`;

    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {label && (
          <label htmlFor={inputId} className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">
            {label}
          </label>
        )}
        <div className={`relative transition-all duration-300 rounded-2xl border ${isFocused ? 'border-primary bg-white shadow-premium' : 'border-border/30 bg-secondary/50'} ${error ? 'border-error bg-error/5' : ''}`}>
          <input
            ref={ref}
            id={inputId}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full px-6 py-4 bg-transparent outline-none text-sm font-bold text-foreground placeholder:text-muted/60"
            {...props}
          />
        </div>
        {error && <p className="text-[10px] font-bold text-error uppercase tracking-wider ml-1">{error}</p>}
      </div>
    );
  }
);

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string }>(
  ({ label, className = '', id, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputId = id || `textarea-${Math.random().toString(36).slice(2, 11)}`;

    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {label && (
          <label htmlFor={inputId} className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">
            {label}
          </label>
        )}
        <div className={`relative transition-all duration-300 rounded-2xl border ${isFocused ? 'border-primary bg-white shadow-premium' : 'border-border/30 bg-secondary/50'}`}>
          <textarea
            ref={ref}
            id={inputId}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full px-6 py-4 bg-transparent outline-none text-sm font-bold text-foreground placeholder:text-muted/60 min-h-[120px] resize-none"
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
Textarea.displayName = 'Textarea';
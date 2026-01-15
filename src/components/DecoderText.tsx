import { useEffect, useState } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*+?';

export function DecoderText({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    let iteration = 0;
    let interval: any;

    const startAnimation = () => {
      interval = setInterval(() => {
        setDisplayText(
          text.split('').map((char, index) => {
            if (index < iteration) return text[index];
            if (char === ' ') return ' ';
            return characters[Math.floor(Math.random() * characters.length)];
          }).join('')
        );
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1/3;
      }, 30);
    };

    const timeout = setTimeout(startAnimation, delay);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
}

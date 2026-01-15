import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { staggerContainer, staggerItem } from '../animations/variants';

function Counter({ value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(easeOutExpo * value);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

const stats = [
  { label: 'Latency', value: <Counter value={50} suffix="ms" />, sub: 'Average auth response' },
  { label: 'Reliability', value: <Counter value={99.99} decimals={2} suffix="%" />, sub: 'Uptime guarantee' },
  { label: 'Scale', value: 'Unlimited', sub: 'Multi-tenant support' },
  { label: 'Security', value: 'Argon2id', sub: 'Hardened hashing' },
];

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={staggerItem} className="text-center md:text-left px-2">
              <div className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-2 text-white">
                {stat.value}
              </div>
              <div className="text-[11px] font-black uppercase tracking-[0.3em] text-background/40 mb-1">
                {stat.label}
              </div>
              <div className="text-sm font-medium text-background/60">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

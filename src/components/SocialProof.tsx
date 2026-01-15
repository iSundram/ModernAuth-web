import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

export function SocialProof() {
  return (
    <motion.div 
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mt-20"
    >
      <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-muted mb-10 text-center lg:text-left">
        Strategic Partners & Early Adopters
      </p>
      <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        {['ACME', 'GLOBEX', 'SOYLENT', 'INITECH', 'UMBRELLA', 'OSCORP'].map(brand => (
          <span key={brand} className="font-black text-xl md:text-2xl tracking-tighter whitespace-nowrap">{brand}</span>
        ))}
      </div>
    </motion.div>
  );
}

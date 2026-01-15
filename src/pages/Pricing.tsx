import { motion } from 'framer-motion';
import { pageTransition, fadeInUp } from '../animations/variants';
import { Pricing as PricingSection, FAQ } from '../components';

export function PricingPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-32 min-h-screen"
    >
      <section className="pb-20">
        <div className="container-custom">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4 block">Transparent Pricing</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 font-heading">
              SCALE WITH <br />
              <span className="text-foreground/30 italic">CONFIDENCE.</span>
            </h1>
            <p className="text-xl text-foreground/50 font-medium leading-relaxed">
              Start for free, scale to millions. No hidden fees, no credit card required for development.
            </p>
          </motion.div>
          
          <PricingSection />
        </div>
      </section>

      <div className="bg-secondary/20 py-20 overflow-hidden">
         <div className="container-custom text-center">
            <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-muted mb-4">Development Protocol</p>
            <h3 className="text-2xl font-black tracking-tighter uppercase">Currently in Alpha Phase</h3>
         </div>
      </div>

      <FAQ />
    </motion.div>
  );
}

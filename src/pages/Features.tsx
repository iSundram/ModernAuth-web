import { motion } from 'framer-motion';
import { pageTransition, fadeInUp } from '../animations/variants';
import { Features as FeaturesSection, Process } from '../components';

export function FeaturesPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-32"
    >
      <section className="bg-secondary/30 py-20 overflow-hidden">
        <div className="container-custom">
          <motion.div variants={fadeInUp} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
              THE <span className="text-primary italic">OS</span> FOR <br />
              MODERN IDENTITY.
            </h1>
            <p className="text-xl text-foreground/50 font-medium leading-relaxed">
              Explore the technical depth of our Go-native identity core. 
              Engineered for absolute security and developer ergonomics.
            </p>
          </motion.div>
        </div>
      </section>
      <FeaturesSection />
      <Process />
    </motion.div>
  );
}

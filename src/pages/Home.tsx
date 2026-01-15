import { motion } from 'framer-motion';
import { 
  Hero, Stats, Features, Process, Pricing, FAQ, 
  CTABanner, Contact, CodeTerminal, InteractiveGrid,
  TechStack, SecurityDeepDive, FeatureShowcase, DocumentationPreview
} from '../components';
import { pageTransition } from '../animations/variants';

export function Home() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="relative pt-32 pb-20 overflow-hidden">
        <InteractiveGrid />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex flex-col items-center lg:items-start">
              <Hero />
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <CodeTerminal />
            </div>
          </div>
        </div>
      </section>
      <TechStack />
      <Stats />
      <Features />
      <FeatureShowcase />
      <SecurityDeepDive />
      <DocumentationPreview />
      <Process />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Contact />
    </motion.div>
  );
}

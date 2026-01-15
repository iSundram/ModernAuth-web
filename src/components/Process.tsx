import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeInUp } from '../animations/variants';

const steps = [
  {
    number: '01',
    title: 'Integrate',
    description: 'Embed our Go-native core into your existing product or run it as a standalone authentication service.',
  },
  {
    number: '02',
    title: 'Authorize',
    description: 'Define granular RBAC roles and permissions. Secure your endpoints with enterprise-grade middleware.',
  },
  {
    number: '03',
    title: 'Scale',
    description: 'Deploy globally with Docker. Monitor performance with built-in Prometheus metrics and audit trails.',
  },
];

export function Process() {
  return (
    <section id="process" className="section-spacing bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full mesh-grid opacity-5" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-32"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4 block">Our Methodology</span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9] break-words">
            PRECISION <span className="text-white/30 italic">WORKFLOW.</span>
          </h2>
          <p className="text-xl text-white/50 font-medium">From concept to global deployment in three seamless steps.</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-12 lg:gap-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div 
              key={step.number} 
              variants={staggerItem}
              className="relative group pt-12 md:pt-0"
            >
              <div className="text-7xl md:text-8xl font-black text-white/5 absolute -top-8 md:-top-16 left-0 md:-left-8 group-hover:text-primary/20 transition-colors duration-500">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                  {step.title}
                </h3>
                <div className="w-12 h-1 bg-primary mb-8 group-hover:w-24 transition-all duration-500" />
                <p className="text-lg text-white/50 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

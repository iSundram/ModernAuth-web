import { motion } from 'framer-motion';
import { TestimonialCard } from './Card';
import { staggerContainer, staggerItem, fadeInUp } from '../animations/variants';

const testimonials = [
  {
    quote: "ModernAuth's RBAC system allowed us to implement complex multi-tenant permissions in hours rather than weeks. It's the most intuitive auth core we've used.",
    author: "Alexander Wright",
    role: "CTO @ Neoscape",
  },
  {
    quote: "The Go-native performance is incredible. We're seeing sub-50ms auth latency even under heavy load. Truly built for scale.",
    author: "Elena Rodriguez",
    role: "Founder @ Veloce",
  },
  {
    quote: "Security wasn't an afterthought with ModernAuth. The built-in MFA and token blacklisting gave us peace of mind from day one.",
    author: "Marcus Chen",
    role: "SecOps Lead @ Prism",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-spacing bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mb-24"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4 block">Proof of Concept</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1] break-words">
            TRUSTED BY THE <br className="hidden sm:block" />
            <span className="text-foreground/30">ARCHITECTS OF TOMORROW.</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.author} variants={staggerItem}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { pageTransition, fadeInUp, staggerContainer, staggerItem } from '../animations/variants';
import { Button } from '../components';
import { Shield, Target, Users, Globe } from 'lucide-react';

export function About() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-32"
    >
      <section className="section-spacing">
        <div className="container-tight">
          <motion.div variants={fadeInUp} className="text-center mb-24">
            <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4 block">Our Vision</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
              ENGINEERING THE <br />
              <span className="text-foreground/30 italic">IDENTITY CORE.</span>
            </h1>
            <p className="text-xl text-foreground/50 font-medium leading-relaxed mb-12">
              ModernAuth Identity was born from a simple realization: 
              authentication shouldn't be a hurdle. We are building to 
              bring absolute security and simplicity back to identity management.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="h-14 rounded-2xl px-10">Read the Manifesto</Button>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {[
              { icon: <Target className="text-primary" />, title: "Performance", text: "Sub-50ms authentication latency. Engineered for high-throughput environments." },
              { icon: <Shield className="text-primary" />, title: "Secure-by-Default", text: "Argon2id hashing, JWT blacklisting, and stateful session security as standard." },
              { icon: <Users className="text-primary" />, title: "Developer First", text: "Go-native core with clean architecture. Built by developers, for developers." },
              { icon: <Globe className="text-primary" />, title: "Multi-tenant", text: "Native isolation for organizations, custom domains, and localized settings." }
            ].map((v, i) => (
              <motion.div key={i} variants={staggerItem} className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                  <p className="text-foreground/50 font-medium leading-relaxed">{v.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

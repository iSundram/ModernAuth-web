import { motion } from 'framer-motion';
import { 
  ShieldCheck, Users, Lock, Key, Eye, Activity, Terminal, Cloud 
} from 'lucide-react';
import { FeatureCard } from './Card';
import { staggerContainer, staggerItem, fadeInUp } from '../animations/variants';

const features = [
  { icon: <Terminal size={24} />, title: 'Go-Native', description: 'Built with Go 1.23+ following Clean Architecture principles for maximum performance.' },
  { icon: <Cloud size={24} />, title: 'Multi-tenancy', description: 'Built-in support for isolated organizations with custom settings and domains.' },
  { icon: <Lock size={24} />, title: 'Advanced RBAC', description: 'Granular Role-Based Access Control with roles, permissions, and middleware.' },
  { icon: <ShieldCheck size={24} />, title: 'Multi-Factor Auth', description: 'Secure Time-based One-Time Passwords (TOTP) for enhanced account protection.' },
  { icon: <Key size={24} />, title: 'Token Blacklisting', description: 'Redis-backed JWT blacklisting for immediate session revocation.' },
  { icon: <Eye size={24} />, title: 'Audit Trails', description: 'Comprehensive database-backed logging for all security-relevant auth events.' },
  { icon: <Activity size={24} />, title: 'Observability', description: 'Prometheus metrics and structured JSON logging built directly into the core.' },
  { icon: <Users size={24} />, title: 'Docker Ready', description: 'Production-ready containerization for seamless deployment in any environment.' },
];

export function Features() {
  return (
    <section id="features" className="section-spacing bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mb-24"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4 block">Identity Infrastructure</span>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-8 text-foreground leading-[1.1] break-words">
            ENTERPRISE-GRADE AUTH <br className="hidden sm:block" />
            <span className="text-foreground/30">FOR THE MODERN WEB.</span>
          </h2>
          <p className="text-xl text-foreground/50 font-medium max-w-2xl leading-relaxed">
            A production-ready identity core that takes the complexity out of 
            authentication, so you can focus on building your product.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={staggerItem}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

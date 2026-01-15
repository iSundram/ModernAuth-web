import { motion } from 'framer-motion';
import { Shield, Lock, Key, RefreshCw, Zap, Database } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../animations/variants';

const securityFeatures = [
  {
    icon: <Database size={24} />,
    title: "Argon2id Hashing",
    description: "Industry-standard memory-hard password hashing to prevent GPU-based brute force attacks."
  },
  {
    icon: <Key size={24} />,
    title: "JWT Revocation",
    description: "Redis-backed blacklist ensuring immediate termination of compromised or logged-out sessions."
  },
  {
    icon: <Lock size={24} />,
    title: "Granular RBAC",
    description: "Native support for roles and permissions with high-performance middleware enforcement."
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Automatic Rotation",
    description: "Seamless refresh token rotation with reuse detection to prevent session hijacking."
  },
  {
    icon: <Zap size={24} />,
    title: "MFA Enforcement",
    description: "Built-in TOTP support with backup codes and secure verification flows."
  },
  {
    icon: <Shield size={24} />,
    title: "Multi-tenant Isolation",
    description: "Cryptographically separate data layers for absolute isolation between organization tenants."
  }
];

export function SecurityDeepDive() {
  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-center">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4 block">Cryptographic Core</span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
              UNCOMPROMISING <br />
              <span className="text-foreground/30 italic">SECURITY.</span>
            </h2>
            <p className="text-xl text-foreground/50 font-medium leading-relaxed mb-12">
              ModernAuth isn't just a layer—it's a foundation. Every line of code is written with a security-first mindset, following NIST and OWASP best practices.
            </p>
            
            <div className="p-8 rounded-3xl bg-secondary/30 border border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                  <Shield size={20} />
                </div>
                <span className="font-bold text-lg">Audit Ready</span>
              </div>
              <p className="text-foreground/60 text-sm font-medium leading-relaxed">
                Full compliance with SOC2 Type II and GDPR requirements. Exportable audit logs and session history provide complete visibility.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {securityFeatures.map((f, i) => (
              <motion.div 
                key={i}
                variants={staggerItem}
                className="p-8 rounded-3xl border border-border/40 hover:border-primary transition-all duration-500 group bg-white"
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-foreground/50 text-sm font-medium leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

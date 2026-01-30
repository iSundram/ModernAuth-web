import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';
import { Shield, Users } from 'lucide-react';

const detailedFeatures = [
  {
    icon: <Users size={32} />,
    title: "Native Multi-tenancy",
    description: "Built-in support for isolated organizations. Each tenant can have its own custom domains, branding, and user pools without data leaks.",
    visual: (
      <div className="relative w-full h-64 min-h-[16rem] bg-secondary/30 rounded-3xl overflow-hidden flex items-center justify-center p-8 transform-gpu">
        <div className="grid grid-cols-2 gap-4 w-full">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-16 rounded-xl bg-white border border-border/40 shadow-sm flex items-center px-4 gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                T{i}
              </div>
              <div className="h-2 w-24 bg-secondary rounded-full" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
    )
  },
  {
    icon: <Shield size={32} />,
    title: "Granular RBAC",
    description: "Define complex roles and permissions at any level. Our middleware ensures sub-millisecond enforcement across your entire API.",
    visual: (
      <div className="relative w-full h-64 min-h-[16rem] bg-slate-900 rounded-3xl overflow-hidden p-8 font-mono text-[10px] text-white/40 transform-gpu">
        <div className="space-y-2">
          <p className="text-green-400">role "editor" {`{`}</p>
          <p className="pl-4">can "users:read",</p>
          <p className="pl-4">can "posts:write",</p>
          <p className="pl-4">cannot "billing:access"</p>
          <p className="">{`}`}</p>
          <p className="text-primary mt-4">// Enforced in 0.2ms</p>
        </div>
        <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full border-4 border-primary/20 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center text-primary font-bold text-xs">
            SECURE
          </div>
        </div>
      </div>
    )
  }
];

export function FeatureShowcase() {
  return (
    <section className="section-spacing bg-white overflow-hidden">
      <div className="container-custom">
        <div className="space-y-32">
          {detailedFeatures.map((feature, i) => (
            <div 
              key={i} 
              className={`grid lg:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
            >
              <motion.div 
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className={i % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-8">
                  {feature.icon}
                </div>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
                  {feature.title.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="text-foreground/30 italic">{feature.title.split(' ').pop()}</span>
                </h2>
                <p className="text-xl text-foreground/50 font-medium leading-relaxed mb-8">
                  {feature.description}
                </p>
                <button className="text-sm font-black uppercase tracking-[0.2em] text-primary hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Explore Implementation Details <span>→</span>
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={i % 2 === 1 ? 'lg:order-1' : ''}
              >
                {feature.visual}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

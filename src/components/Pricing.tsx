import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { Button } from './Button';
import { staggerContainer, staggerItem, fadeInUp } from '../animations/variants';

const pricingTiers = [
  {
    name: 'Standard',
    price: '0',
    description: 'Perfect for exploring our ecosystem.',
    features: ['Up to 1,000 Users', 'Basic RBAC Roles', 'Community Forum', 'Public Documentation'],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '49',
    description: 'The definitive choice for growing startups.',
    features: ['Unlimited Users', 'Advanced MFA (TOTP)', 'JWT Blacklisting', 'Priority Email Support', 'Custom Branding'],
    isPopular: true,
    cta: 'Start 14-Day Trial',
  },
  {
    name: 'Scale',
    price: '199',
    description: 'Engineered for mission-critical operations.',
    features: ['Enterprise Security isolation', 'Native Multi-tenancy', 'Dedicated Account Manager', '24/7 Phone Support', 'SLA Guarantees'],
    cta: 'Contact Sales',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-spacing bg-secondary/50 mesh-grid">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-24"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4 block">Sustainable Value</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
            INVEST IN YOUR <br className="hidden md:block" />
            <span className="text-primary italic">PRODUCTIVITY.</span>
          </h2>
          <p className="text-xl text-foreground/50 font-medium">Clear, transparent pricing that scales as you do.</p>
        </motion.div>

        <motion.div 
          className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {pricingTiers.map((tier) => (
            <motion.div 
              key={tier.name}
              variants={staggerItem}
              className={`relative flex flex-col p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-500 ${tier.isPopular ? 'border-foreground bg-foreground text-background shadow-premium-hover md:scale-105 z-10' : 'border-border/40 bg-background hover:border-border'}`}
            >
              {tier.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                  Most Selected
                </div>
              )}
              
              <div className="mb-10">
                <h3 className={`text-xl font-bold mb-4 ${tier.isPopular ? 'text-background' : 'text-foreground'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold opacity-50">$</span>
                  <span className="text-6xl font-black tracking-tighter">{tier.price}</span>
                  <span className="text-sm font-bold opacity-50">/mo</span>
                </div>
              </div>

              <p className={`text-sm font-medium mb-10 leading-relaxed ${tier.isPopular ? 'text-background/60' : 'text-foreground/50'}`}>
                {tier.description}
              </p>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {tier.features.map(feature => (
                  <li key={feature} className="flex items-center gap-4 text-[13px] font-bold">
                    <div className={`w-5 h-5 rounded-lg flex items-center justify-center ${tier.isPopular ? 'bg-primary text-white' : 'bg-secondary text-primary'}`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className={tier.isPopular ? 'text-background/80' : 'text-foreground/80'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.isPopular ? 'secondary' : 'outline'} 
                className={`w-full h-14 rounded-2xl text-[13px] font-black uppercase tracking-widest ${tier.isPopular ? 'bg-white text-foreground hover:bg-white/90 border-transparent' : ''}`}
              >
                {tier.cta}
              </Button>

              <div className="mt-6 flex items-center justify-center gap-2 opacity-30">
                <Info size={12} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Taxes may apply</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

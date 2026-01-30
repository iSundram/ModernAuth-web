import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { fadeInUp } from '../animations/variants';

const faqs = [
  {
    question: "How does multi-tenancy work in ModernAuth?",
    answer: "ModernAuth has built-in support for isolated tenants (organizations). Each tenant can have its own custom settings, domains, and user pools, making it perfect for SaaS applications that require data isolation."
  },
  {
    question: "Is the RBAC system customizable?",
    answer: "Yes, our Role-Based Access Control system is fully granular. You can define custom roles and permissions, and use our built-in middleware to enforce them across your API endpoints."
  },
  {
    question: "What MFA methods are supported?",
    answer: "Currently, ModernAuth supports Time-based One-Time Passwords (TOTP) through standard authenticator apps. We also provide built-in verification flows and MFA completion endpoints."
  },
  {
    question: "Can I deploy ModernAuth on-premise?",
    answer: "Absolutely. ModernAuth is Docker-ready and can be deployed anywhere containerized workloads run, including Kubernetes, AWS, or your own dedicated infrastructure."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-spacing bg-white overflow-hidden">
      <div className="container-tight">
        <motion.div 
          className="text-center mb-24"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4 block">Support Center</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
            COMMON <span className="text-foreground/30 italic">INQUIRIES.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-3xl transition-all duration-500 ${openIndex === index ? 'border-primary bg-secondary/30' : 'border-border/40 hover:border-border'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <span className="text-lg font-bold tracking-tight">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-secondary text-foreground'}`}>
                  {openIndex === index ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-8 pt-0">
                      <p className="text-foreground/60 font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

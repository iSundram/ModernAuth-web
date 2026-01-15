import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp } from '../animations/variants';
import { Code, Terminal, Zap, Book } from 'lucide-react';

const tabs = [
  {
    id: 'setup',
    label: 'Initialization',
    icon: <Zap size={16} />,
    code: `// Initialize ModernAuth client
const client = new ModernAuth({
  apiKey: process.env.MODERNAUTH_KEY,
  tenantId: 'org_8f2k9x',
});`
  },
  {
    id: 'auth',
    label: 'Registration',
    icon: <Terminal size={16} />,
    code: `// Secure user registration
const { user, session } = await client.auth.register({
  email: 'user@example.com',
  password: 'securePassword123',
  metadata: { plan: 'pro' }
});`
  },
  {
    id: 'mfa',
    label: 'MFA Flow',
    icon: <Code size={16} />,
    code: `// Verify TOTP code
const result = await client.mfa.verify({
  userId: user.id,
  code: '123456',
  type: 'totp'
});`
  }
];

export function DocumentationPreview() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4 block">Developer Ergonomics</span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-8">
              BUILT FOR <br />
              <span className="text-foreground/30 italic">VELOCITY.</span>
            </h2>
            <p className="text-xl text-foreground/50 font-medium leading-relaxed mb-12">
              Intuitive SDKs and type-safe APIs that feel natural. We handle the complexity of identity so you can focus on building your core product.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all
                    ${activeTab === tab.id 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-secondary/50 text-foreground/40 hover:bg-secondary hover:text-foreground'
                    }
                  `}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            <a href="/docs" className="inline-flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest hover:underline group">
              <Book size={18} />
              Read full documentation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-foreground rounded-3xl p-1 shadow-2xl overflow-hidden"
          >
            <div className="bg-[#0a0a0a] rounded-[1.4rem] p-8 min-h-[300px] flex flex-col">
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <pre className="font-mono text-sm md:text-base text-white/80 leading-relaxed flex-grow">
                <code>
                  {tabs.find(t => t.id === activeTab)?.code}
                </code>
              </pre>
              <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                <span>typescript-sdk v2.1.0</span>
                <span className="text-primary/40">ready_for_production</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

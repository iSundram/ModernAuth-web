import { motion } from 'framer-motion';
import { pageTransition, fadeInUp } from '../animations/variants';
import { Terminal, Book, Code, Zap } from 'lucide-react';

export function Docs() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-32 pb-20 min-h-screen"
    >
      <div className="container-custom grid lg:grid-cols-[280px_1fr] gap-12">
        {/* Sidebar */}
        <aside className="hidden lg:block space-y-8 sticky top-32 h-fit">
          <div>
            <h4 className="font-bold mb-4 font-mono text-sm uppercase tracking-wider text-foreground/40">Getting Started</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li><a href="#" className="text-primary font-bold">Introduction</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Quick Start</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Installation</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Architecture</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 font-mono text-sm uppercase tracking-wider text-foreground/40">Core Concepts</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Authentication</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Authorization (RBAC)</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Multi-tenancy</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 font-mono text-sm uppercase tracking-wider text-foreground/40">API Reference</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">v1/auth</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">v1/users</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">v1/tenants</a></li>
            </ul>
          </div>
        </aside>

        {/* Content */}
        <div className="space-y-12">
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Terminal size={24} />
              <span className="font-mono text-sm font-bold uppercase tracking-widest">Documentation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 font-heading">
              INTRODUCTION
            </h1>
            <p className="text-xl text-foreground/60 font-medium leading-relaxed max-w-3xl">
              ModernAuth is a Go-native identity core designed for high-performance applications. 
              It provides a complete suite of authentication and authorization primitives out of the box.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="prose prose-lg prose-slate max-w-none">
            <h3 className="font-heading font-bold text-2xl mb-4">Why ModernAuth?</h3>
            <p className="mb-6 text-foreground/60">
              Building authentication is hard. Building secure, scalable, and compliant authentication is even harder. 
              ModernAuth abstracts the complexity of identity management into a single, easy-to-deploy binary.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <Zap className="text-primary mb-4" />
                <h4 className="font-bold mb-2">High Performance</h4>
                <p className="text-sm text-foreground/60">Built with Go 1.23+ for sub-millisecond latency.</p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <Code className="text-primary mb-4" />
                <h4 className="font-bold mb-2">Developer Experience</h4>
                <p className="text-sm text-foreground/60">Type-safe SDKs and intuitive REST APIs.</p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <Book className="text-primary mb-4" />
                <h4 className="font-bold mb-2">Open Standards</h4>
                <p className="text-sm text-foreground/60">Full OIDC and OAuth 2.0 compliance.</p>
              </div>
            </div>

            <h3 className="font-heading font-bold text-2xl mb-4">Quick Start</h3>
            <p className="mb-4 text-foreground/60">Initialize a new project using our CLI tool:</p>
            
            <div className="bg-foreground text-background p-6 rounded-2xl overflow-x-auto my-6 font-mono text-sm shadow-xl relative group">
                <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"/>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                    <div className="w-3 h-3 rounded-full bg-green-500"/>
                </div>
                <div className="mt-4 space-y-2">
                    <p><span className="text-primary">$</span> curl -sL https://modernauth.com/install.sh | bash</p>
                    <p><span className="text-primary">$</span> modernauth init my-project</p>
                    <p className="text-gray-500"># Setting up configuration...</p>
                    <p className="text-gray-500"># Generating keys...</p>
                    <p className="text-green-400">✓ Ready to rock!</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

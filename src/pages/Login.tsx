import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import { Button, Input } from '../components';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Login() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen grid lg:grid-cols-2"
    >
      {/* Left Panel - Form */}
      <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-24 py-12 bg-background relative">
        <Link to="/" className="absolute top-8 left-8 sm:left-12 flex items-center gap-2 text-sm font-bold text-foreground/40 hover:text-foreground transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="w-full max-w-md mx-auto">
          <div className="mb-12">
             <div className="flex items-center gap-3 mb-6">
                <img src="/logo-icon.svg" alt="Logo" className="w-8 h-8 object-contain" />
                <span className="font-heading font-black text-xl tracking-tighter">ModernAuth</span>
             </div>
             <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4 font-heading">Welcome back</h1>
             <p className="text-foreground/50 font-medium">Enter your credentials to access the dashboard.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <Input label="Email" type="email" placeholder="name@company.com" required />
            <div>
               <Input label="Password" type="password" placeholder="••••••••" required />
               <div className="flex justify-end mt-2">
                 <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</a>
               </div>
            </div>

            <Button size="lg" className="w-full h-14 rounded-xl text-[13px] font-black uppercase tracking-widest mt-8">
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm font-medium text-foreground/40">
              Don't have an account? <a href="#" className="text-foreground hover:underline font-bold">Start for free</a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Visual */}
      <div className="hidden lg:flex bg-foreground items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 mesh-grid opacity-10" />
        
        <div className="relative z-10 max-w-lg text-center">
           <div className="w-24 h-24 bg-primary/20 rounded-3xl mx-auto mb-8 flex items-center justify-center backdrop-blur-sm border border-white/10">
              <img src="/logo-icon.svg" alt="Logo" className="w-12 h-12 object-contain invert opacity-80" />
           </div>
           <h2 className="text-3xl font-heading font-black text-background mb-6">Security by Design.</h2>
           <p className="text-background/60 text-lg leading-relaxed">
             ModernAuth is engineered from the ground up to be the most 
             secure, performant, and developer-friendly identity core ever built.
           </p>
        </div>
      </div>
    </motion.div>
  );
}

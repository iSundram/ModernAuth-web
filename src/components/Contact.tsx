import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from './Button';
import { Input, Textarea } from './Input';
import { fadeInUp, staggerContainer, staggerItem } from '../animations/variants';

export function Contact() {
  return (
    <section id="contact" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div 
            variants={staggerContainer} 
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.span variants={staggerItem} className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4 block">
              Direct Access
            </motion.span>
            
            <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
              LET'S START THE <br className="hidden md:block" />
              <span className="text-foreground/30">CONVERSATION.</span>
            </motion.h2>
            
            <motion.p variants={staggerItem} className="text-lg md:text-xl text-foreground/50 font-medium mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities, our experts are ready.
            </motion.p>
            
            <motion.div variants={staggerItem} className="flex flex-col gap-6 items-center lg:items-start">
              <div className="flex items-center gap-4 group w-full max-w-sm lg:max-w-none">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                  <Mail size={20} />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted mb-1">Electronic Mail</p>
                  <p className="text-base font-bold text-foreground break-all sm:break-normal">partnerships@modernauth.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group w-full max-w-sm lg:max-w-none">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                  <MapPin size={20} />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted mb-1">Global HQ</p>
                  <p className="text-base font-bold text-foreground">77 Geary St, San Francisco</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.form 
            variants={fadeInUp} 
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true }}
            className="bg-background border border-border/40 p-8 md:p-12 rounded-[2.5rem] shadow-premium relative overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none hidden md:block">
              <MessageSquare size={120} />
            </div>
            
            <div className="relative z-10 grid gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input label="Identity" placeholder="Your Name" required />
                <Input label="Connectivity" type="email" placeholder="Your Email" required />
              </div>
              <Textarea label="Inquiry" placeholder="How can we collaborate?" required />
              <Button size="lg" className="h-14 rounded-2xl text-[13px] font-black uppercase tracking-widest w-full sm:w-auto" rightIcon={<Send size={18} />}>
                Initialize Dispatch
              </Button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

export function CTABanner() {
  return (
    <section className="section-spacing pt-0">
      <div className="container-custom">
        <div className="bg-foreground rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-32 text-center relative overflow-hidden shadow-premium-hover">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-primary/20 to-transparent -z-10" />
          <div className="absolute top-0 left-0 w-full h-full mesh-grid opacity-10 pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-background mb-12 tracking-tighter leading-[0.9]">
              THE FUTURE ISN'T WAITING. <br className="hidden md:block" />
              <span className="text-background/40">ARE YOU?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="secondary" size="lg" className="h-16 px-12 bg-white text-foreground hover:bg-white/90 rounded-2xl text-base font-black uppercase tracking-widest">
                Deploy Now
              </Button>
              <Button size="lg" className="h-16 px-12 bg-transparent text-background border border-white/20 hover:bg-white/10 rounded-2xl text-base font-black uppercase tracking-widest">
                Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

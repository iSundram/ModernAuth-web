import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { DecoderText } from './DecoderText';
import { staggerContainer, staggerItem, revealText } from '../animations/variants';

export function Hero({ onCtaClick }: { onCtaClick?: () => void }) {
  return (
    <div className="w-full relative flex flex-col items-center lg:items-start text-center lg:text-left">
      <motion.div 
        className="w-full max-w-5xl"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Badge */}
        <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border/50 text-foreground text-[13px] font-semibold mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          Protocol Initialized: v1.24.0-alpha
        </motion.div>

        {/* Heading with Reveal Effect */}
        <div className="overflow-hidden mb-8 w-full">
          <motion.h1 
            variants={revealText}
            className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[1] text-foreground break-words w-full"
          >
            <DecoderText text="MODERN" /> <br className="hidden sm:block" />
            <span className="inline-block bg-foreground text-background px-4 py-1 my-2 rounded-lg font-mono tracking-normal transform -rotate-2">{`{ IDENTITY }`}</span><br />
            <DecoderText text="CORE" delay={500} /><span className="text-primary animate-pulse">_</span>
          </motion.h1>
        </div>

        <motion.p 
          variants={staggerItem}
          className="text-base md:text-xl text-foreground/60 mb-12 max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0"
        >
          A modern, Go-native authentication and identity core. 
          Built for scale, engineered for security, designed for developers.
        </motion.p>

        <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
          <Button isMagnetic size="lg" onClick={onCtaClick} className="w-full sm:w-auto h-14 px-10 text-base" rightIcon={<ArrowRight size={18} />}>
            Get Started Free
          </Button>
          <Button isMagnetic variant="outline" size="lg" className="w-full sm:w-auto h-14 px-10 text-base font-mono group border-2" leftIcon={<span className="mr-1 text-lg">$_</span>}>
            watch_demo
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

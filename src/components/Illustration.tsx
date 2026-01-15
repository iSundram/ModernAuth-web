import { motion } from 'framer-motion';

export function Illustration() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      
      {/* Abstract Shapes */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-[1px] border-primary/20 rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] shadow-2xl"
      />
      
      <motion.div 
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 border-[1px] border-foreground/10 rounded-[70% 30% 30% 70% / 70% 70% 30% 30%]"
      />

      {/* Floating "Data" Points */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-primary rounded-lg shadow-lg"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
            x: [0, Math.sin(i) * 30, 0]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
          style={{
            top: `${20 + i * 15}%`,
            left: `${15 + (i % 3) * 25}%`
          }}
        >
          <div className="absolute inset-0 bg-primary animate-ping opacity-20 rounded-lg" />
        </motion.div>
      ))}

      {/* Central Core */}
      <div className="absolute inset-[30%] glass rounded-3xl flex items-center justify-center border border-white/20 shadow-premium">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center p-3">
          <img src="/logo-icon.svg" alt="Logo" className="w-full h-full object-contain invert" />
        </div>
      </div>
    </div>
  );
}

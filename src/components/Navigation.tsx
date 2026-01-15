import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { SystemStatus } from './SystemStatus';

export function Navigation({ onCtaClick }: { onCtaClick?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Docs', path: '/docs' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 z-50 transition-all duration-500 ${isScrolled ? 'h-16 mt-4 inset-x-4 md:inset-x-8 rounded-2xl glass shadow-premium' : 'h-24 inset-x-0 bg-transparent'}`}>
        <nav className="container-custom flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo-icon.svg" alt="Logo" className="w-10 h-10 object-contain" />
              <span className={`font-black text-2xl tracking-tighter ${isScrolled ? 'scale-90 opacity-0' : 'scale-100 opacity-100'} transition-all duration-500 origin-left hidden lg:block`}>ModernAuth</span>
            </Link>
            <div className="hidden lg:block">
              <SystemStatus />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-[13px] font-bold transition-colors uppercase tracking-widest ${
                  location.pathname === link.path ? 'text-primary' : 'text-foreground/50 hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-[13px] font-bold uppercase tracking-widest">Sign In</Button>
            </Link>
            <Button size="sm" onClick={onCtaClick} className="px-6 rounded-xl" rightIcon={<ArrowUpRight size={14} />}>
              Get Started
            </Button>
          </div>

          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-background md:hidden p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <img src="/logo-full.svg" alt="Logo" className="h-10 object-contain" />
              <button className="p-2 bg-secondary rounded-xl" onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-4xl font-black tracking-tighter hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-auto flex flex-col gap-4">
                <Button size="lg" onClick={onCtaClick} className="w-full h-16 rounded-2xl text-lg">Get Started</Button>
                <Link to="/login" className="w-full">
                  <Button variant="outline" size="lg" className="w-full h-16 rounded-2xl text-lg">Sign In</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

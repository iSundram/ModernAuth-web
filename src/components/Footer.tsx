import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { DecoderText } from './DecoderText';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pb-12 pt-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 mb-24">
          <div className="sm:col-span-2">
            <a href="/" className="flex items-center gap-3 font-black text-2xl tracking-tighter mb-8">
              <img src="/logo-icon.svg" alt="Logo" className="w-10 h-10 object-contain invert" />
              <span>ModernAuth</span>
            </a>
            <p className="text-background/50 font-medium max-w-sm leading-relaxed mb-8">
              Redefining digital craftsmanship through precision-engineered 
              components and uncompromising design standards.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-background/40 hover:text-background hover:bg-white/10 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Platform', links: ['Features', 'Pricing', 'Security', 'Roadmap'] },
            { title: 'Company', links: ['About', 'Careers', 'Brand', 'Contact'] },
          ].map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-background/30 mb-8">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm font-bold text-background/60 hover:text-background transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-background/30 mb-8">
              Stay Informed
            </h4>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Updates via email" 
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-4 sm:py-3 text-sm font-bold focus:outline-none focus:border-primary transition-colors min-w-0"
              />
              <button className="px-6 py-4 sm:py-3 bg-white text-foreground rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/90 transition-colors whitespace-nowrap min-w-[100px]">
                <DecoderText text="JOIN" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-background/20 text-center md:text-left">
            © {currentYear} MODERNAUTH IDENTITY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {['Privacy', 'Terms', 'Security'].map(item => (
              <a key={item} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-background/20 hover:text-background transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
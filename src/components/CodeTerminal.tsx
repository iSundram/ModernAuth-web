import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const snippets = [
  {
    label: 'CURL',
    language: 'bash',
    code: `curl -X POST https://api.modernauth.com/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{\n    "email": "dev@modernauth.local",\n    "password": "****************"\n  }'`
  },
  {
    label: 'Go SDK',
    language: 'go',
    code: `client := modernauth.NewClient(apiKey)
user, err := client.Auth().Login(ctx, email, password)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Authenticated: %s\n", user.ID)`
  },
  {
    label: 'CLI',
    language: 'bash',
    code: `modernauth login --email dev@modernauth.local
# [?] Enter your password: ****************
# [✓] Successfully authenticated as dev
# [i] Active session: dev_session_8f2k9`
  }
];

export function CodeTerminal() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let currentText = '';
    let i = 0;
    const fullText = snippets[index].code;
    
    const interval = setInterval(() => {
      if (i < fullText.length) {
        currentText += fullText[i];
        setDisplayText(currentText);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % snippets.length);
        }, 4000);
      }
    }, 15);
    
    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden font-mono text-[13px] md:text-sm"
    >
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-2.5 h-3 rounded-full bg-red-500/20" />
          <div className="w-2.5 h-3 rounded-full bg-yellow-500/20" />
          <div className="w-2.5 h-3 rounded-full bg-green-500/20" />
        </div>
        <div className="flex gap-4">
          {snippets.map((s, i) => (
            <span 
              key={s.label}
              className={`text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${i === index ? 'text-white' : 'text-white/20'}`}
            >
              {s.label}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 h-[220px] md:h-[240px] overflow-hidden relative">
        <pre className="text-white/70 leading-relaxed">
          <code className="block whitespace-pre-wrap">
            {displayText}
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-white/40 ml-1 align-middle"
            />
          </code>
        </pre>
        
        <div className="absolute bottom-4 right-6 text-[9px] text-white/10 font-black uppercase tracking-[0.3em]">
          ModernAuth Core v1.24.0
        </div>
      </div>
    </motion.div>
  );
}

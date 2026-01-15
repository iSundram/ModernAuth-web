import { Marquee } from './Marquee';

const tech = [
  "PostgreSQL", "Redis", "Docker", "Go 1.24", "Kubernetes", "OAuth 2.0", "OIDC", 
  "JWT", "Argon2id", "Prometheus", "Slog", "GitHub", "Google", "Microsoft"
];

export function TechStack() {
  return (
    <section className="py-12 bg-foreground text-background/20 border-y border-white/5 overflow-hidden">
      <Marquee speed={40} direction="left">
        {tech.map((t, i) => (
          <span 
            key={i} 
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase mx-12 hover:text-white transition-colors cursor-default"
          >
            {t}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

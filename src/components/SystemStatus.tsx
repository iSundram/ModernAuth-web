export function SystemStatus() {
  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/50 border border-border/20">
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/60">
        All systems operational
      </span>
    </div>
  );
}

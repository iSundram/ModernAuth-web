import { motion, useMotionValue, useSpring } from 'framer-motion';

export function InteractiveGrid() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          background: `radial-gradient(800px circle at ${springX}px ${springY}px, #d4d4d4, transparent 80%)`,
        }}
      />
      <div className="absolute inset-0 mesh-grid opacity-20" />
    </div>
  );
}

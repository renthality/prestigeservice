import { useMemo } from "react";

const GoldParticles = ({ count = 28 }: { count?: number }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 14 + 12,
        delay: Math.random() * 14,
        opacity: Math.random() * 0.5 + 0.2,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${p.left}%`,
            bottom: `-10px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 3}px hsl(45 100% 60% / ${p.opacity})`,
            animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default GoldParticles;

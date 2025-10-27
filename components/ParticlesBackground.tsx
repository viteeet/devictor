'use client';

import {motion} from 'framer-motion';

export function ParticlesBackground() {
  // Reduzir partículas em mobile para performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleCount = isMobile ? 15 : 40;
  
  const particles = Array.from({length: particleCount}, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 4,
    delay: (Math.random() * 8),
    baseOpacity: 0.4 + Math.random() * 0.4,
    glowColor: i % 3 === 0 ? 'rgba(59, 130, 246, 1)' : i % 3 === 1 ? 'rgba(56, 189, 248, 1)' : 'rgba(99, 102, 241, 1)',
  }));
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating luminous particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.glowColor,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px ${particle.glowColor}`,
            filter: 'blur(0.5px)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [particle.baseOpacity * 0.5, particle.baseOpacity, particle.baseOpacity * 0.5],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
    </div>
  );
}


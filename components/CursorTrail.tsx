'use client';

import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

export function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [trails, setTrails] = useState<Array<{x: number; y: number; id: number}>>([]);
  const [particles, setParticles] = useState<Array<{x: number; y: number; id: number; opacity: number}>>([]);
  let trailId = 0;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({x: e.clientX, y: e.clientY});
      
      // Adicionar ponto ao trail
      setTrails(prev => [...prev.slice(-10), {x: e.clientX, y: e.clientY, id: trailId++}]);
      
      // Adicionar partícula ocasional
      if (Math.random() > 0.7) {
        const particle = {
          x: e.clientX,
          y: e.clientY,
          id: Date.now() + Math.random(),
          opacity: 1,
        };
        setParticles(prev => [...prev, particle]);
        
        // Remover partícula após animação
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== particle.id));
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Trail suave */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed w-2 h-2 rounded-full bg-blue-500/30 pointer-events-none z-50"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
          }}
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 0.8 - index * 0.08, scale: 1}}
          exit={{opacity: 0}}
        />
      ))}
      
      {/* Partículas que seguem o mouse */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed w-1.5 h-1.5 rounded-full pointer-events-none z-50"
          style={{
            left: particle.x - 3,
            top: particle.y - 3,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 1), transparent)',
            boxShadow: '0 0 8px rgba(59, 130, 246, 0.8)',
          }}
          initial={{opacity: 1, scale: 0, x: 0, y: 0}}
          animate={{
            opacity: 0,
            scale: 2,
            x: (Math.random() - 0.5) * 30,
            y: (Math.random() - 0.5) * 30,
          }}
          transition={{duration: 1, ease: 'easeOut'}}
        />
      ))}
    </>
  );
}


'use client';

import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

export function Logo() {
  const [currentScheme, setCurrentScheme] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Inicia o glitch antes de trocar
      setIsGlitching(true);
      
      setTimeout(() => {
        setCurrentScheme((prev) => (prev + 1) % 2);
        setIsGlitching(false);
      }, 100);
    }, 3000); // Alterna a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl font-display font-bold relative">
      <AnimatePresence mode="wait">
        {currentScheme === 0 ? (
          <motion.span
            key="scheme-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={isGlitching ? 'glitch-text' : ''}
          >
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              DEV
            </span>
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              ICTOR
            </span>
          </motion.span>
        ) : (
          <motion.span
            key="scheme-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={isGlitching ? 'glitch-text' : ''}
          >
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              DE
            </span>
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              VICTOR
            </span>
          </motion.span>
        )}
      </AnimatePresence>
      
      {/* Efeito de ruído digital */}
      {isGlitching && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: [0, 1, 0],
            x: [0, -2, 2, 0],
          }}
          transition={{
            duration: 0.1,
            repeat: 2,
          }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
            mixBlendMode: 'difference',
            width: '100%',
          }}
        />
      )}
    </div>
  );
}


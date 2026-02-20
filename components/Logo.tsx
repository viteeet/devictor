'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Logo() {
  const [scheme, setScheme] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setScheme((prev) => (prev + 1) % 2);
        setIsGlitching(false);
      }, 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const texts = ['VCTR STUDIO', 'Victor Hugo'];

  return (
    <div className="text-2xl font-display font-bold relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={scheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={isGlitching ? 'glitch-text' : ''}
        >
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            {texts[scheme]}
          </span>
        </motion.span>
      </AnimatePresence>
      {isGlitching && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0, 1, 0], x: [0, -2, 2, 0] }}
          transition={{ duration: 0.1, repeat: 2 }}
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

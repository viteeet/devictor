'use client';

import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}
          className="fixed inset-0 z-[9999] bg-dark flex items-center justify-center"
        >
          {/* Animação de carga */}
          <div className="relative">
            {/* Logo destacado separadamente */}
            <div className="flex gap-3 items-center justify-center">
              {/* DEV */}
              <motion.div
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold"
                initial={{opacity: 0, y: -50, rotateX: 90}}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  },
                }}
              >
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  DEV
                </span>
              </motion.div>

              {/* Barra separadora */}
              <motion.div
                className="w-1 h-20 bg-gradient-to-b from-primary via-secondary to-accent"
                initial={{scaleY: 0}}
                animate={{scaleY: 1}}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                }}
              />

              {/* VICTOR */}
              <motion.div
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold"
                initial={{opacity: 0, y: -50, rotateX: 90}}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 0.6,
                  delay: 1,
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                  },
                }}
              >
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  VICTOR
                </span>
              </motion.div>
            </div>

            {/* Barra de progresso */}
            <motion.div
              className="mt-8 h-1 w-64 bg-darker rounded-full overflow-hidden mx-auto"
              initial={{width: 0}}
              animate={{width: 256}}
              transition={{duration: 2, ease: 'easeInOut'}}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-secondary via-accent to-primary"
                initial={{x: '-100%'}}
                animate={{x: '100%'}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Texto de carregamento */}
            <motion.div
              className="text-center mt-6 text-gray-400"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              Carregando...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


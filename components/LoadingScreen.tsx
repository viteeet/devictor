'use client';

import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
          <div className="relative">
            <motion.div
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-center"
              initial={{opacity: 0, y: -50, rotateX: 90}}
              animate={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: [1, 1.05, 1],
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
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                CODRATEC
              </span>
            </motion.div>

            {/* Progress bar: fill animates scaleX 0→1 to show real progress */}
            <div className="mt-8 h-1 w-64 bg-darker rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-secondary via-accent to-primary rounded-full origin-left"
                initial={{scaleX: 0}}
                animate={{scaleX: 1}}
                transition={{duration: 1.8, ease: 'easeInOut', delay: 0.2}}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

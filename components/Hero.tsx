'use client';

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ParticlesBackground } from './ParticlesBackground';
import { useLocale } from '@/contexts/LocaleContext';

const WHATSAPP_URL = 'https://wa.me/393313888587';

function ShuffleText({ text }: { text: string }) {
  const letters = text.split('');
  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block">
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeOut' }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  const [isGlitching, setIsGlitching] = useState(false);
  const { t } = useLocale();

  const handleWhatsAppHover = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      <div className="absolute inset-0 gradient-bg" />
      <div
        className="absolute inset-0 opacity-10 z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight px-4"
              animate={{
                textShadow: [
                  '0 0 0 rgba(59, 130, 246, 0), 5px 0 0 rgba(56, 189, 248, 0), -5px 0 0 rgba(99, 102, 241, 0)',
                  '0 0 0 rgba(59, 130, 246, 1), 5px 0 0 rgba(56, 189, 248, 1), -5px 0 0 rgba(99, 102, 241, 1), 3px 0 0 rgba(236, 72, 153, 0.8), -3px 0 0 rgba(14, 165, 233, 0.8)',
                  '0 0 0 rgba(59, 130, 246, 0), 5px 0 0 rgba(56, 189, 248, 0), -5px 0 0 rgba(99, 102, 241, 0)',
                ],
                x: [0, 3, -3, 2, -2, 0],
                y: [0, 1, -1, 0],
              }}
              transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
            >
              <span className="text-white">
                <ShuffleText text={t('hero.title')} />
              </span>
            </motion.h1>
            <motion.div
              className="relative inline-block mt-2"
              animate={{
                textShadow: [
                  '0 0 0 rgba(59, 130, 246, 0), 4px 0 0 rgba(56, 189, 248, 0), -4px 0 0 rgba(99, 102, 241, 0)',
                  '0 0 0 rgba(59, 130, 246, 1), 4px 0 0 rgba(56, 189, 248, 1), -4px 0 0 rgba(99, 102, 241, 1), 2px 0 0 rgba(236, 72, 153, 0.9), -2px 0 0 rgba(14, 165, 233, 0.9)',
                  '0 0 0 rgba(59, 130, 246, 0), 4px 0 0 rgba(56, 189, 248, 0), -4px 0 0 rgba(99, 102, 241, 0)',
                ],
                x: [0, 2, -2, 1, -1, 0],
                y: [0, 1, -1, 0],
              }}
              transition={{ duration: 0.12, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
            >
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold px-4">
                <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text text-shimmer">
                  {t('hero.subtitle')}
                </span>
              </p>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto px-4"
          >
            {t('hero.tagline')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 cursor-pointer"
              onMouseEnter={handleWhatsAppHover}
              animate={
                isGlitching
                  ? {
                      x: [0, 3, -3, 4, -4, 2, -2, 0],
                      y: [0, 3, -3, 4, -4, 2, -2, 0],
                      rotate: [0, 8, -8, 5, -5, 0],
                    }
                  : {}
              }
              transition={{ duration: 0.15, times: [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1] }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('hero.cta')}</span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}

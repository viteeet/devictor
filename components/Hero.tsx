'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';

const WHATSAPP_URL = 'https://wa.me/393313888587';

const HERO_VALUES = [
  'Sistemas em operação contínua',
  'Automações em rotinas críticas',
  'Sistemas financeiros e operacionais',
  'Do zero à produção'
];

export function Hero() {
  const { t } = useLocale();

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-slate-900 pt-20 overflow-hidden">
      {/* Subtle grid background instead of particles/glows for a technical feel */}
      <div
        className="absolute inset-0 opacity-[0.03] z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-bold leading-[1.1] tracking-tight text-slate-100 mb-6">
              {t('hero.title')}. <br className="hidden md:block" />
              <span className="text-2xl sm:text-3xl md:text-4xl text-primary font-medium tracking-normal block mt-2">{t('hero.subtitle')}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            {t('hero.tagline')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 items-start mb-20"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-slate-900 font-bold text-lg hover:bg-white transition-colors duration-200 w-full sm:w-auto"
            >
              {t('hero.cta')}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-slate-700 text-slate-300 font-bold text-lg hover:border-slate-500 hover:text-slate-100 transition-colors duration-200 w-full sm:w-auto"
            >
              {t('nav.services')}
            </a>
          </motion.div>
          
          {/* Animated Ticker / Value Props */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative flex overflow-hidden border-t border-slate-800 pt-8"
          >
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="flex whitespace-nowrap items-center gap-12 text-xs uppercase tracking-widest text-slate-500 font-semibold"
            >
              {/* Render the list multiple times to create a seamless loop */}
              {[...HERO_VALUES, ...HERO_VALUES, ...HERO_VALUES].map((value, i) => (
                <div key={i} className="flex items-center gap-12">
                  <span>{value}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

'use client';

import { Code2, Users, Award, Building2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useLocale } from '@/contexts/LocaleContext';

const STAT_KEYS = ['years', 'clients', 'projects', 'companies'] as const;
const STAT_VALUES = [5, 10, 10, 5];
const ICONS = [Award, Users, Code2, Building2];

const LINKEDIN_URL = 'https://br.linkedin.com/in/victor-hugo-8785451b9';

export function About() {
  const { t } = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const currents = [0, 0, 0, 0];
    const increments = STAT_VALUES.map((v) => v / steps);
    const timer = setInterval(() => {
      let done = true;
      for (let i = 0; i < 4; i++) {
        if (currents[i] < STAT_VALUES[i]) {
          done = false;
          currents[i] = Math.min(STAT_VALUES[i], currents[i] + increments[i]);
        }
      }
      setCounts(currents.map((c) => Math.floor(c)));
      if (done) clearInterval(timer);
    }, stepDuration);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section id="about" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text">
          {t('about.title')}
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr] gap-10 md:gap-14 items-start mb-16"
        >
          <div className="flex justify-center md:justify-start">
            <img
              src="/profile.jpeg"
              alt="Victor Hugo"
              className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover border border-white/10 shadow-xl"
            />
          </div>
          <div className="min-w-0">
            <p className="text-lg font-semibold text-secondary mb-2">{t('about.role')}</p>
            <p className="text-gray-400 leading-relaxed">{t('about.bio')}</p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-accent font-medium transition-colors mt-6"
            >
              {t('about.linkedin')}
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STAT_KEYS.map((key, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {counts[index]}+
                </div>
                <div className="text-gray-400 text-sm">{t(`about.stats.${key}`)}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

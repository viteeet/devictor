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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text">
            {t('about.title')}
          </h2>
          <p className="text-lg font-semibold text-secondary mb-4">{t('about.role')}</p>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">{t('about.bio')}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {STAT_KEYS.map((key, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl border border-primary/20"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/20 rounded-lg">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent mb-2">
                  {counts[index]}+
                </div>
                <div className="text-gray-400 text-sm md:text-base">{t(`about.stats.${key}`)}</div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:text-accent font-medium transition-colors"
          >
            {t('about.linkedin')} →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

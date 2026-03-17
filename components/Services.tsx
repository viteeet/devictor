'use client';

import { Code, Network, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';

const SERVICE_KEYS = ['websystems', 'automation', 'integrations', 'data', 'bots', 'business', 'consulting'] as const;
const ICONS = [Code, Cloud, Network, Database, Cloud, Code, Network];

export function Services() {
  const { t, get } = useLocale();

  return (
    <section id="services" className="py-14 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">
            {t('services.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {SERVICE_KEYS.map((key, index) => {
            const Icon = ICONS[index];
            const title = t(`services.${key}.title`);
            const description = t(`services.${key}.description`);
            const tags = (get(`services.${key}.tags`) as string[]) || [];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-slate-700 bg-slate-800 hover:bg-slate-700 hover:border-slate-600 shadow-sm transition-all duration-300"
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/20 w-fit">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-100">{title}</h3>
                <p className="text-slate-300 text-sm mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm text-slate-200 border border-slate-600 bg-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

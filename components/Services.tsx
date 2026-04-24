'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';

const SERVICE_KEYS = ['websystems', 'automation', 'integrations', 'data', 'bots', 'business', 'consulting'] as const;

export function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="py-24 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
            {t('services.title')}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-100 leading-tight max-w-3xl mx-auto">
            {t('services.subtitle')}
          </h3>
        </div>

        {/* Small Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICE_KEYS.map((key, index) => {
            const title = t(`services.${key}.title`);
            const description = t(`services.${key}.description`);
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-6 md:p-8 flex flex-col h-full bg-slate-900 border border-slate-700/60 rounded-sm hover:border-slate-500 hover:bg-slate-800 transition-colors duration-300"
              >
                <div className="text-slate-600 font-mono text-xs font-bold mb-5 flex justify-between items-center">
                  <span>0{index + 1}</span>
                  <div className="w-4 h-[1px] bg-slate-700 group-hover:bg-primary transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white">
                  {title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

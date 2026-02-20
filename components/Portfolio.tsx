'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ImageIcon } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

const PROJECT_KEYS = ['item1', 'item2', 'item3'] as const;

type ProjectItem = {
  num: string;
  type: string;
  name: string;
  description: string;
  cta: string;
  url?: string;
  image?: string;
};

export function Portfolio() {
  const { t, get } = useLocale();

  return (
    <section id="projects" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text">
            {t('projects.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECT_KEYS.map((key, index) => {
            const item = get(`projects.${key}`) as ProjectItem | null;
            if (!item || typeof item !== 'object') return null;
            const { num, type, name, description, cta, url = '', image = '' } = item;
            const hasLink = url && url.trim() !== '';

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col p-8 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                {/* Espaço para foto do projeto */}
                <div className="aspect-video w-full rounded-lg bg-darker/60 border border-primary/20 flex items-center justify-center mb-6 overflow-hidden">
                  {image ? (
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-2 text-gray-500">
                      <ImageIcon className="w-10 h-10" />
                      <span className="text-xs">Foto do projeto</span>
                    </div>
                  )}
                </div>

                <span className="text-4xl font-display font-bold text-secondary/80">{num}</span>
                <p className="text-sm text-gray-500 mt-1">{type}</p>
                <h3 className="text-lg font-semibold text-white mt-2">
                  <span className="text-secondary">{name}</span>
                </h3>
                <p className="text-gray-400 text-sm mt-3 mb-6 flex-1">{description}</p>
                {hasLink ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-secondary hover:text-accent font-medium text-sm transition-colors"
                  >
                    {cta}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-secondary hover:text-accent font-medium text-sm transition-colors"
                  >
                    {cta} →
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

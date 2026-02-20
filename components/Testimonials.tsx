'use client';

import { motion } from 'framer-motion';
import { Quote, Building2, Linkedin } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

const LINKEDIN_PROFILE_URL = 'https://br.linkedin.com/in/victor-hugo-8785451b9';

type TestimonialItem = { name: string; company: string; text: string; image?: string };

export function Testimonials() {
  const { t, get } = useLocale();
  const items = (get('testimonials.items') as TestimonialItem[]) ?? [];

  return (
    <section id="testimonials" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text">
            {t('testimonials.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('testimonials.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              <div className="w-16 h-16 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center mb-4 overflow-hidden shrink-0">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.company}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Building2 className="w-8 h-8 text-gray-500" />
                )}
              </div>
              <Quote className="w-8 h-8 text-primary mb-3" />
              <p className="text-gray-300 mb-4 flex-1">{item.text}</p>
              <div>
                <p className="font-semibold text-secondary">{item.name}</p>
                {item.company ? <p className="text-sm text-gray-400">{item.company}</p> : null}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30 text-secondary font-medium transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            {t('testimonials.viewOnLinkedIn')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

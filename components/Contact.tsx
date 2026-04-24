'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';

const WHATSAPP_URL = 'https://wa.me/393313888587';

export function Contact() {
  const { t } = useLocale();
  const phone = t('common.phone');
  const email = t('common.email');

  return (
    <section id="contact" className="py-32 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-100 mb-6 leading-tight">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6 shrink-0 lg:w-[320px]"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-8 py-5 bg-primary text-slate-900 font-bold text-lg hover:bg-white transition-colors duration-200"
            >
              {t('contact.cta')}
            </a>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                {t('contact.orEmail')}
              </span>
              <a
                href={`mailto:${email}`}
                className="text-slate-300 hover:text-primary transition-colors text-lg font-medium"
              >
                {email}
              </a>
              
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="text-slate-300 hover:text-primary transition-colors text-lg font-medium mt-2"
              >
                {phone}
              </a>
            </div>
          </motion.div>
          
        </div>
        
      </div>
    </section>
  );
}

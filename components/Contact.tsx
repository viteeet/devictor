'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

const WHATSAPP_URL = 'https://wa.me/393313888587';

export function Contact() {
  const [isGlitching, setIsGlitching] = useState(false);
  const { t } = useLocale();
  const phone = t('common.phone');
  const email = t('common.email');

  const handleWhatsAppHover = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

  return (
    <section id="contact" className="py-20 bg-darker">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text">
            {t('contact.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
        >
          <div className="p-6 sm:p-8 md:p-10">
            <div className="flex flex-col items-center mb-8">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-secondary rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] cursor-pointer w-full sm:w-auto min-w-[240px]"
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
                <MessageCircle className="w-6 h-6 shrink-0" />
                <span>{t('contact.cta')}</span>
              </motion.a>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-center text-gray-500 text-sm mb-4">
                {t('contact.orCall')} · {t('contact.orEmail')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.05] transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-gray-300 font-medium">{phone}</span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.05] transition-colors"
                >
                  <Mail className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-gray-300 font-medium truncate">{email}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

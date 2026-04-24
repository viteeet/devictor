'use client';

import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useLocale } from '@/contexts/LocaleContext';

const LINKEDIN_VICTOR = 'https://br.linkedin.com/in/victor-hugo-8785451b9';
const LINKEDIN_BEATRIZ = 'https://www.linkedin.com/in/beatriz-souto-de-freitas-82a892133/';

export function About() {
  const { t } = useLocale();
  const ref = useRef(null);

  const members = [
    {
      name: 'Victor Hugo',
      role: t('about.victor.role'),
      bio: t('about.victor.bio'),
      photo: '/victor.png',
      linkedin: LINKEDIN_VICTOR,
    },
    {
      name: 'Beatriz Souto',
      role: t('about.beatriz.role'),
      bio: t('about.beatriz.bio'),
      photo: '/beatriz.png',
      linkedin: LINKEDIN_BEATRIZ,
    },
  ];

  return (
    <section id="about" className="py-20 bg-darker overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-slate-100"
        >
          {t('about.title')}
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20"
        >
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative flex flex-col items-center md:items-start text-center md:text-left p-8 rounded-sm border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm hover:bg-slate-800/60 hover:border-primary/30 transition-all duration-500 shadow-xl"
            >
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6 w-full">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-28 h-28 rounded-sm object-cover border-2 border-slate-700 group-hover:border-primary/50 relative z-10 transition-colors duration-500 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-secondary rounded-sm p-1.5 shadow-lg z-20 hidden md:block">
                    <Linkedin className="w-4 h-4 text-slate-900" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-secondary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-bold text-sm tracking-wide uppercase mt-1">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-slate-300 leading-relaxed text-sm lg:text-base flex-1 mb-8">
                {member.bio}
              </p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-100 bg-slate-700/50 hover:bg-primary px-5 py-2.5 rounded-sm font-medium transition-all duration-300 group/link"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">{t('about.linkedin')}</span>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

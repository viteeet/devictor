'use client';

import {useTranslations} from 'next-intl';
import {MessageCircle, ArrowRight, Sparkles} from 'lucide-react';
import {motion} from 'framer-motion';
import {ParticlesBackground} from './ParticlesBackground';

export function HeroAlt() {
  const t = useTranslations('hero');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10 z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            {/* Badge de Status */}
            <motion.div
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.6}}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-primary">Disponível para projetos</span>
            </motion.div>

            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.1}}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              <span className="text-gray-200">Soluções em</span>
              <br />
              <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                Código & Automação
              </span>
            </motion.h1>

            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.3}}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.5}}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/5521983573881"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-secondary rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              >
                <MessageCircle className="w-5 h-5" />
                {t('cta')}
              </a>

              <a
                href="#services"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-darker border border-primary/30 hover:border-secondary rounded-lg font-semibold text-white transition-all duration-300"
              >
                Ver Serviços
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.7}}
              className="mt-12 flex flex-wrap gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span>Entrega Rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span>Código Limpo</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span>Suporte Contínuo</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden lg:block">
            <motion.div
              initial={{opacity: 0, scale: 0.8}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.8, delay: 0.3}}
              className="relative"
            >
              {/* Tech Stack Visual */}
              <div className="relative bg-darker/50 backdrop-blur-lg border border-primary/20 rounded-2xl p-8">
                <div className="space-y-4">
                  {[
                    {tech: 'Next.js / React', color: 'from-blue-500 to-cyan-500'},
                    {tech: 'Python', color: 'from-yellow-500 to-orange-500'},
                    {tech: 'PostgreSQL / MongoDB', color: 'from-purple-500 to-pink-500'},
                    {tech: 'APIs & Integrações', color: 'from-green-500 to-emerald-500'},
                  ].map((item, index) => (
                    <motion.div
                      key={item.tech}
                      initial={{opacity: 0, x: -20}}
                      animate={{opacity: 1, x: 0}}
                      transition={{duration: 0.5, delay: 0.5 + index * 0.1}}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`} />
                      <span className="text-gray-300">{item.tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating orbs */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


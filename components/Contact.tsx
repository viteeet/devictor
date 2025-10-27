'use client';

import {motion} from 'framer-motion';
import {MessageCircle, Mail} from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-darker">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Vamos Conversar?
          </h2>
          <p className="text-gray-400">Tire suas dúvidas ou solicite um orçamento</p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="space-y-6"
        >
          {/* Contato direto */}
          <div className="text-center space-y-6">
            <a
              href="https://wa.me/5521983573881"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-secondary rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


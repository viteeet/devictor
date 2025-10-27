'use client';

import {useState} from 'react';
import {motion} from 'framer-motion';
import {MessageCircle, Mail} from 'lucide-react';

export function Contact() {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleWhatsAppHover = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text">
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
            <motion.a
              href="https://wa.me/5521983573881"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-secondary rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 cursor-pointer"
              onMouseEnter={handleWhatsAppHover}
              animate={isGlitching ? {
                x: [0, 3, -3, 4, -4, 2, -2, 0],
                y: [0, 3, -3, 4, -4, 2, -2, 0],
                rotate: [0, 8, -8, 5, -5, 0],
              } : {}}
              transition={{
                duration: 0.15,
                times: [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1],
              }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


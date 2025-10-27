'use client';

import {MessageCircle} from 'lucide-react';
import {motion} from 'framer-motion';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5521983573881"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}


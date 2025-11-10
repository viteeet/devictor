'use client';

import {Github, Linkedin} from 'lucide-react';
import {motion} from 'framer-motion';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-darker border-t border-primary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            © {year} DEVICTOR. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/viteeet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://br.linkedin.com/in/victor-hugo-8785451b9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <a
            href="/privacy"
            className="text-gray-400 hover:text-secondary transition-colors text-sm"
          >
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}


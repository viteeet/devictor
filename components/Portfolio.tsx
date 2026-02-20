'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ImageIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import portfolioImagesFallback from '@/lib/portfolio-images.json';

const PROJECT_KEYS = ['item1', 'item2', 'item3'] as const;
const FOLDER_BY_KEY: Record<(typeof PROJECT_KEYS)[number], string> = {
  item1: 'projeto 1',
  item2: 'projeto 2',
  item3: 'projeto 3',
};

type ProjectItem = {
  type: string;
  name: string;
  description: string;
  cta: string;
  url?: string;
  image?: string;
  images?: string[];
};

function ProjectCard({
  index,
  type,
  name,
  description,
  cta,
  url,
  hasLink,
  images,
}: {
  index: number;
  type: string;
  name: string;
  description: string;
  cta: string;
  url: string;
  hasLink: boolean;
  images: string[];
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const hasMultipleImages = images.length > 1;

  const goPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const goNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 transition-colors duration-300"
    >
      {/* Imagem em destaque */}
      <div className="aspect-video w-full bg-darker/80 flex items-center justify-center overflow-hidden relative group shrink-0">
        {images.length > 0 ? (
          <>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={encodeURI(images[currentImageIndex])}
                alt={name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Próxima"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentImageIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${i === currentImageIndex ? 'bg-secondary w-5' : 'bg-white/40 w-1.5 hover:bg-white/60'}`}
                      aria-label={`Foto ${i + 1} de ${images.length}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-gray-500 py-12">
            <ImageIcon className="w-12 h-12" />
            <span className="text-sm">Sem imagem</span>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">{type}</p>
        <button
          type="button"
          onClick={() => setPopupOpen(true)}
          className="text-left group mt-0.5"
        >
          <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-secondary transition-colors">
            {name}
          </h3>
        </button>
        <div className="mt-4 pt-4 border-t border-white/10">
          {hasLink ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-accent font-medium transition-colors"
            >
              {cta}
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          ) : (
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-accent font-medium transition-colors"
            >
              {cta}
            </a>
          )}
        </div>
      </div>

      <AnimatePresence>
        {popupOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              onClick={() => setPopupOpen(false)}
              aria-hidden
            />
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
              aria-hidden
            >
              <motion.div
                key="dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="popup-title"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl border border-primary/30 bg-darker shadow-2xl flex flex-col md:flex-row overflow-hidden pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.key === 'Escape' && setPopupOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setPopupOpen(false)}
                  className="absolute top-3 right-3 z-10 rounded-lg p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                  aria-label="Fechar"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Coluna esquerda: imagem */}
                <div className="relative w-full md:w-[45%] md:min-w-0 flex-shrink-0 bg-darker/80">
                  {images.length > 0 ? (
                    <div className="relative w-full aspect-video md:aspect-auto md:h-full min-h-[220px]">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          src={encodeURI(images[currentImageIndex])}
                          alt={name}
                          className="w-full h-full object-contain"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      </AnimatePresence>
                      {hasMultipleImages && (
                        <>
                          <button
                            type="button"
                            onClick={goPrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                            aria-label="Foto anterior"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            type="button"
                            onClick={goNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                            aria-label="Próxima foto"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {images.map((_, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => setCurrentImageIndex(i)}
                                className={`h-1.5 rounded-full transition-all ${i === currentImageIndex ? 'bg-secondary w-5' : 'bg-white/50 w-1.5 hover:bg-white/70'}`}
                                aria-label={`Ver imagem ${i + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="w-full aspect-video md:h-full min-h-[220px] flex items-center justify-center text-gray-500">
                      <ImageIcon className="w-14 h-14" />
                    </div>
                  )}
                </div>

                {/* Coluna direita: texto */}
                <div className="flex-1 min-w-0 overflow-y-auto flex flex-col justify-center p-5 sm:p-6 md:p-8">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">{type}</p>
                  <h3 id="popup-title" className="text-xl font-semibold text-white mb-4">
                    <span className="text-secondary">{name}</span>
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">{description}</p>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    {hasLink ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-secondary hover:text-accent font-medium transition-colors"
                      >
                        {cta}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-secondary hover:text-accent font-medium transition-colors"
                        onClick={() => setPopupOpen(false)}
                      >
                        {cta}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function Portfolio() {
  const { t, get } = useLocale();
  const [imagesByFolder, setImagesByFolder] = useState<Record<string, string[]>>(
    portfolioImagesFallback as Record<string, string[]>
  );

  useEffect(() => {
    fetch('/api/portfolio-images')
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data && typeof data === 'object') setImagesByFolder(data);
      })
      .catch(() => {});
  }, []);

  return (
    <section id="projects" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text">
            {t('projects.title')}
          </h2>
          <p className="mt-2 text-gray-400 text-sm md:text-base">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PROJECT_KEYS.map((key, index) => {
            const item = get(`projects.${key}`) as ProjectItem | null;
            if (!item || typeof item !== 'object') return null;
            const { type, name, description, cta, url = '', image = '', images: imagesArray } = item;
            const folderImages = imagesByFolder[FOLDER_BY_KEY[key]] || [];
            const images = folderImages.length > 0
              ? folderImages
              : (Array.isArray(imagesArray) && imagesArray.length > 0 ? imagesArray : image ? [image] : []);
            const hasLink = url && url.trim() !== '';

            return (
              <ProjectCard
                key={key}
                index={index}
                type={type}
                name={name}
                description={description}
                cta={cta}
                url={url}
                hasLink={hasLink}
                images={images}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

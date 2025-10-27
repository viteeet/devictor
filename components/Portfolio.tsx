'use client';

import {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {motion} from 'framer-motion';

export function Portfolio() {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Simulando busca de imagens da pasta /public/portfolio
    // Em produção, você pode listar os arquivos de forma dinâmica
    const portfolioImages = [
      '/portfolio/1.jpg',
      '/portfolio/2.jpg',
      '/portfolio/3.jpg',
      '/portfolio/4.jpg',
      '/portfolio/5.jpg',
    ];
    setImages(portfolioImages);
  }, []);

  if (images.length === 0) return null;

  return (
    <section id="portfolio" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Portfólio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Alguns dos projetos que desenvolvi</p>
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="portfolio-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-secondary/10 cursor-pointer group" onClick={() => setSelectedImage(image)}>
                  <div className="absolute inset-0 flex items-center justify-center bg-darker/60 group-hover:bg-darker/40 transition-colors">
                    <span className="text-white font-semibold">Projeto {index + 1}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/50 w-10 h-10 rounded-full hover:bg-black/70"
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt="Portfolio"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


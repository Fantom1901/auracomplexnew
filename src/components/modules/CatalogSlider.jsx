"use client";

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';

// Импорты всех картинок
import img1 from '../../../public/assets/catalog/1.jpg';
import img2 from '../../../public/assets/catalog/2.png';
import img3 from '../../../public/assets/catalog/3.jpg';
import img4 from '../../../public/assets/catalog/4.png';
import img5 from '../../../public/assets/catalog/5.jpg';
import img6 from '../../../public/assets/catalog/6.jpg';
import img7 from '../../../public/assets/catalog/7.jpg';
import img8 from '../../../public/assets/catalog/8.jpg';
import img9 from '../../../public/assets/catalog/9.jpg';

// ВОЗВРАЩЕН ИСХОДНЫЙ ПОРЯДОК СЛАЙДОВ
const slides = [
  { id: 1, src: img4 },
  { id: 2, src: img2 },
  { id: 3, src: img6 },
  { id: 4, src: img8 },
  { id: 5, src: img1 },
  { id: 6, src: img7 },
  { id: 7, src: img5 },
  { id: 8, src: img3 },
  { id: 9, src: img9 },
];

export default function CatalogSlider() {
  const [activeImage, setActiveImage] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: false,
    duration: 32
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    setMounted(true);
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);
    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', () => {
      onSelect(emblaApi);
      onScroll(emblaApi);
    });
  }, [emblaApi, onSelect, onScroll]);

  return (
    <section className="w-full bg-light-bg text-brand-dark py-10 md:py-22 select-none relative overflow-hidden">

      {/* ЗАГОЛОВОК И КНОПКИ НАВИГАЦИИ */}
      <div className="w-full px-4 md:px-20 max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-dark/40 font-medium">
            Каталог локаций
          </span>
          <h2 className="font-medium text-3xl md:text-5xl leading-tight text-brand-dark tracking-tight">
            Атмосфера в деталях
          </h2>
        </div>

        <div className="flex items-center md:items-end justify-between md:justify-start gap-12 w-full md:w-auto">
          <p className="text-sm md:text-base font-normal text-brand-dark/70 max-w-xs leading-relaxed">
            Листайте галерею и нажимайте на фото, чтобы рассмотреть интерьеры во весь экран.
          </p>

          <div className="hidden md:flex items-center gap-3 pl-4">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className={`
                w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center 
                transition-all duration-300 ease-out bg-transparent text-brand-dark
                ${prevBtnDisabled ? 'opacity-25 cursor-not-allowed' : 'hover:bg-brand-dark hover:text-white hover:border-brand-dark cursor-pointer'}
              `}
              aria-label="Предыдущий слайд"
            >
              <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className={`
                w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center 
                transition-all duration-300 ease-out bg-transparent text-brand-dark
                ${nextBtnDisabled ? 'opacity-25 cursor-not-allowed' : 'hover:bg-brand-dark hover:text-white hover:border-brand-dark cursor-pointer'}
              `}
              aria-label="Следующий слайд"
            >
              <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* СЛАЙДЕР EMBLA */}
      <div ref={emblaRef} className="w-full overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="flex gap-5 md:gap-8 px-[8vw] md:px-[31vw]">

          {slides.map((slide, index) => {
            const isInactive = index !== selectedIndex;

            return (
              <div
                key={slide.id}
                onClick={() => setActiveImage(slide.src)}
                className="relative flex-none w-[84vw] md:w-[38vw] max-w-[480px] aspect-[1024/1280] rounded-2xl md:rounded-3xl overflow-hidden bg-stone-100 border border-stone-200/30 shadow-sm transition-shadow duration-300 hover:shadow-md cursor-zoom-in"
              >
                <Image
                  src={slide.src}
                  alt="Локация комплекса AURA"
                  fill
                  placeholder="blur"
                  sizes="(max-w-768px) 84vw, 480px"
                  className="object-cover pointer-events-none"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

                <div
                  className={`
                    absolute inset-0 bg-light-bg pointer-events-none transition-opacity duration-600 ease-[0.16,1,0.3,1] opacity-0
                    ${isInactive ? 'md:opacity-[0.55]' : 'md:opacity-0'}
                  `}
                />
              </div>
            );
          })}

        </div>
      </div>

      {/* ПРОГРЕССБАР */}
      <div className="w-[calc(100vw-32px)] md:w-[calc(100vw-160px)] max-w-7xl mx-auto mt-16 h-[2px] bg-brand-dark/10 relative rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-brand-dark rounded-full transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* МОДАЛКА ЗУМА ЧЕРЕЗ ПОРТАЛ */}
      {mounted && createPortal(
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            >
              <button className="absolute top-6 right-6 text-white/50 text-xs tracking-widest uppercase hover:text-white transition-colors">
                Закрыть
              </button>

              <motion.div
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.98 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-full max-h-[82vh] md:max-h-[88vh] flex items-center justify-center"
              >
                <Image
                  src={activeImage}
                  alt="Увеличенное фото локации"
                  className="w-auto h-auto max-w-full max-h-[82vh] md:max-h-[88vh] object-contain rounded-lg md:rounded-xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </section>
  );
}
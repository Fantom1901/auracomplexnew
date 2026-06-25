'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryVariants = {
  enter: { opacity: 0 },
  center: {
    opacity: 1,
    transition: { opacity: { duration: 0.35, ease: 'linear' } }
  },
  exit: {
    opacity: 0,
    transition: { opacity: { duration: 0.25, ease: 'linear' } }
  }
};

const getValidIndex = (page, total) => {
  return ((page % total) + total) % total;
};

// sliderClassName принимает любые размеры, высоты и аспекты снаружи
export default function PremiumSlider({ items = [], title, sectionTag, sliderClassName = '' }) {
  const [page, setPage] = useState(0);

  if (!items.length) return null;

  const activeIndex = getValidIndex(page, items.length);
  const currentItem = items[activeIndex];
  const isStandalone = !title;

  const paginate = (newDirection) => {
    setPage((prev) => prev + newDirection);
  };

  return (
    <section className={`w-full text-brand-dark flex flex-col items-center overflow-hidden ${isStandalone ? 'p-0' : 'py-12 md:py-24 px-4 md:px-16'}`}>

      {/* КЛАССИЧЕСКАЯ ВЕРХНЯЯ ПАНЕЛЬ */}
      {!isStandalone && (
        <div className="w-full max-w-[1400px] mb-8 md:mb-12 flex items-end justify-between px-2">
          <div className="flex flex-col gap-2">
            {sectionTag && (
              <span className="text-xs uppercase tracking-[0.25em] text-brand-dark/40 font-medium">
                {sectionTag}
              </span>
            )}
            <h2 className="font-medium text-3xl md:text-5xl tracking-tight leading-none text-brand-dark">
              {title}
            </h2>
          </div>

          <div className="font-normal text-base md:text-lg tracking-widest flex items-center gap-2 select-none text-brand-dark/80">
            <span className="font-medium">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="text-brand-dark/20">/</span>
            <span className="text-brand-dark/40">{String(items.length).padStart(2, '0')}</span>
          </div>
        </div>
      )}

      {/* ГЛАВНЫЙ ЭКРАН СЛАЙДЕРА */}
      {/* Никакого хардкода: только базовые стили, а размеры полностью управляются через sliderClassName */}
      <div className={`w-full relative rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.07)] border border-stone-200/40 bg-stone-950 ${sliderClassName}`}>

        {/* АНИМИРОВАННЫЙ СЛОЙ */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={page}
            variants={galleryVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full flex flex-col justify-end items-start p-6 md:p-12 select-none overflow-hidden"
          >
            {/* БЭКГРАУНД */}
            <div className={`absolute inset-0 z-0 bg-gradient-to-br ${currentItem.color}`}>
              <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 left-1/3 w-80 h-80 rounded-full bg-black/[0.15] blur-2xl pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(transparent_50%,rgba(0,0,0,0.3))] opacity-60 mix-blend-multiply" />
            </div>

            {/* Мягкий градиент под текст */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10" />

            {/* КОНТЕНТ СЛАЙДА */}
            <div className="z-20 pointer-events-none flex flex-col gap-1.5 md:gap-2.5 max-w-xl">
              {currentItem.tag && (
                <span className="text-[9px] md:text-xs uppercase tracking-[0.3em] text-white/50 font-medium bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded-full w-fit">
                  {currentItem.tag}
                </span>
              )}
              <h3 className="text-white text-base md:text-2xl font-normal tracking-wide leading-tight">
                {currentItem.title}
              </h3>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* СТАТИЧНЫЙ СЛОЙ УПРАВЛЕНИЯ */}
        {isStandalone && (
          <>
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all active:scale-90 cursor-pointer"
              aria-label="Назад"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all active:scale-90 cursor-pointer"
              aria-label="Вперед"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <div className="absolute top-4 right-4 md:top-6 md:right-6 z-30 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-black/30 backdrop-blur-md text-[10px] md:text-xs tracking-widest text-white/80 border border-white/5 font-medium">
              {activeIndex + 1} / {items.length}
            </div>
          </>
        )}
      </div>

      {/* КЛАССИЧЕСКИЙ НИЖНИЙ ПРОГРЕСС-БАР И СТРЕЛКИ */}
      {!isStandalone && (
        <div className="w-full max-w-[1400px] mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
          <div className="w-full sm:max-w-xs md:max-w-md h-[2px] bg-brand-dark/10 relative rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-brand-dark"
              initial={{ width: '0%' }}
              animate={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
              transition={{ duration: 0.3, ease: 'linear' }}
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group hover:border-brand-dark transition-colors duration-300 active:scale-95 cursor-pointer"
              aria-label="Назад"
            >
              <svg className="w-5 h-5 stroke-brand-dark group-hover:-translate-x-0.5 transition-transform" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group hover:border-brand-dark transition-colors duration-300 active:scale-95 cursor-pointer"
              aria-label="Вперед"
            >
              <svg className="w-5 h-5 stroke-brand-dark group-hover:translate-x-0.5 transition-transform" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
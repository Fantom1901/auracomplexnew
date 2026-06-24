'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

// Заглушки для демонстрации
const galleryImages = [
  { id: 1, color: 'bg-stone-300', title: 'Панорамный бассейн AURA' },
  { id: 2, color: 'bg-stone-400', title: 'Вид на террасу и горы' },
  { id: 3, color: 'bg-stone-500', title: 'Интерьер главного зала' },
  { id: 4, color: 'bg-stone-600', title: 'Уютные вечерние костровища' },
  { id: 5, color: 'bg-stone-700', title: 'Прогулочная зона у реки' },
];

// Варианты анимации для внешнего контейнера слайда
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 1.02
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.6, ease: 'easeInOut' },
      scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 }
    }
  })
};

// Варианты анимации для бэкграунда (эффект параллакса при кликах на стрелки)
const bgParallaxVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '-30%' : '30%',
  }),
  center: {
    x: '0%',
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  },
  exit: (direction) => ({
    x: direction < 0 ? '-30%' : '30%',
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Gallery() {
  const [[page, direction], setPage] = useState([0, 0]);
  const containerRef = useRef(null); // Убрали <HTMLDivElement> для чистого JS

  const activeIndex = Math.abs(page % galleryImages.length);

  // Динамически отслеживаем физическое смещение слайда при ручном драге
  const dragX = useMotionValue(0);

  // Трансформируем смещение dragX в смещение фона (движется в 3 раза медленнее карточки)
  const dragBgX = useTransform(dragX, (value) => value * 0.3);

  const paginate = (newDirection) => {
    // Сбрасываем ручной drag в 0 перед триггером анимации смены слайдов
    dragX.set(0);
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="w-full bg-light-bg text-brand-dark py-20 md:py-36 px-6 md:px-16 flex flex-col items-center overflow-hidden">

      {/* ВЕРХНЯЯ ПАНЕЛЬ: ЗАГОЛОВОК И СЧЕТЧИК */}
      <div className="w-full max-w-[1400px] mb-8 md:mb-12 flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] text-brand-dark/40 font-medium"
          >
            Visual Aesthetics
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-medium text-3xl md:text-5xl tracking-tight leading-none"
          >
            Галерея комплекса
          </motion.h2>
        </div>

        {/* Минималистичный счетчик страниц */}
        <div className="font-normal text-lg md:text-xl tracking-wider flex items-center gap-2">
          <span className="text-brand-dark">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-brand-dark/20">/</span>
          <span className="text-brand-dark/40">
            {String(galleryImages.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* ГЛАВНЫЙ ЭКРАН СЛАЙДЕРА С ПОДДЕРЖКОЙ СВАЙПА */}
      <div
        ref={containerRef}
        className="w-full max-w-[1400px] h-[50vh] md:h-[75vh] relative rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_30px_70px_rgba(48,67,64,0.06)] border border-stone-200/30 touch-pan-y"
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"

            // Передаем MotionValue для отслеживания позиции перетаскивания
            style={{ x: dragX }}

            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}

            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing flex items-end p-8 md:p-16 select-none overflow-hidden"
          >
            {/* ВНУТРЕННИЙ БЭКГРАУНД С ЭФФЕКТОМ ПАРАЛЛАКСА */}
            <motion.div
              custom={direction}
              variants={bgParallaxVariants}
              style={{ x: dragBgX }}
              className={`absolute -inset-x-[30%] inset-y-0 z-0 will-change-transform ${galleryImages[activeIndex].color}`}
            >
              <div className="w-full h-full" />
            </motion.div>

            {/* Мягкий градиент на фотке для читаемости текста */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent pointer-events-none z-10" />

            {/* Название текущего кадра */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-brand-white text-lg md:text-2xl font-medium tracking-wide z-20 pointer-events-none"
            >
              {galleryImages[activeIndex].title}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* НИЖНЯЯ НАВИГАЦИОННАЯ ЛИНЕЙКА */}
      <div className="w-full max-w-[1400px] mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Тонкий графический прогресс-бар */}
        <div className="w-full sm:max-w-md h-[2px] bg-brand-dark/10 relative rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-brand-dark"
            initial={{ width: '0%' }}
            animate={{ width: `${((activeIndex + 1) / galleryImages.length) * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
        </div>

        {/* Аккуратные кнопки управления */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group hover:border-brand-dark transition-colors duration-300 active:scale-95"
            aria-label="Назад"
          >
            <svg className="w-5 h-5 stroke-brand-dark group-hover:-translate-x-0.5 transition-transform" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group hover:border-brand-dark transition-colors duration-300 active:scale-95"
            aria-label="Вперед"
          >
            <svg className="w-5 h-5 stroke-brand-dark group-hover:translate-x-0.5 transition-transform" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>

    </section>
  );
}
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/buttons/SolidButton'; // Импортируем нашу крутую кнопку

const servicesData = [
  {
    id: 1,
    title: 'Подогреваем панорамный бассейн',
    time: 'c 8:00 до 21:00',
    size: 'md:col-span-7',
    bg: 'bg-stone-200'
  },
  {
    id: 2,
    title: 'Гранд-баня с купелью',
    time: 'и три бани на высоте',
    size: 'md:col-span-5',
    bg: 'bg-stone-300'
  },
  {
    id: 3,
    title: 'Двухэтажная детская комната',
    time: 'пространство для игр',
    size: 'md:col-span-5',
    bg: 'bg-stone-300'
  },
  {
    id: 4,
    title: 'Детская площадка',
    time: 'с эко-песочницей',
    size: 'md:col-span-7',
    bg: 'bg-stone-200'
  }
];

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);

  // Следим за скроллом конкретной карточки относительно экрана
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Фирменное смещение от 0% до 15% для эффекта параллакса
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className={`group relative h-[350px] md:h-[480px] rounded-[24px] md:rounded-[32px] overflow-hidden ${service.size} cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-stone-200/40`}
    >
      {/* Контейнер бэкграунда с эффектом параллакса */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-x-0 -top-[15%] bottom-0 z-0 will-change-transform transition-transform duration-1000 ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
      >
        {/* Пока фоток нет — оставляем заливку, когда добавишь тег <Image />, эффект применится к нему */}
        <div className={`w-full h-full ${service.bg}`} />
      </motion.div>

      {/* Градиентное затемнение поверх параллакса */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-dark/60 via-brand-dark/10 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-95" />

      {/* Контент карточки */}
      <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end text-brand-white">
        <span className="text-xs md:text-sm uppercase tracking-[0.15em] text-brand-white/70 mb-2 block font-normal">
          {service.time}
        </span>
        <h3 className="text-xl md:text-2xl font-medium tracking-tight max-w-sm group-hover:translate-x-1 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]">
          {service.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const handleLoadMore = () => {
    console.log('Загружаем оставшиеся услуги...');
  };

  return (
    <section className="w-full bg-light-bg text-brand-dark py-20 md:py-36 px-6 md:px-16 flex flex-col items-center">

      {/* ЗАГОЛОВОК СЕКЦИИ */}
      <div className="w-full max-w-[1400px] mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-medium text-3xl md:text-5xl tracking-tight leading-none"
        >
          Услуги и развлечения
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-sm md:text-base text-brand-dark/60 max-w-xs font-normal tracking-wide"
        >
          Создали все условия, чтобы ваш отдых был беззаботным и наполненным комфортом.
        </motion.p>
      </div>

      {/* АСИММЕТРИЧНАЯ СЕТКА КАРТОЧЕК */}
      <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* ИНТЕГРАЦИЯ НАШЕЙ МЕГА КРУТОЙ КНОПКИ */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 md:mt-24"
      >
        <Button
          variant="outline"
          onClick={handleLoadMore}
          rounded="rounded-[20px] md:rounded-[24px]"
        >
          Показать все услуги
        </Button>
      </motion.div>

    </section>
  );
}
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { m, useScroll, useTransform, useSpring } from 'framer-motion';
import Button from '@/components/ui/buttons/SolidButton';

import auraPool from '../../../../public/assets/auraPool.jpg';
import banyaImg from '../../../../public/assets/banya.webp'; // Переключили на webp
import kidsImg from '../../../../public/assets/kids.jpg';
import playgroundImg from '../../../../public/assets/playground.jpg';

const servicesData = [
  {
    id: 1,
    title: 'Подогреваем панорамный бассейн',
    time: 'c 8:00 до 21:00',
    size: 'md:col-span-7',
    bg: 'bg-stone-200',
    image: auraPool
  },
  {
    id: 2,
    title: 'Гранд-баня с купелью',
    time: 'и три бани на высоте',
    size: 'md:col-span-5',
    bg: 'bg-stone-300',
    image: banyaImg
  },
  {
    id: 3,
    title: 'Двухэтажная детская комната',
    time: 'пространство для игр',
    size: 'md:col-span-5',
    bg: 'bg-stone-300',
    image: kidsImg
  },
  {
    id: 4,
    title: 'Детская площадка',
    time: 'с эко-песочницей',
    size: 'md:col-span-7',
    bg: 'bg-stone-200',
    image: playgroundImg
  }
];

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);

  // Контролируем скролл карточки
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const smoothY = useSpring(rawY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <m.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className={`group relative h-[350px] md:h-[480px] rounded-[24px] md:rounded-[32px] overflow-hidden ${service.size} cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-stone-200/40 will-change-[opacity,transform]`}
    >
      {/* Контейнер бэкграунда с параллаксом */}
      <m.div
        style={{ y: smoothY }}
        className="absolute -inset-y-12 inset-x-0 z-0 will-change-transform"
      >
        <div className="relative w-full h-full transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105">
          {service.image ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              placeholder="blur"
              quality={65} // Фиксируем оптимальное сжатие сервером
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px" // Починили синтаксис max-width и ограничили десктопную ширину
              className="object-cover"
              priority={index < 2}
            />
          ) : (
            <div className={`w-full h-full ${service.bg}`} />
          )}
        </div>
      </m.div>

      {/* Градиентное затемнение поверх параллакса */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-dark/70 via-brand-dark/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-95" />

      {/* Контент карточки */}
      <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end text-brand-white">
        <span className="text-xs md:text-sm uppercase tracking-[0.15em] text-brand-white/70 mb-2 block font-normal">
          {service.time}
        </span>
        <m.h3 className="text-xl md:text-2xl font-medium tracking-tight max-w-sm group-hover:translate-x-1 transition-transform duration-500 ease-[0.16, 1, 0.3, 1] will-change-transform">
          {service.title}
        </m.h3>
      </div>
    </m.div>
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
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-medium text-3xl md:text-5xl tracking-tight leading-none will-change-[opacity,transform]"
        >
          Услуги и развлечения
        </m.h2>
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-sm md:text-base text-brand-dark/60 max-w-xs font-normal tracking-wide will-change-opacity"
        >
          Создали все условия, чтобы ваш отдых был беззаботным и наполненным комфортом.
        </m.p>
      </div>

      {/* АСИММЕТРИЧНАЯ СЕТКА КАРТОЧЕК */}
      <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* КНОПКА */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 md:mt-24 will-change-opacity"
      >
        <Button
          variant="outline"
          onClick={handleLoadMore}
          rounded="rounded-[20px] md:rounded-[24px]"
        >
          Показать все услуги
        </Button>
      </m.div>

    </section>
  );
}
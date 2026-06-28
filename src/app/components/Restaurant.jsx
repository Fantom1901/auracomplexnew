'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { m, useScroll, useTransform, useSpring } from 'framer-motion';
import Button from '@/components/ui/buttons/SolidButton';

// ИМПОРТИРУЕМ ФОТО СЮДА (Замени названия файлов на свои)
import restaurantMain from '../../../public/assets/restaurantMain.jpg';
import restaurantAccent from '../../../public/assets/restaurantAccent.jpg';

export default function Restaurant() {
  const collageRef = useRef(null);

  // Следим за движением секции коллажа относительно экрана
  const { scrollYProgress } = useScroll({
    target: collageRef,
    offset: ["start end", "end start"]
  });

  // Основное изображение смещается стандартно (используем числа для скорости)
  const mainRawY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const mainImageY = useSpring(mainRawY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Акцентное изображение смещается чуть сильнее, создавая эффект многослойности
  const accentRawY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const accentImageY = useSpring(accentRawY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section className="w-full bg-light-bg text-brand-dark py-20 md:py-36 px-6 md:px-16 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        {/* ЛЕВАЯ КОЛОНКА: ИНФОРМАЦИЯ (5 колонок на десктопе) */}
        <div className="lg:col-span-5 flex flex-col items-start z-10">

          {/* Надзаголовок для премиального контекста */}
          <m.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs md:text-sm uppercase tracking-[0.2em] text-brand-dark/50 mb-4 md:mb-6 font-medium will-change-[opacity,transform]"
          >
            Гастрономия
          </m.span>

          {/* Заголовок с благородным leading и трекингом */}
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 md:mb-8 text-brand-dark will-change-[opacity,transform]"
          >
            Ресторан <br />
            Сибирской кухни <br />
            «Тепло»
          </m.h2>

          {/* Текст: Убрали центрирование, сделали аккуратную выключку влево, добавили воздух */}
          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col gap-4 text-base md:text-lg leading-relaxed text-brand-dark/80 font-normal max-w-md mb-8 md:mb-10 will-change-[opacity,transform]"
          >
            <p>
              Уютный зал с панорамным остеклением и живым камином на берегу Маны. Здесь всё наполнено особой атмосферой сибирского гостеприимства.
            </p>
            <p className="text-sm md:text-base text-brand-dark/60">
              Действует доставка в номера и по территории поселка Манский.
            </p>
          </m.div>

          {/* Информационные плашки: Часы работы теперь выглядят как элемент сервиса */}
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-8 border-t border-b border-brand-dark/10 py-4 w-full max-w-md mb-10 md:mb-12 will-change-opacity"
          >
            <div>
              <span className="text-xs uppercase tracking-wider text-brand-dark/40 block mb-1">График работы</span>
              <span className="font-medium text-base md:text-lg tracking-wide">08:00 — 23:00</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-brand-dark/40 block mb-1">Локация</span>
              <span className="font-medium text-base md:text-lg tracking-wide">Первый на Мане</span>
            </div>
          </m.div>

          {/* Наша кастомная крутая кнопка */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 300, damping: 25 }}
            className="will-change-[opacity,transform]"
          >
            <Button variant="outline" rounded="rounded-[16px] md:rounded-[20px]" href="restaurant">
              Подробнее о ресторане
            </Button>
          </m.div>
        </div>

        {/* ПРАВАЯ КОЛОНКА: ВИЗУАЛ (7 колонок на десктопе, асимметричный коллаж) */}
        <div
          ref={collageRef}
          className="lg:col-span-7 grid grid-cols-12 gap-4 md:gap-6 relative w-full h-[450px] md:h-[650px] mt-8 lg:mt-0"
        >

          {/* Главный большой кадр интерьера */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="col-span-8 h-[85%] rounded-[24px] md:rounded-[40px] overflow-hidden relative shadow-[0_20px_50px_rgba(48,67,64,0.08)] will-change-[opacity,transform]"
          >
            {/* Обертка для параллакса внутри маски карточки */}
            <m.div
              style={{ y: mainImageY }}
              className="absolute inset-x-0 -top-[15%] bottom-0 z-0 will-change-transform"
            >
              {/* Обертка для ховера с фиксом position relative под <Image fill /> */}
              <div className="relative w-full h-full transition-transform duration-1000 ease-out hover:scale-103">
                {restaurantMain ? (
                  <Image
                    src={restaurantMain}
                    alt="Ресторан Тепло"
                    fill
                    placeholder="blur"
                    sizes="(max-w-1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-stone-300" />
                )}
              </div>
            </m.div>
          </m.div>

          {/* Второй контрастный кадр (акцент на детали / еду), уходящий внахлест */}
          <m.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="col-span-4 h-[60%] mt-[35%] rounded-[20px] md:rounded-[32px] overflow-hidden relative shadow-[0_30px_60px_rgba(48,67,64,0.12)] z-10 will-change-[opacity,transform]"
          >
            {/* Обертка для параллакса с измененным диапазоном для эффекта глубины */}
            <m.div
              style={{ y: accentImageY }}
              className="absolute inset-x-0 -top-[20%] -bottom-[20%] z-0 will-change-transform"
            >
              {/* Обертка для ховера с фиксом position relative под <Image fill /> */}
              <div className="relative w-full h-full transition-transform duration-1000 ease-out hover:scale-105">
                {restaurantAccent ? (
                  <Image
                    src={restaurantAccent}
                    alt="Блюдо сибирской кухни"
                    fill
                    placeholder="blur"
                    sizes="(max-w-1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-stone-400" />
                )}
              </div>
            </m.div>
          </m.div>

          {/* Декоративный минималистичный элемент разметки */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-brand-dark/5 pointer-events-none hidden md:block" />
        </div>

      </div>
    </section>
  );
}
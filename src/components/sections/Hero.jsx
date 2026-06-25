"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import heroImg from '../../../public/assets/HeroImage.webp';
import AnimatedButton from '@/components/buttons/AnimatedButton';

export default function Hero() {
  const containerRef = useRef(null);

  // Следим за скроллом внутри секции
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Нативный параллакс через числа и пружину для идеальной плавности
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const backgroundY = useSpring(rawY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Строгие и минималистичные настройки появления текста
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: delay
      }
    })
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[85vh] xl:h-[90vh] overflow-hidden bg-stone-950"
    >
      {/* Задний фон с эффектом мягкого параллакса */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -inset-y-20 inset-x-0 z-0 will-change-transform"
      >
        <Image
          src={heroImg}
          alt="База отдыха Аура"
          priority
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* КОНТЕНТ-ЗОНА (ТЕКСТ) */}
      {/* pt-40 для мобилок плавно перетекает в контролируемые отступы на больших мониторах */}
      <div className="absolute inset-0 z-10 flex w-full items-start pt-40 md:pt-48 xl:pt-56 3xl:pt-64 justify-center text-center px-4">
        <div className="max-w-2xl xl:max-w-4xl 3xl:max-w-6xl flex flex-col items-center gap-4 xl:gap-6 3xl:gap-8">

          {/* Заголовок: масштабируется вплоть до 7xl на 2K мониторах и до 8xl на ультрашироких (3xl:) */}
          <motion.h1
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-5xl md:text-6xl xl:text-7xl 3xl:text-8xl font-medium tracking-tight text-light-bg leading-tight md:leading-snug xl:leading-[1.1]"
          >
            Территория <br/> вашего отдыха
          </motion.h1>

          {/* Подзаголовок: становится крупнее и аккуратно распределяется по ширине */}
          <motion.p
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="text-sm sm:text-base xl:text-lg 3xl:text-xl text-light-bg/90 max-w-md xl:max-w-xl 3xl:max-w-2xl font-normal leading-relaxed"
          >
            Многофункциональный комплекс отдыха<br/> в 30 минутах от города Красноярска<br/> на реке Мана
          </motion.p>
        </div>
      </div>

      {/* КНОПКА: На обычных компах переключается на размер 'lg', а на ультрашироких масштабируется через кастомный класс */}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        custom={0.6}
        className="absolute bottom-12 xl:bottom-20 left-1/2 -translate-x-1/2 z-20"
      >
        <AnimatedButton
          href="https://auracomplex.mehotel.ru/widget"
          size="md"
          className="xl:py-5 xl:px-16 xl:text-lg 3xl:py-6 3xl:px-20 3xl:text-xl 3xl:rounded-2xl"
        >
          Показать номера
        </AnimatedButton>
      </motion.div>

    </section>
  );
}
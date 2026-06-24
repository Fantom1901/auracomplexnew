"use client";


import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroImg from '../../../public/assets/HeroImage.webp';
import AnimatedButton from '@/components/buttons/AnimatedButton';

export default function Hero() {
  const containerRef = useRef(null);

  // Следим за скроллом внутри секции для эффекта параллакса
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Настраиваем смещение фонового изображения при скролле (от 0% до 15%)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Строгие и минималистичные настройки появления текста
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Тот самый дорогой easeOut
        delay: delay
      }
    })
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[85vh] overflow-hidden bg-stone-950"
    >
      {/* Задний фон с эффектом мягкого параллакса */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src={heroImg}
          alt="База отдыха Аура"
          priority
          fill
          className="object-cover"
        />
        {/* Затемнение фона — увеличил до 30%, чтобы белый текст хедера и заголовка гарантированно читался */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* КОНТЕНТ-ЗОНА (ТЕКСТ) */}
      <div className="absolute inset-0 z-10 flex w-full items-start pt-40 justify-center text-center px-4">
        <div className="max-w-2xl flex flex-col items-center gap-4">

          {/* Заголовок выезжает первым */}
          <motion.h1
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-5xl md:text-6xl font-medium tracking-tight text-light-bg leading-tight md:leading-snug"
          >
            Территория <br/> вашего отдыха
          </motion.h1>

          {/* Подзаголовок выезжает следом */}
          <motion.p
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="text-sm sm:text-md text-light-bg/90 max-w-md font-normal"
          >
            Многофункциональный комплекс отдыха<br/> в 30 минутах от города Красноярска<br/> на реке Мана
          </motion.p>
        </div>
      </div>

      {/* КНОПКА: Появляется последней, плавно выплывая снизу */}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        custom={0.6}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <AnimatedButton href="https://auracomplex.mehotel.ru/widget">
          Подобрать номер
        </AnimatedButton>
      </motion.div>

    </section>
  );
}
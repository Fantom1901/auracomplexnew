"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import aboutImg from '../../../../public/assets/noroot.png';

export function About() {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Отслеживаем скролл для анимации масштабирования
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Запускается строго на клиенте после сборки DOM дерева
  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Проверяем при монтировании
    handleResize();

    // Слушаем изменение экрана, чтобы анимация не ломалась при ресайзе
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Базовые значения для сервера. После монтирования подставятся адаптивные
  const startScale = isMounted ? (isMobile ? 0.90 : 0.94) : 0.94;
  const targetBorderRadius = isMounted ? (isMobile ? "32px" : "56px") : "56px";

  const imageScale = useTransform(scrollYProgress, [0, 1], [startScale, 1]);

  return (
    <section
      ref={containerRef}
      className="w-full bg-light-bg text-brand-dark py-16 md:py-32 flex flex-col items-center overflow-hidden"
    >
      {/* ТЕКСТОВЫЙ БЛОК */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, margin: "-100px"}}
        className="max-w-4xl mx-auto text-center px-6 mb-10 md:mb-20 flex flex-col items-center gap-5 md:gap-6"
      >
        {/* Заголовок: На мобилке 32px/32px, на десктопе плавно переходит в твои 48px (text-5xl) с правильным leading */}
        <motion.h2
          className="font-medium text-3xl md:text-5xl leading-8 md:leading-[56px] text-brand-dark tracking-tight"
          initial={{opacity: 0, y: 10}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
        >
          О комплексе
        </motion.h2>

        {/* Основной текст: На мобилке аккуратные 16px (text-base) для читаемости, на десктопе — твои крупные 20px (text-xl) */}
        <motion.p
          className="font-normal text-base md:text-xl leading-6 md:leading-[27px] text-brand-dark/90 max-w-2xl px-1"
          initial={{opacity: 0, y: 15}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1}}
        >
          Планируя свой отдых у нас, вам ничего не нужно брать с собой. <br className="hidden md:inline"/>
          В <span className="font-medium italic tracking-wide">AURA</span> есть все,
          чтобы погрузиться в атмосферу идеального отдыха.
        </motion.p>
      </motion.div>

      {/* АДАПТИВНЫЙ КОНТЕЙНЕР ДЛЯ ФОТО */}
      {/* h-[60vh] на мобилке делает фотку более вытянутой и монументальной на экранах смартфонов */}
      <div className="w-[calc(100vw-32px)] md:w-[calc(100vw-80px)] max-w-[1600px] h-[60vh] md:h-[70vh] relative">
        <motion.div
          style={{scale: imageScale}}
          className="
            w-full h-full relative overflow-hidden
            shadow-[0_15px_40px_rgba(48,67,64,0.05)]
            border border-stone-200/30 bg-stone-50
            will-change-transform
            rounded-[20px] md:rounded-[32px]
          "
          /* Скругление: на мобилках дотягиваем до красивых 32px, на десктопе до премиальных 56px */
          whileInView={{
            borderRadius: targetBorderRadius
          }}
          viewport={{margin: "-10% 0px"}}
          transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
        >
          <Image
            src={aboutImg}
            alt="Атмосфера отдыха в Ауре"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </div>

    </section>
  );
}
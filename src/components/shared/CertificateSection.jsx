"use client";

import { m } from 'framer-motion';
import Image from 'next/image';
import interiorImg from '../../../public/assets/interior.png';
import AnimatedButton from '@/components/ui/buttons/AnimatedButton';

export default function CertificateSection() {
  return (
    <section className="w-full bg-light-bg text-brand-dark py-20 md:py-36 px-6 md:px-16 flex flex-col items-center">

      {/* МИНИМАЛИСТИЧНЫЙ ЗАГОЛОВОК СЕКЦИИ */}
      <div className="w-full max-w-[1400px] mb-12 md:mb-16 flex flex-col gap-2">
        <m.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-brand-dark/40 font-medium will-change-opacity"
        >
          Особый подарок
        </m.span>
        <m.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-medium text-3xl md:text-5xl tracking-tight text-brand-dark will-change-[opacity,transform]"
        >
          Подарочные сертификаты
        </m.h2>
      </div>

      {/* ГЛАВНЫЙ СПЛИТ-КОНТЕЙНЕР */}
      <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_30px_70px_rgba(48,67,64,0.04)] border border-stone-200/30 will-change-[opacity,transform]"
      >

        {/* ЛЕВАЯ ЧАСТЬ: БОЛЬШОЕ АТМОСФЕРНОЕ ФОТО */}
        <div className="relative lg:col-span-7 h-[35vh] sm:h-[45vh] lg:h-[65vh] w-full bg-stone-100 overflow-hidden">
          <Image
            src={interiorImg}
            alt="Уютный interior загородного комплекса AURA"
            fill
            sizes="(max-w-1000px) 100vw, 60vw"
            className="object-cover transition-transform duration-1000 ease-out hover:scale-102"
          />
        </div>

        {/* ПРАВАЯ ЧАСТЬ: ИНФОРМАЦИОННЫЙ БЛОК КОНТРАСТНОГО ЦВЕТА */}
        <div className="lg:col-span-5 bg-brand-dark text-brand-white p-8 sm:p-12 md:p-16 flex flex-col justify-between items-start gap-12 lg:gap-0">

          {/* ТЕКСТОВЫЙ КОНТЕНТ */}
          <div className="flex flex-col gap-5 md:gap-6 max-w-md">
            <h3 className="text-2xl md:text-4xl font-medium tracking-tight leading-tight">
              Подарите отдых <br className="hidden sm:inline" />в сибирской AURA
            </h3>
            <p className="text-brand-white/60 text-sm md:text-base font-normal leading-relaxed tracking-wide">
              Сертификат в загородный комплекс — это идеальный способ подарить близким самое ценное: время для глубокого отдыха, тишины и восстановления сил посреди нетронутой природы. Действует на проживание, банный комплекс и ресторан «Тепло».
            </p>
          </div>

          {/* НИЖНЯЯ ИНТЕРАКТИВНАЯ ПАНЕЛЬ С КНОПКОЙ И ТЕГАМИ */}
          <div className="w-full flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center justify-between gap-6 pt-8 border-t border-brand-white/10">

            <AnimatedButton
              variant="light"
              href="http://t.me/auracomplex.ru"
              animation="shimmer"
            >Оформить сертификат
            </AnimatedButton>

            {/* Аккуратные теги форматов вместо развесистого нижнего текста */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full border border-brand-white/10 text-[11px] font-medium tracking-wider uppercase text-brand-white/50">
                Электронный
              </span>
              <span className="px-3 py-1.5 rounded-full border border-brand-white/10 text-[11px] font-medium tracking-wider uppercase text-brand-white/50">
                Физический
              </span>
            </div>

          </div>

        </div>

      </m.div>

    </section>
  );
}
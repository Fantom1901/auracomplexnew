"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getDeterministicPalette } from '@/lib/utils/gradientGenerator';

export default function ServiceCard({
                                      title,
                                      description,
                                      schedule,
                                      prices = [],
                                      imageSrc,
                                      imageAlt,
                                      showButton = true,
                                      onClick
                                    }) {
  // Получаем стабильные цвета из вынесенной утилиты
  const palette = getDeterministicPalette(title);

  return (
    <motion.div
      onClick={onClick}
      className="w-full border border-brand-dark/15 bg-white rounded-2xl md:rounded-3xl lg:rounded-[32px] p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center lg:items-stretch transition-all duration-300 hover:border-brand-dark/30 hover:shadow-2xl hover:shadow-brand-dark/5 group cursor-pointer relative overflow-hidden"
    >

      {/* ОБЁРТКА ДЛЯ ТЕКСТА */}
      <div className="flex flex-col gap-6 w-full md:col-span-7 lg:contents">

        {/* КОЛОНКА 1: Заголовок и кнопка */}
        <div className="flex flex-col justify-between pr-2 lg:pr-6 xl:pr-12 lg:col-span-4 xl:col-span-4">
          <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium font-atyp tracking-tight text-brand-dark leading-[1.15] md:leading-tight">
            {title}
          </h3>

          {showButton && (
            <div className="hidden lg:flex items-center gap-2.5 text-xs xl:text-sm font-semibold tracking-wider uppercase text-brand-dark transition-colors duration-300 lg:mt-auto lg:pt-6">
              <span>Подробнее</span>
              <motion.span
                className="inline-block text-sm xl:text-base"
                variants={{ hover: { x: 6 } }}
                animate={undefined}
                whileHover="hover"
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                →
              </motion.span>
            </div>
          )}
        </div>

        {/* КОЛОНКА 2: Описание, график, цены */}
        <div className="flex flex-col gap-6 lg:gap-8 xl:gap-10 justify-between w-full lg:col-span-4 xl:col-span-4">
          <div className="space-y-4">
            <p className="text-sm xl:text-base 2xl:text-lg text-brand-dark font-light leading-relaxed xl:leading-lazy">
              {description}
            </p>

            <div className="space-y-4 xl:space-y-5 pt-5 border-t border-brand-dark/10">
              {schedule && (
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] xl:text-xs font-mono uppercase tracking-widest text-brand-dark font-bold">График работы</span>
                  <span className="text-sm xl:text-base font-medium text-brand-dark">{schedule}</span>
                </div>
              )}

              {prices.length > 0 && (
                <div className="flex flex-col gap-2.5 pt-1">
                  <span className="text-[10px] xl:text-xs font-mono uppercase tracking-widest text-brand-dark font-bold">Стоимость</span>
                  <div className="space-y-2.5 xl:space-y-3">
                    {prices.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-baseline text-xs xl:text-sm gap-4">
                        <span className="text-brand-dark font-light truncate">{item.label}</span>
                        <div className="flex-grow border-b border-dotted border-brand-dark/20 mx-1 h-px" />
                        <span className="text-brand-dark font-mono font-semibold whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {showButton && (
            <div className="hidden md:flex lg:hidden items-center gap-2 text-xs font-semibold tracking-wider uppercase text-brand-dark transition-colors duration-300 pt-2">
              <span>Подробнее →</span>
            </div>
          )}
        </div>

      </div>

      {/* КОЛОНКА 3: Картинка или Динамический арт-градиент */}
      <div className="w-full aspect-[4/3] md:aspect-square lg:aspect-auto md:col-span-5 lg:col-span-4 xl:col-span-4 md:h-auto lg:h-full min-h-[240px] md:min-h-[280px] lg:min-h-[320px] xl:min-h-[360px] relative rounded-xl md:rounded-2xl xl:rounded-3xl overflow-hidden border border-brand-dark/5 bg-brand-dark">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-103 filter brightness-[0.99] group-hover:brightness-100"
            sizes="(max-w-768px) 100vw, (max-w-1024px) 42vw, 33vw"
            priority
          />
        ) : (
          <div
            className="w-full h-full transition-all duration-700 ease-out scale-100 group-hover:scale-102 flex items-center justify-center p-6 md:p-8 relative overflow-hidden select-none"
            style={{ backgroundColor: palette.bg }}
          >
            {/* Эмбиент-свечение */}
            <div
              className="absolute -top-1/4 -right-1/4 w-full h-full rounded-full blur-[70px] md:blur-[90px] opacity-45 mix-blend-screen transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundColor: palette.glow }}
            />

            {/* Текстурная сетка */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Текст строго по центру */}
            <div className="w-full flex justify-center items-center relative z-10 px-2 text-center">
              <span className="text-xs md:text-sm font-mono tracking-wider font-light text-white mix-blend-overlay max-w-full line-clamp-3">
                [ {title} ]
              </span>
            </div>
          </div>
        )}
      </div>

      {showButton && (
        <div className="w-full pt-4 flex md:hidden justify-end border-t border-brand-dark/5 mt-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-brand-dark flex items-center gap-1">
            Подробнее →
          </span>
        </div>
      )}

    </motion.div>
  );
}
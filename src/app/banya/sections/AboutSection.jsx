"use client";

import { useState } from "react";
import { m } from "framer-motion";
import FadeSlider from "@/components/ui/media/FadeSlider";
import SolidButton from "@/components/ui/buttons/SolidButton";
import { BANYA_HERO_CONFIG } from "@/data/banya";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-stretch mt-6 md:mt-12 mb-20 lg:mb-24 w-full">

      {/* Правая колонка: Увеличили до 6 колонок, сделали соотношение 3/4 для дорогого журнального эффекта */}
      <div className="w-full relative aspect-[4/5] md:h-[500px] lg:h-auto lg:aspect-[3/4] rounded-[32px] overflow-hidden border border-brand-dark/5 order-first md:col-span-6 lg:order-last lg:col-span-6 shadow-sm">
        <FadeSlider
          images={BANYA_HERO_CONFIG.images}
          interval={5000}
        />
      </div>

      {/* Левая колонка: Теперь занимает оставшиеся 6 колонок, балансируя монументальный слайдер */}
      <div className="w-full md:col-span-6 lg:col-span-6 flex flex-col justify-between py-2 gap-6 lg:gap-8">
        <div className="flex flex-col gap-4 lg:gap-6">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-dark/40 font-medium hidden sm:block">
            {BANYA_HERO_CONFIG.subtitle}
          </span>

          <div className="text-brand-dark leading-relaxed flex flex-col gap-4 lg:gap-5 font-normal">
            <p className="text-lg md:text-xl lg:text-2xl font-medium tracking-tight leading-snug">
              {BANYA_HERO_CONFIG.mainHighlight}
            </p>

            {/* Десктопный текст */}
            <div className="hidden md:flex flex-col gap-4 lg:gap-5 text-sm lg:text-base xl:text-lg opacity-90 leading-relaxed">
              {BANYA_HERO_CONFIG.detailedParagraphs.map((text, i) => (
                <p key={i} className={i === BANYA_HERO_CONFIG.detailedParagraphs.length - 1 ? "text-brand-dark opacity-100 hidden lg:block" : ""}>
                  {text}
                </p>
              ))}
            </div>

            {/* Мобильный спойлер */}
            <div className="md:hidden w-full">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-brand-dark/60 py-2 cursor-pointer bg-transparent outline-none"
              >
                <span>{isOpen ? "Свернуть описание" : "Подробнее о концепции"}</span>
                <m.svg
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="w-3 h-3 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </m.svg>
              </button>

              <m.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 0.9 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden text-sm flex flex-col gap-4 border-b border-brand-dark/5 will-change-[height,opacity]"
                style={{ paddingTop: isOpen ? "12px" : "0px", paddingBottom: isOpen ? "8px" : "0px" }}
              >
                {BANYA_HERO_CONFIG.detailedParagraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </m.div>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-auto w-full sm:w-auto">
          <SolidButton href="/banya/booking" variant="outline" className="w-full sm:w-auto">
            Забронировать баню
          </SolidButton>
        </div>
      </div>

    </section>
  );
}
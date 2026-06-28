"use client";

import { useState } from "react";
import { m } from "framer-motion";
import SmartImage from "@/components/ui/SmartImage";
import SolidButton from "@/components/ui/buttons/SolidButton";
import { ABOUT_CONFIG } from "@/app/restaurant/restaurant.config"; // Подтяни правильный относительный путь

export default function RestaurantAboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-10 lg:gap-16 items-start mt-6 md:mt-12 mb-20 lg:mb-24 w-full">

      <div className="w-full aspect-[4/5] md:h-[450px] lg:h-auto lg:aspect-[4/5] border border-stone-200/20 order-first md:col-span-5 lg:order-last lg:col-span-5">
        <SmartImage
          // src={ABOUT_CONFIG.imageSrc}
          alt={ABOUT_CONFIG.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 35vw"
          priority
        />
      </div>

      <div className="w-full md:col-span-7 lg:col-span-7 flex flex-col justify-between h-full gap-6 lg:gap-8">
        <div className="flex flex-col gap-4 lg:gap-6">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-dark/40 font-medium hidden sm:block">
            {ABOUT_CONFIG.subtitle}
          </span>

          <div className="text-brand-dark leading-relaxed flex flex-col gap-4 lg:gap-5 font-normal">
            <p className="text-lg md:text-xl lg:text-2xl font-medium tracking-tight leading-snug">
              {ABOUT_CONFIG.mainHighlight}
            </p>

            {/* Десктопный вывод из массива */}
            <div className="hidden md:flex flex-col gap-4 lg:gap-5 text-sm lg:text-lg opacity-90">
              {ABOUT_CONFIG.detailedParagraphs.map((text, i) => (
                <p key={i} className={i === ABOUT_CONFIG.detailedParagraphs.length - 1 ? "text-brand-dark opacity-100 hidden lg:block" : ""}>
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
                {ABOUT_CONFIG.detailedParagraphs.slice(0, 2).map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </m.div>
            </div>
          </div>
        </div>

        <div className="mt-2 md:mt-auto lg:mt-4 w-full sm:w-auto">
          <SolidButton href="/restaurant/menu" variant="outline" className="w-full sm:w-auto">
            Просмотреть меню
          </SolidButton>
        </div>
      </div>

    </section>
  );
}
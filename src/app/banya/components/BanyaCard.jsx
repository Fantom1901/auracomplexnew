"use client";

import SmartSlider from "@/components/features/SmartSlider";
import AnimatedButton from "@/components/ui/buttons/AnimatedButton";

export default function BanyaCard({ banya }) {
  if (!banya) return null;

  return (
    <div className="w-full bg-brand-white rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.03)] border border-stone-200/60 grid grid-cols-1 lg:grid-cols-2 gap-0 text-brand-dark">

      {/* Левая колонка: Ваш фирменный слайдер с обрезкой углов по сетке карточки */}
      <div className="w-full relative min-h-[380px] sm:min-h-[480px] lg:min-h-full flex">
        <SmartSlider
          items={banya.images}
          sliderClassName="h-full !rounded-none"
        />
      </div>

      {/* Правая колонка: Строгая, выверенная структура инфо-блока */}
      <div className="p-6 sm:p-10 md:p-12 xl:p-16 flex flex-col justify-between space-y-10 bg-brand-white">

        <div className="space-y-6 md:space-y-8">
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-none">
            {banya.title}
          </h3>

          {/* Текстовое описание концепта конкретной бани */}
          <p className="text-sm md:text-base opacity-90 font-normal leading-relaxed">
            {banya.description}
          </p>

          {/* Таблица характеристик с разделителями */}
          <div className="space-y-1">
            {banya.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex justify-between items-baseline py-3 border-b border-stone-100 last:border-0"
              >
                <span className="text-xs font-mono uppercase tracking-widest text-brand-dark/50 font-normal">
                  {feat.label}
                </span>
                <span className="text-base text-brand-dark font-bold">
                  {feat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Кнопки управления */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full pt-4">
          <AnimatedButton
            variant="dark"
            animation="shimmer"
            className="w-full sm:w-auto sm:flex-1"
          >
            Забронировать
          </AnimatedButton>
          <AnimatedButton
            variant="outline-dark"
            animation="fill"
            className="w-full sm:w-auto sm:flex-1"
          >
            Подробнее
          </AnimatedButton>
        </div>

      </div>

    </div>
  );
}
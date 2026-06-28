"use client";

import PremiumSlider from '@/components/modules/PremiumSlider';
import AnimatedButton from '@/components/ui/buttons/AnimatedButton';

export default function AccommodationCard({ room }) {
  if (!room) return null;

  return (
    <div className="w-full bg-white rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.03)] border border-stone-200/60 grid grid-cols-1 lg:grid-cols-2 gap-0 text-[#304340]">

      {/* Левая колонка: Слайдер */}
      <div className="w-full relative min-h-[380px] sm:min-h-[480px] lg:min-h-full flex">
        <PremiumSlider
          items={room.images}
          sliderClassName="h-full !rounded-none"
        />
      </div>

      {/* Правая колонка: Инфо */}
      <div className="p-6 sm:p-10 md:p-12 xl:p-16 flex flex-col justify-between space-y-12 bg-white">

        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-medium font-atyp tracking-tight text-[#304340]">
            {room.title}
          </h3>

          {/* Характеристики */}
          <div className="space-y-4">
            {room.features.map((feat, idx) => (
              <div key={idx} className="flex justify-between items-baseline py-3 border-b border-stone-100 last:border-0">
                <span className="text-sm font-mono uppercase tracking-widest text-[#304340] font-normal">
                  {feat.label}
                </span>
                <span className="text-base text-[#304340] font-bold">
                  {feat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Спальные места */}
          <div className="border border-stone-200/80 rounded-2xl p-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#304340] font-medium block">
              Варианты размещения
            </span>

            <div className="space-y-3">
              {room.beds.map((bed, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm">
                  <span className="text-[#304340] font-normal">{bed.label}</span>
                  <span className="font-mono text-[#304340] font-bold">{bed.size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full pt-4">
          <AnimatedButton variant="dark" animation="shimmer" className="w-full sm:w-auto sm:flex-1">
            Забронировать
          </AnimatedButton>
          <AnimatedButton variant="outline-dark" animation="fill" className="w-full sm:w-auto sm:flex-1">
            Подробнее
          </AnimatedButton>
        </div>

      </div>
    </div>
  );
}
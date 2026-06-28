"use client";

import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import AnimatedButton from '@/components/ui/buttons/AnimatedButton';
import PremiumSlider from '@/components/features/PremiumSlider';
import CapsuleTabBar from '@/components/ui/navigation/CapsuleTabBar';

const roomsData = [
  {
    id: 'comfort',
    label: 'Комфорт',
    title: 'Номер Комфорт',
    images: [
      { id: 1, color: 'from-[#2C3E35] to-[#1A2621]', title: 'Спальная зона комфорт', tag: 'Interior' },
      { id: 2, color: 'from-[#3A3238] to-[#251F24]', title: 'Ванная комната', tag: 'Bathroom' },
      { id: 3, color: 'from-[#232B38] to-[#141923]', title: 'Вид из окна', tag: 'View' },
    ],
    features: [
      { name: 'Площадь', value: '32 кв.м.' },
      { name: 'Количество мест', value: '2' },
      { name: '1 двуспальная', value: '200х200' },
      { name: 'или', value: '' },
      { name: '2 односпальные кровати', value: '200х100' },
      { name: 'Балкон', value: 'Есть' },
    ],
    priceWeekdays: '12 900',
    priceWeekend: '14 900',
  },
  {
    id: 'luxe',
    label: 'Люкс',
    title: 'Номер Люкс',
    images: [
      { id: 1, color: 'from-[#4A3B32] to-[#2D241E]', title: 'Гостиная Люкс', tag: 'Lounge' },
      { id: 2, color: 'from-[#1F2E35] to-[#111A1E]', title: 'Терраса номера', tag: 'Terrace' },
    ],
    features: [{ name: 'Площадь', value: '45 кв.м.' }],
    priceWeekdays: '16 900',
    priceWeekend: '19 900'
  },
  { id: 'house1', label: 'Дом 1', title: 'A-Frame Дом 1', images: [{ id: 1, color: 'from-[#232B38] to-[#141923]', title: 'A-Frame Фасад', tag: 'Exterior' }], features: [{ name: 'Площадь', value: '56 кв.м.' }], priceWeekdays: '22 900', priceWeekend: '25 900' },
  { id: 'house2', label: 'Дом 2', title: 'Scandi Дом 2', images: [{ id: 1, color: 'from-[#373A36] to-[#212421]', title: 'Сканди Интерьер', tag: 'Scandi' }], features: [{ name: 'Площадь', value: '56 кв.м.' }], priceWeekdays: '22 900', priceWeekend: '25 900' },
  { id: 'house3', label: 'Дом 3', title: 'Scandi Дом 3', images: [{ id: 1, color: 'from-[#2C3E35] to-[#1A2621]', title: 'Сканди Гостиная', tag: 'Scandi' }], features: [{ name: 'Площадь', value: '56 кв.м.' }], priceWeekdays: '22 900', priceWeekend: '25 900' },
  { id: 'house4', label: 'Дом 4', title: 'Barnhouse Дом 4', images: [{ id: 1, color: 'from-[#42313A] to-[#261B21]', title: 'Барнхаус Кухня', tag: 'Barnhouse' }], features: [{ name: 'Площадь', value: '70 кв.м.' }], priceWeekdays: '28 900', priceWeekend: '32 900' },
  { id: 'house5', label: 'Дом 5', title: 'Barnhouse Дом 5', images: [{ id: 1, color: 'from-[#1F2E35] to-[#111A1E]', title: 'Барнхаус Спальня', tag: 'Barnhouse' }], features: [{ name: 'Площадь', value: '70 кв.м.' }], priceWeekdays: '28 900', priceWeekend: '32 900' },
];

export default function Accommodation() {
  const [activeTab, setActiveTab] = useState(roomsData[0]);

  return (
    <section className="w-full bg-light-bg text-brand-dark py-20 md:py-32 select-none">
      <div className="w-full px-4 md:px-20 max-w-7xl mx-auto">

        <h2 className="font-medium text-3xl md:text-5xl tracking-tight mb-10 md:mb-14">
          Проживание
        </h2>

        {/* Переиспользуемый док-бар */}
        <CapsuleTabBar
          tabs={roomsData}
          activeId={activeTab.id}
          onChange={setActiveTab}
          layoutId="homeAccommodationTabs"
        />

        <AnimatePresence mode="wait">
          <m.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start will-change-[opacity,transform]"
          >
            <div className="w-full lg:col-span-6 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-stone-200/40">
              <PremiumSlider
                items={activeTab.images}
                sliderClassName="w-full aspect-[1.42]"
              />
            </div>

            <div className="flex flex-col lg:col-span-6 h-full justify-between py-1">
              <div>
                <h3 className="font-medium text-2xl md:text-3xl tracking-tight text-brand-dark mb-6">
                  {activeTab.title}
                </h3>

                <div className="flex flex-col gap-3.5 mb-8">
                  {activeTab.features.map((feature, idx) => (
                    <div key={idx} className="flex justify-between items-end text-sm md:text-[15px]">
                      {feature.name === 'или' ? (
                        <span className="text-[11px] uppercase tracking-widest text-brand-dark/40 w-full text-left py-0.5 font-medium">
                          или
                        </span>
                      ) : (
                        <>
                          <span className="text-brand-dark pr-2 bg-light-bg z-10 font-normal">{feature.name}</span>
                          <div className="flex-1 border-b border-dashed border-stone-300 bottom-1.5 relative" />
                          <span className="font-medium text-brand-dark pl-2 bg-light-bg z-10">{feature.value}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-2 mb-8 md:mb-10">
                  <span className="text-xs uppercase tracking-wider text-brand-dark/40 font-medium block mb-3">
                    Стоимость
                  </span>
                  <div className="flex flex-col gap-2.5 text-sm md:text-[15px]">
                    <div className="flex justify-between items-end">
                      <span className="text-brand-dark pr-2 bg-light-bg z-10">ПН-ЧТ</span>
                      <div className="flex-1 border-b border-dashed border-stone-300 bottom-1.5 relative" />
                      <span className="font-medium text-brand-dark pl-2 bg-light-bg z-10">{activeTab.priceWeekdays}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-brand-dark pr-2 bg-light-bg z-10">ПТ-ВС</span>
                      <div className="flex-1 border-b border-dashed border-stone-300 bottom-1.5 relative" />
                      <span className="font-medium text-brand-dark pl-2 bg-light-bg z-10">{activeTab.priceWeekend}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 lg:mt-8 w-full md:w-auto">
                <AnimatedButton
                  href="https://auracomplex.mehotel.ru/widget"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="dark"
                  size="md"
                  className="flex-1 md:flex-none text-center justify-center rounded-xl font-medium"
                >
                  Забронировать
                </AnimatedButton>

                <AnimatedButton
                  href={`/rooms/${activeTab.id}`}
                  variant="light"
                  size="md"
                  className="flex-1 md:flex-none text-center justify-center rounded-xl font-medium border border-brand-dark bg-transparent hover:bg-brand-dark hover:text-white transition-all duration-300"
                >
                  Подробнее
                </AnimatedButton>
              </div>
            </div>
          </m.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
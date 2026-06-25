"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from '../buttons/AnimatedButton';
// Импортируем наш переиспользуемый слайдер
import PremiumSlider from '@/components/sliders/PremiumSlider';

const roomsData = [
  {
    id: 'comfort',
    label: 'Комфорт',
    title: 'Номер Комфорт',
    // Кастомные градиенты-заглушки (заменишь потом на реальные URL картинок, если нужно)
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="w-full bg-light-bg text-brand-dark py-20 md:py-32 select-none">
      <div className="w-full px-4 md:px-20 max-w-7xl mx-auto">

        <h2 className="font-medium text-3xl md:text-5xl tracking-tight mb-10 md:mb-14">
          Проживание
        </h2>

        {/* КАПСУЛА-РАМКА ТАБОВ */}
        <div className="w-full overflow-x-auto no-scrollbar border border-brand-dark rounded-xl md:rounded-2xl p-0 mb-12 md:mb-16 bg-transparent relative z-10">
          <div className="flex items-center min-w-max md:min-w-0 w-full justify-between relative">

            {roomsData.map((tab, index) => {
              const isActive = tab.id === activeTab.id;
              const isFirst = index === 0;
              const isLast = index === roomsData.length - 1;

              const borderTopLeft = isFirst ? '12px' : '0px';
              const borderBottomLeft = isFirst ? '12px' : '0px';
              const borderTopRight = isLast ? '12px' : '0px';
              const borderBottomRight = isLast ? '12px' : '0px';

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab)}
                  className={`
                    relative px-4 md:px-6 py-3.5 text-xs md:text-sm font-medium tracking-tight transition-colors duration-200 core-touch flex-1 text-center min-w-[95px] md:min-w-0 cursor-pointer
                    ${isActive ? 'text-white' : 'text-brand-dark/80 hover:text-brand-dark'}
                  `}
                >
                  {/* СМАРТ-ПИЛЮЛЯ */}
                  {isActive && (
                    <motion.div
                      layoutId="smartLuxuryTab"
                      className="absolute inset-0 bg-[#243431] -z-10"
                      initial={{
                        borderTopLeftRadius: borderTopLeft,
                        borderBottomLeftRadius: borderBottomLeft,
                        borderTopRightRadius: borderTopRight,
                        borderBottomRightRadius: borderBottomRight,
                      }}
                      animate={{
                        borderTopLeftRadius: borderTopLeft,
                        borderBottomLeftRadius: borderBottomLeft,
                        borderTopRightRadius: borderTopRight,
                        borderBottomRightRadius: borderBottomRight,
                      }}
                      transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10">{tab.label}</span>

                  {!isLast && !isActive && (roomsData[index + 1].id !== activeTab.id) && (
                    <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-brand-dark/40" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* КОНТЕНТ БЛОКА С АНИМАЦИЕЙ СМЕНЫ НОМЕРА */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start"
          >

            {/* ЛЕВАЯ КОЛОНКА: ИНТЕГРИРОВАННЫЙ АВТОНОМНЫЙ СЛАЙДЕР */}
            <div className="w-full lg:col-span-6 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-stone-200/40">
              {/* Передаем только картинки конкретного активного таба. Панели у слайдера отключаются сами, padding убран */}
              <PremiumSlider
                items={activeTab.images}
                sliderClassName="w-full aspect-[1.42]"
              />
            </div>

            {/* ПРАВАЯ КОЛОНКА: ИНФОРМАЦИЯ О НОМЕРЕ */}
            <div className="flex flex-col lg:col-span-6 h-full justify-between py-1">
              <div>
                <h3 className="font-medium text-2xl md:text-3xl tracking-tight text-brand-dark mb-6">
                  {activeTab.title}
                </h3>

                {/* Пунктирные строчки */}
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

                {/* Цены */}
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

              {/* КНОПКИ ДЕЙСТВИЯ */}
              <div className="flex items-center gap-4 mt-4 lg:mt-8 w-full md:w-auto">
                <AnimatedButton
                  href={`#book-${activeTab.id}`}
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

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
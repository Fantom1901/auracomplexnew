'use client';

import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import mapAuraImg from '../../../public/assets/mapAura.jpg';

// 📍 КООРДИНАТЫ НИКСЫ + СМЕЩЕНИЯ ДЛЯ ТОЧЕК (dotTop), чтобы увести их с текста на крыши/объекты
const MAP_ZONES = [
  { id: 'house-6',     name: 'Дом 6',                     top: '15.5%',  left: '12.8%',  width: '7%',  height: '5%',  dotTop: '-40%', dotLeft: '50%', tooltipDirection: 'up', slug: '/booking/house-6' },
  { id: 'house-5',     name: 'Дом 5',                     top: '15.5%',  left: '23%',    width: '7%',  height: '5%',  dotTop: '-40%', dotLeft: '50%', tooltipDirection: 'up', slug: '/booking/house-5' },
  { id: 'house-4',     name: 'Дом 4',                     top: '15.5%',  left: '33%',    width: '7%',  height: '5%',  dotTop: '-40%', dotLeft: '50%', tooltipDirection: 'up', slug: '/booking/house-4' },
  { id: 'house-3',     name: 'Дом 3',                     top: '15.5%',  left: '43%',    width: '7%',  height: '5%',  dotTop: '-40%', dotLeft: '50%', tooltipDirection: 'up', slug: '/booking/house-3' },
  { id: 'house-2',     name: 'Дом 2',                     top: '15.5%',  left: '52.5%',  width: '7%',  height: '5%',  dotTop: '-40%', dotLeft: '50%', tooltipDirection: 'up', slug: '/booking/house-2' },
  { id: 'house-1',     name: 'Дом 1',                     top: '15.5%',  left: '62.5%',  width: '7%',  height: '5%',  dotTop: '-40%', dotLeft: '50%', tooltipDirection: 'up', slug: '/booking/house-1' },

  // Для нижних объектов меняем направление тултипа на 'down'
  { id: 'bath-complex',name: 'Банный комплекс',          top: '76%',    left: '12%',    width: '18%', height: '5%',  dotTop: '150%', dotLeft: '50%', tooltipDirection: 'down', slug: '/amenities/bath' },
  { id: 'practice-zal',name: 'Зал практик «Пробуждение»', top: '76%',    left: '33%',    width: '24%', height: '5%',  dotTop: '150%', dotLeft: '50%', tooltipDirection: 'down', slug: '/amenities/practices' },
  { id: 'restaurant',  name: 'Ресторан «Тепло»',          top: '76%',    left: '61%',    width: '18%', height: '5%',  dotTop: '150%', dotLeft: '50%', tooltipDirection: 'down', slug: '/restaurant' },
  { id: 'apartments',  name: 'Апартаменты',               top: '76%',    left: '81%',    width: '14%', height: '5%',  dotTop: '150%', dotLeft: '50%', tooltipDirection: 'down', slug: '/booking/apartments' },
];

export default function MapSection() {
  const [hoveredZone, setHoveredZone] = useState(null);

  const handleZoneClick = (slug, name) => {
    console.log(`Переход на страницу: ${name} (${slug})`);
  };

  return (
    <section className="w-full bg-light-bg text-brand-dark py-20 md:py-36 px-6 md:px-16 flex flex-col items-center">

      {/* ЗАГОЛОВОК СЕКЦИИ */}
      <div className="w-full max-w-[1400px] mb-12 md:mb-16 flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-brand-dark/40 font-medium">
          Интерактивная карта
        </span>
        <h2 className="font-medium text-3xl md:text-5xl tracking-tight text-brand-dark">
          Территория AURA
        </h2>
      </div>

      {/* КАРТА */}
      <div className="w-full max-w-[1400px] overflow-x-auto md:overflow-visible scrollbar-none rounded-[24px] md:rounded-[40px]">
        <div className="relative min-w-[1000px] w-full aspect-[16/8.4] overflow-hidden rounded-[24px] md:rounded-[40px] shadow-[0_20px_50px_rgba(48,67,64,0.05)] border border-stone-200/30">

          <Image
            src={mapAuraImg}
            alt="Карта территории комплекса Aura"
            fill
            sizes="(max-w-1400px) 100vw, 1400px"
            className="object-cover pointer-events-none select-none"

          />

          {/* ИНТЕРАКТИВНЫЕ ЗОНЫ */}
          {MAP_ZONES.map((zone) => {
            const isHovered = hoveredZone === zone.id;
            const isDown = zone.tooltipDirection === 'down';

            return (
              <div
                key={zone.id}
                className="absolute"
                style={{
                  top: zone.top,
                  left: zone.left,
                  width: zone.width,
                  height: zone.height,
                }}
              >
                {/* Триггер-зона */}
                <button
                  onClick={() => handleZoneClick(zone.slug, zone.name)}
                  onMouseEnter={() => setHoveredZone(zone.id)}
                  onMouseLeave={() => setHoveredZone(null)}
                  onTouchStart={() => setHoveredZone(zone.id)}
                  className="absolute inset-0 w-full h-full bg-transparent z-30 cursor-pointer outline-none"
                  aria-label={zone.name}
                />

                {/* КОНТЕЙНЕР ДЛЯ ТОЧКИ И ТУЛТИПА */}
                <div
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10"
                  style={{
                    top: zone.dotTop || '50%',
                    left: zone.dotLeft || '50%',
                  }}
                >
                  {/* Точка */}
                  <motion.div
                    className="relative flex items-center justify-center pointer-events-none"
                    animate={{ opacity: isHovered ? 1 : 0.4 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-5 h-5 rounded-full bg-brand-white/40 border border-brand-white/30"
                    />
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.2 : 1,
                        boxShadow: isHovered ? "0 0 12px rgba(255,255,255,0.9)" : "0 0 0px rgba(255,255,255,0)"
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-1.5 h-1.5 rounded-full bg-brand-white"
                    />
                  </motion.div>

                  {/* АДАПТИВНЫЙ ТУЛТИП (ВВЕРХ ИЛИ ВНИЗ) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        // Динамическая анимация вылета в зависимости от направления
                        initial={{ opacity: 0, y: isDown ? -6 : 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: isDown ? -4 : 4, scale: 0.97 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}

                        // Позиционируем класс: либо над точкой (bottom-full mb-3), либо под ней (top-full mt-3)
                        className={`absolute bg-brand-dark text-brand-white px-3.5 py-1.5 rounded-xl text-xs font-medium tracking-wide whitespace-nowrap shadow-[0_10px_25px_rgba(48,67,64,0.15)] border border-stone-700/20 flex items-center gap-1.5 pointer-events-none z-50 ${
                          isDown ? 'top-full mt-3' : 'bottom-full mb-3'
                        }`}
                      >
                        {zone.name}
                        <svg className="w-3 h-3 stroke-brand-white/50" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>

                        {/* Переключаем положение стрелочки-уголка */}
                        <div className={`absolute left-1/2 -translate-x-1/2 border-4 border-transparent ${
                          isDown
                            ? 'bottom-full border-b-brand-dark'
                            : 'top-full border-t-brand-dark'
                        }`} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            );
          })}

        </div>
      </div>

      <p className="mt-4 text-xs text-brand-dark/40 font-normal tracking-wide block md:hidden">
        ← Листайте карту вбок для просмотра всей территории →
      </p>

    </section>
  );
}
"use client";

import { m } from 'framer-motion'; // <-- Заменили тяжелый motion на легковесный m
import { useRef, useState, useEffect } from 'react';

export default function CapsuleTabBar({
                                        tabs,
                                        activeId,
                                        onChange
                                      }) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const tabsRef = useRef([]);

  const [pillStyles, setPillStyles] = useState({ left: 0, width: 0 });

  // Высокоточный расчёт позиций пилюли
  useEffect(() => {
    const index = tabs.findIndex(t => t.id === activeId);
    if (index === -1) return;

    const activeTabEl = tabsRef.current[index];
    if (activeTabEl) {
      setPillStyles({
        left: activeTabEl.offsetLeft,
        width: activeTabEl.offsetWidth
      });
    }
  }, [activeId, tabs]);

  // Динамический расчёт плотности тумана на основе пикселей скролла
  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;

      // Зона полной адаптации тумана (в пикселях). За 40px скролла туман плавно наберёт 100% плотность.
      const fadeRange = 40;

      // Левый туман: прогресс от 0 до 1
      const leftAlpha = Math.min(scrollLeft / fadeRange, 1);

      // Правый туман: если maxScroll равен 0 (всё влезло), то 0. Иначе считаем остаток до конца
      const remainingScroll = maxScroll - scrollLeft;
      const rightAlpha = maxScroll <= 0 ? 0 : Math.min(remainingScroll / fadeRange, 1);

      // Записываем значения плотности напрямую в CSS-переменные родительского контейнера
      wrapper.style.setProperty('--left-fog-alpha', leftAlpha.toFixed(3));
      wrapper.style.setProperty('--right-fog-alpha', rightAlpha.toFixed(3));
    };

    // Проверяем при монтировании, ресайзе контента и скролле
    handleScroll();
    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Дополнительный пересчёт пилюли при изменении вьюпорта
    const handleResizePill = () => {
      const activeTabEl = tabsRef.current[tabs.findIndex(t => t.id === activeId)];
      if (activeTabEl) {
        setPillStyles({ left: activeTabEl.offsetLeft, width: activeTabEl.offsetWidth });
      }
    };
    window.addEventListener('resize', handleResizePill);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('resize', handleResizePill);
    };
  }, [tabs, activeId]);

  const handleTabClick = (tab, index, e) => {
    onChange(tab);

    if (containerRef.current && e.currentTarget) {
      const container = containerRef.current;
      const target = e.currentTarget;

      container.scrollTo({
        left: target.offsetLeft - (container.offsetWidth / 2) + (target.offsetWidth / 2),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full mb-12 md:mb-16">

      {/* ГЛАВНЫЙ КОНТЕЙНЕР (ОБЁРТКА С БОРДЕРОМ) */}
      <div
        ref={wrapperRef}
        className="w-full relative border border-brand-dark rounded-xl md:rounded-2xl p-1 bg-transparent z-10 [mask-image:linear-gradient(to_right,_rgba(0,0,0,calc(1_-_var(--left-fog-alpha,_0)))_0px,_#000_40px,_#000_calc(100%_-_40px),_rgba(0,0,0,calc(1_-_var(--right-fog-alpha,_0)))_100%)] md:[mask-image:none]"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,calc(1 - var(--left-fog-alpha, 0))) 0px, #000 40px, #000 calc(100% - 40px), rgba(0,0,0,calc(1 - var(--right-fog-alpha, 0))) 100%)'
        }}
      >

        {/* СКРОЛЛ-КОНТЕЙНЕР */}
        <div
          ref={containerRef}
          className="w-full overflow-x-auto no-scrollbar relative z-10 flex items-center"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex items-center w-full justify-between relative min-w-max md:min-w-0">

            {/* Плавающая пилюля со сбросом веса через m.div */}
            {pillStyles.width > 0 && (
              <m.div
                className="absolute top-0 bottom-0 bg-[#243431] rounded-lg md:rounded-xl shadow-md shadow-[#243431]/25 -z-10"
                style={{
                  left: 0,
                  width: pillStyles.width,
                }}
                animate={{
                  x: pillStyles.left,
                  width: pillStyles.width,
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}

            {tabs.map((tab, index) => {
              const isActive = tab.id === activeId;
              const isLast = index === tabs.length - 1;

              return (
                <button
                  key={tab.id}
                  ref={(el) => (tabsRef.current[index] = el)}
                  onClick={(e) => handleTabClick(tab, index, e)}
                  className={`
                    relative h-10 md:h-12 text-xs sm:text-sm font-medium tracking-tight transition-colors duration-200 core-touch flex-1 flex items-center justify-center text-center cursor-pointer whitespace-nowrap px-6
                    min-w-[130px] sm:min-w-[150px] md:min-w-0 w-auto md:w-full rounded-lg
                    ${isActive ? 'text-white' : 'text-brand-dark/80 hover:text-brand-dark'}
                  `}
                >
                  <span className="relative z-10 block text-center">
                    {tab.label}
                  </span>

                  {/* Вертикальный разделитель */}
                  {!isLast && !isActive && (tabs[index + 1].id !== activeId) && (
                    <div className="absolute right-0 top-2 bottom-2 w-[1px] bg-brand-dark/20" />
                  )}
                </button>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
}
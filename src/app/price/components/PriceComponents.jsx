"use client";

import { m, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// 1. Атомарная строка таблицы прайса
export function PriceTableRow({ name, desc, wd, we, price, isSingle }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-4 py-2.5 md:py-2 border-b border-brand-dark/5 md:border-none">
      <div className="flex flex-col flex-1">
        <span className="font-medium md:font-normal text-[15px] md:text-base lg:text-lg text-brand-dark leading-snug">
          {name}
        </span>
        {desc && (
          <span className="text-xs md:text-sm text-brand-dark/50 font-normal mt-0.5 leading-normal">
            {desc}
          </span>
        )}
      </div>

      <div className="hidden md:block flex-1 border-b border-dashed border-stone-300 relative bottom-[6px] mx-2" />

      <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 lg:gap-12 font-medium text-brand-dark min-w-max mt-1 md:mt-0 text-sm md:text-base lg:text-lg">
        {!isSingle ? (
          <>
            <div className="flex md:flex-col items-center md:items-end gap-1.5 md:gap-0 bg-brand-dark/5 md:bg-transparent px-2.5 py-1 md:p-0 rounded-md">
              <span className="text-[10px] md:hidden uppercase tracking-wider text-brand-dark/40 font-semibold">ПН-ЧТ:</span>
              <span className="tabular-nums font-semibold md:font-medium">{wd} ₽</span>
            </div>
            <div className="flex md:flex-col items-center md:items-end gap-1.5 md:gap-0 bg-brand-dark/5 md:bg-transparent px-2.5 py-1 md:p-0 rounded-md">
              <span className="text-[10px] md:hidden uppercase tracking-wider text-brand-dark/40 font-semibold">ПТ-ВС:</span>
              <span className="tabular-nums font-semibold md:font-medium text-brand-dark">{we} ₽</span>
            </div>
          </>
        ) : (
          <div className="flex md:flex-col items-center md:items-end gap-1.5 md:gap-0 bg-brand-dark/5 md:bg-transparent px-2.5 py-1 md:p-0 rounded-md">
            <span className="text-[10px] md:hidden uppercase tracking-wider text-brand-dark/40 font-semibold">Стоимость:</span>
            <span className="tabular-nums font-semibold md:font-medium">{price} ₽</span>
          </div>
        )}
      </div>
    </div>
  );
}

// 2. Универсальная секция/категория прайса
export function PriceSection({ title, subtitle, items, note, isSingle }) {
  return (
    <div className="mb-14 md:mb-20 last:mb-0">
      <div className="mb-6 md:mb-8">
        <h3 className="font-medium text-xl md:text-2xl lg:text-3xl tracking-tight text-brand-dark">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs md:text-sm lg:text-base text-brand-dark/50 mt-1.5 font-normal max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="hidden md:grid grid-cols-12 gap-4 pb-3 border-b border-brand-dark/10 text-xs lg:text-sm uppercase tracking-widest font-semibold text-brand-dark/40 mb-6">
        <div className="col-span-8">Наименование услуги</div>
        {!isSingle ? (
          <>
            <div className="col-span-2 text-right">ПН-ЧТ</div>
            <div className="col-span-2 text-right">ПТ-ВС</div>
          </>
        ) : (
          <div className="col-span-4 text-right">Стоимость (ПН-ВС)</div>
        )}
      </div>

      <div className="flex flex-col gap-2 md:gap-5">
        {items.map((item, idx) => (
          <PriceTableRow
            key={idx}
            name={item.name}
            desc={item.desc}
            wd={item.wd}
            we={item.we}
            price={item.price}
            isSingle={isSingle}
          />
        ))}
      </div>

      {note && (
        <p className="text-xs lg:text-sm text-brand-dark/40 mt-5 leading-relaxed max-w-3xl font-normal italic">
          {note}
        </p>
      )}
    </div>
  );
}

// 3. Высокотехнологичный таб-бар с динамическими масками краев
export function PriceTabBar({ categories, activeTab, setActiveTab }) {
  const [showLeftMask, setShowLeftMask] = useState(false);
  const [showRightMask, setShowRightMask] = useState(false);
  const tabsContainerRef = useRef(null);

  const checkScrollLimits = () => {
    if (tabsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
      setShowLeftMask(scrollLeft > 4);
      setShowRightMask(scrollLeft + clientWidth < scrollWidth - 4);
    }
  };

  useEffect(() => {
    checkScrollLimits();
    window.addEventListener('resize', checkScrollLimits, { passive: true });
    return () => window.removeEventListener('resize', checkScrollLimits);
  }, []);

  const handleTabClick = (tabId, e) => {
    setActiveTab(tabId);
    if (tabsContainerRef.current && e.currentTarget) {
      const container = tabsContainerRef.current;
      const target = e.currentTarget;
      container.scrollTo({
        left: target.offsetLeft - (container.offsetWidth / 2) + (target.offsetWidth / 2),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full mb-10 md:mb-16">
      <AnimatePresence>
        {showLeftMask && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-light-bg to-transparent pointer-events-none z-20 md:hidden will-change-opacity"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showRightMask && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-light-bg to-transparent pointer-events-none z-20 md:hidden will-change-opacity"
          />
        )}
      </AnimatePresence>

      <div
        ref={tabsContainerRef}
        onScroll={checkScrollLimits}
        className="w-full overflow-x-auto no-scrollbar border border-brand-dark rounded-xl md:rounded-2xl p-0 bg-transparent relative z-10"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex items-center w-full justify-between relative min-w-max md:min-w-0">
          {categories.map((tab, index) => {
            const isActive = tab.id === activeTab;
            const isFirst = index === 0;
            const isLast = index === categories.length - 1;

            const borderRadius = {
              borderTopLeftRadius: isFirst ? '12px' : '0px',
              borderBottomLeftRadius: isFirst ? '12px' : '0px',
              borderTopRightRadius: isLast ? '12px' : '0px',
              borderBottomRightRadius: isLast ? '12px' : '0px',
            };

            return (
              <button
                key={tab.id}
                onClick={(e) => handleTabClick(tab.id, e)}
                className={`
                  relative px-5 sm:px-8 py-3.5 md:py-4.5 text-xs sm:text-sm lg:text-base font-semibold md:font-medium tracking-tight transition-colors duration-200 core-touch flex-1 text-center cursor-pointer whitespace-nowrap min-w-[140px] sm:min-w-[180px] md:min-w-0
                  ${isActive ? 'text-white' : 'text-brand-dark/70 hover:text-brand-dark'}
                `}
              >
                {isActive && (
                  <m.div
                    layoutId="priceLuxuryTab"
                    className="absolute inset-0 bg-[#243431] -z-10 will-change-transform"
                    initial={borderRadius}
                    animate={borderRadius}
                    transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>

                {!isLast && !isActive && (categories[index + 1].id !== activeTab) && (
                  <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-brand-dark/20" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
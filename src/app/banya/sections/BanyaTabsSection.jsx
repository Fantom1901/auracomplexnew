"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import CapsuleTabBar from "@/components/ui/navigation/CapsuleTabBar";
import BanyaCard from "../components/BanyaCard";

import { BANYA_ITEMS_DATA, banyaCategories } from "@/data/banyaTabs";

export default function BanyaTabsSection() {
  const [activeCategory, setActiveCategory] = useState("grand");

  const filteredBanyas = BANYA_ITEMS_DATA.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="w-full text-brand-dark mt-4 mb-16 md:mb-28 pt-22">
      <h2 className="font-medium text-5xl pb-12">Бани</h2>
      {/* Переключалка категорий */}
      <div className="flex justify-center mb-1 md:mb-2">
        <CapsuleTabBar
          tabs={banyaCategories}
          activeId={activeCategory}
          onChange={(tab) => setActiveCategory(tab.id)}
        />
      </div>

      {/* Анимированный вывод карточки бани */}
      <AnimatePresence mode="wait">
        <m.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full will-change-[opacity,transform]"
        >
          {filteredBanyas.map((banya) => (
            <BanyaCard key={banya.id} banya={banya} />
          ))}
        </m.div>
      </AnimatePresence>
    </div>
  );
}
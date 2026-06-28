"use client";

import { useState } from "react";
import CapsuleTabBar from "@/components/ui/navigation/CapsuleTabBar";
import FadeInLayout from "@/components/layout/FadeInLayout";
import PremiumSlider from "@/components/features/PremiumSlider";

// Тянем чистые данные из глобального слоя в корне проекта
import { GALLERY_TABS, GALLERY_DATA } from "@/data/restaurant";

export default function RestaurantGallerySection() {
  const [activeTab, setActiveTab] = useState(GALLERY_TABS[0]);
  const currentSliderItems = GALLERY_DATA[activeTab.id] || [];

  return (
    <section className="w-full flex flex-col items-center py-12 md:py-20 border-t border-brand-dark/5">
      <div className="w-full max-w-[1400px] mb-8 md:mb-12 flex flex-col gap-2 align-self-start px-2">
        <span className="text-xs uppercase tracking-[0.25em] text-brand-dark/40 font-medium">
          Галерея комплексов
        </span>
        <h2 className="font-medium text-3xl md:text-5xl tracking-tight leading-none text-brand-dark">
          Атмосфера «Тепла»
        </h2>
      </div>

      <div className="w-full max-w-[1400px] px-2">
        <CapsuleTabBar tabs={GALLERY_TABS} activeId={activeTab.id} onChange={setActiveTab} />
      </div>

      <div className="w-full max-w-[1400px] px-2">
        <FadeInLayout animateKey={activeTab.id} withPresence mode="wait">
          <PremiumSlider items={currentSliderItems} sliderClassName="h-[500px] md:h-[650px]" />
        </FadeInLayout>
      </div>
    </section>
  );
}
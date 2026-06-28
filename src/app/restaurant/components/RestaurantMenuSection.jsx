"use client";

import { useState } from "react";
import CapsuleTabBar from "@/components/ui/navigation/CapsuleTabBar";
import FadeInLayout from "@/components/layout/FadeInLayout";
import SmartImage from "@/components/ui/media/SmartImage";

// Данные из глобального файла данных
import { MENU_TABS, MENU_DATA } from "@/data/restaurant";

export default function RestaurantMenuSection({ initialMenuData }) {
  const [activeTab, setActiveTab] = useState(MENU_TABS[0]);

  // Используем переданные данные, либо фоллбэкаемся на глобальный MENU_DATA
  const incomingData = initialMenuData || MENU_DATA;

  const currentMenuImages = incomingData[activeTab.id] || [];
  const renderItems = currentMenuImages.length > 0 ? currentMenuImages : [""];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1400px] px-2">
        <CapsuleTabBar tabs={MENU_TABS} activeId={activeTab.id} onChange={setActiveTab} />
      </div>

      <div className="w-full max-w-[1400px] px-2 min-h-[50vh]">
        <FadeInLayout animateKey={activeTab.id} withPresence mode="wait">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full">
            {renderItems.map((src, index) => (
              <div key={src + index} className="w-full relative aspect-[1/1.41] shadow-sm bg-transparent">
                <SmartImage
                  // src={src}
                  title={`${activeTab.label} — Страница ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                  className="bg-[#0d1312] border border-stone-200/40 [&>img]:object-contain"
                />
              </div>
            ))}
          </div>
        </FadeInLayout>
      </div>
    </div>
  );
}
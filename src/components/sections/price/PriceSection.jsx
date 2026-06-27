"use client";

import { useState } from 'react';
import { priceCategories, stayData, wellnessData, servicesData, stayNotes } from '@/app/price/data';
import { PriceSection } from '@/components/ui/price/PriceComponents';
import CapsuleTabBar from '@/components/ui/CapsuleTabBar';
import FadeInLayout from '@/components/layout/FadeInLayout'; // Наш единый стандарт анимации

export default function priceSection() {
  const [activeTab, setActiveTab] = useState('stay');

  return (
    <div className="w-full text-[#304340]">

      {/* Наш родной докбар с туманом */}
      <CapsuleTabBar
        tabs={priceCategories}
        activeId={activeTab}
        onChange={(tab) => setActiveTab(tab.id)}
      />

      {/* Сетка прайса с унифицированной лакшери-анимацией */}
      <FadeInLayout
        withPresence
        animateKey={activeTab}
        className="w-full mt-8"
      >
        {activeTab === 'stay' && (
          <>
            {stayData.map((sec) => (
              <PriceSection key={sec.title} title={sec.title} subtitle={sec.subtitle} items={sec.items} />
            ))}
            {/* Текст примечаний: акценты строго по нашему правилу */}
            <div className="mt-10 pt-6 border-t border-brand-dark/10 flex flex-col gap-2">
              {stayNotes.map((note, idx) => (
                <p key={idx} className="text-xs md:text-sm text-brand-dark font-normal leading-relaxed opacity-40">
                  • {note}
                </p>
              ))}
            </div>
          </>
        )}

        {activeTab === 'wellness' && wellnessData.map((sec) => (
          <PriceSection key={sec.title} title={sec.title} subtitle={sec.subtitle} items={sec.items} note={sec.note} isSingle={sec.isSingle} />
        ))}

        {activeTab === 'services' && servicesData.map((sec) => (
          <PriceSection key={sec.title} title={sec.title} subtitle={sec.subtitle} items={sec.items} note={sec.note} isSingle={sec.isSingle} />
        ))}
      </FadeInLayout>

    </div>
  );
}
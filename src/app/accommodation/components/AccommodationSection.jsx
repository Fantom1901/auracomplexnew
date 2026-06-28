"use client";

import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import AccommodationCard from './AccommodationCard'; // Лежит в этой же папке
import CapsuleTabBar from '@/components/ui/navigation/CapsuleTabBar';

// Тянем чистые данные и категории из единого слоя
import { ACCOMMODATION_DATA, categories } from '@/data/accommodation';

export default function AccommodationSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredRooms = ACCOMMODATION_DATA.filter(room =>
    activeCategory === 'all' || room.category === activeCategory
  );

  return (
    <div className="w-full text-[#304340]">

      <CapsuleTabBar
        tabs={categories}
        activeId={activeCategory}
        onChange={(tab) => setActiveCategory(tab.id)}
      />

      {/* Список карточек */}
      <AnimatePresence mode="wait">
        <m.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-12 md:gap-20 w-full will-change-[opacity,transform]"
        >
          {filteredRooms.map((room) => (
            <AccommodationCard key={room.id} room={room} />
          ))}
        </m.div>
      </AnimatePresence>

    </div>
  );
}
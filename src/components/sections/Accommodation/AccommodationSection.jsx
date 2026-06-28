"use client";

import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import AccommodationCard from '@/components/sections/Accommodation/AccommodationCard';
import CapsuleTabBar from '@/components/ui/CapsuleTabBar';
import accommodationData from '@/app/accommodation/accommodation.config.json';

const categories = [
  { id: 'all', label: 'Все варианты' },
  { id: 'rooms', label: 'Номера' },
  { id: 'houses', label: 'Дома и Виллы' }
];

export default function AccommodationSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredRooms = accommodationData.filter(room =>
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
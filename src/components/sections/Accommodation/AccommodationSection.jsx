"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AccommodationCard from '@/components/ui/AccommodationCard';
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

      {/* Кастомный таббар */}
      <CapsuleTabBar
        tabs={categories}
        activeId={activeCategory}
        onChange={(tab) => setActiveCategory(tab.id)}
      />

      {/* Список карточек */}
      <AnimatePresence mode="wait">
        {/* Теперь внутри AnimatePresence лежит ВСЕГО ОДИН motion-компонент.
          При изменении activeCategory он полностью перезапускает анимацию для всего списка карточек.
        */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-12 md:gap-20 w-full"
        >
          {filteredRooms.map((room) => (
            <AccommodationCard key={room.id} room={room} />
          ))}
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
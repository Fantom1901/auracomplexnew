"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from '@/components/ui/ServiceCard';
import CapsuleTabBar from '@/components/ui/CapsuleTabBar';
import PageWrapper from '@/components/ui/PageWrapper';

// Импортируем данные из конфига (поправь путь, если положишь в другое место)
import { SERVICES_DATA, TABS } from '@/components/sections/price/services.config';

export default function ServicesSection() {
  const [activeTabId, setActiveTabId] = useState('all-services');

  // Фильтруем данные: если "all-services", показываем всё, иначе — по категории
  const filteredServices = activeTabId === 'all-services'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(service => service.category === activeTabId);

  return (
    <PageWrapper title="Услуги">

      {/* НАШ РОДНОЙ ДОКБАР С ТУМАНОМ И ПИЛЮЛЕЙ */}
      <CapsuleTabBar
        tabs={TABS}
        activeId={activeTabId}
        onChange={(tab) => setActiveTabId(tab.id)}
      />

      {/* СЕТКА С КАРТОЧКАМИ УСЛУГ */}
      <div className="w-full min-h-[500px] relative mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabId}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12"
          >
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                schedule={service.schedule}
                prices={service.prices}
                // imageSrc={service.imageSrc} // Раскомментируй, если нужно
                showButton={service.showButton}
                onClick={() => console.log(`Клик по услуге: ${service.id}`)}
              />
            ))}

            {filteredServices.length === 0 && (
              <div className="w-full py-20 text-center text-sm font-mono uppercase tracking-wider font-medium">
                В этой категории пока нет доступных услуг.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

    </PageWrapper>
  );
}
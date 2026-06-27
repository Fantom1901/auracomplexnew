"use client";

import { useState } from 'react';
import ServiceCard from '@/components/ui/ServiceCard';
import CapsuleTabBar from '@/components/ui/CapsuleTabBar';
import FadeInLayout from '@/components/layout/FadeInLayout'; // Наш единый стандарт анимации

import { SERVICES_DATA, TABS } from '@/components/sections/price/services.config';

export default function ServicesSection() {
  const [activeTabId, setActiveTabId] = useState('all-services');

  const filteredServices = activeTabId === 'all-services'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(service => service.category === activeTabId);

  return (
    <div className="w-full text-[#304340]">

      {/* Родной докбар с туманом */}
      <CapsuleTabBar
        tabs={TABS}
        activeId={activeTabId}
        onChange={(tab) => setActiveTabId(tab.id)}
      />

      {/* Сетка услуг с унифицированной лакшери-анимацией */}
      <div className="w-full min-h-[500px] relative mt-4">
        <FadeInLayout
          withPresence
          animateKey={activeTabId}
          className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12"
        >
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              schedule={service.schedule}
              prices={service.prices}
              showButton={service.showButton}
              onClick={() => console.log(`Клик по услуге: ${service.id}`)}
            />
          ))}

          {filteredServices.length === 0 && (
            <div className="w-full py-20 text-center text-sm font-mono uppercase tracking-widest font-bold">
              В этой категории пока нет доступных услуг.
            </div>
          )}
        </FadeInLayout>
      </div>

    </div>
  );
}
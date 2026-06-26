"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { priceCategories, stayData, wellnessData, servicesData, stayNotes } from '@/app/price/data';
import { PriceSection } from '@/components/ui/price/PriceComponents';
import CapsuleTabBar from '@/components/ui/CapsuleTabBar';
import PageWrapper from '@/components/ui/PageWrapper';

export default function priceSection() {
    const [activeTab, setActiveTab] = useState('stay');

    return (
      <PageWrapper title="Прайс-лист">

          <CapsuleTabBar
            tabs={priceCategories}
            activeId={activeTab}
            onChange={(tab) => setActiveTab(tab.id)}
          />

          <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full mt-8"
              >
                  {activeTab === 'stay' && (
                    <>
                        {stayData.map((sec) => (
                          <PriceSection key={sec.title} title={sec.title} subtitle={sec.subtitle} items={sec.items} />
                        ))}
                        <div className="mt-10 pt-6 border-t border-brand-dark/10 flex flex-col gap-2">
                            {stayNotes.map((note, idx) => (
                              <p key={idx} className="text-xs md:text-sm text-brand-dark/40 font-normal leading-relaxed">
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
              </motion.div>
          </AnimatePresence>

      </PageWrapper>
    );
}
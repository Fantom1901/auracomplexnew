"use client";

import { useRouter } from "next/navigation";
import { motion, LazyMotion, domAnimation } from "framer-motion"; // Импортируем LazyMotion и фичи
import RestaurantMenuSection from "@/app/restaurant/components/RestaurantMenuSection";
import CloseButton from "@/components/ui/buttons/CloseButton";

export default function RestaurantMenuModalClient() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-brand-dark/40 backdrop-blur-md p-4 md:p-10">
      <div className="fixed inset-0 cursor-pointer" onClick={() => router.back()} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-light-bg w-full max-w-[1200px] rounded-[24px] md:rounded-[40px] shadow-2xl p-6 md:p-12 z-10 my-auto max-h-[90vh] overflow-y-auto no-scrollbar"
      >
        <div className="flex items-center justify-between mb-8 md:mb-12 border-b border-brand-dark/5 pb-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-dark/40 font-medium">Ресторан Тепло</span>
            <h2 className="text-2xl md:text-4xl font-medium text-brand-dark tracking-tight">Menu заведения</h2>
          </div>
          <CloseButton onClick={() => router.back()} />
        </div>

        {/* Оборачиваем секцию в LazyMotion, чтобы оживить m.div внутри FadeInLayout */}
        <LazyMotion features={domAnimation}>
          <RestaurantMenuSection />
        </LazyMotion>

      </motion.div>
    </div>
  );
}
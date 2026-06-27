"use client";

import { motion } from 'framer-motion';

export default function PageWrapper({ title, children }) {
  return (
    <section className="w-full bg-light-bg pt-32 pb-16 md:pt-28 md:pb-24 lg:py-32 px-4 md:px-8 lg:px-16 xl:px-24 text-brand-dark">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">

        {/* Хедер страницы: Название + Тонкая разделительная полоса */}
        <div className="flex flex-col gap-4 border-b border-brand-dark/10 pb-6 mb-4">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-atyp tracking-tight"
          >
            {title}
          </motion.h1>
        </div>

        {/* Сюда будет прокидываться весь контент страницы (докбар, сетки, карточки) */}
        <div className="w-full">
          {children}
        </div>

      </div>
    </section>
  );
}
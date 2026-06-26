'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PlaceholderSection({
                                             title = 'Страница в разработке',
                                             description = 'Мы уже наводим здесь лоск и готовим контент. Скоро всё заработает!',
                                             tag = 'Coming Soon',
                                             backLink = '/',
                                             backLinkText = 'Вернуться на главную'
                                           }) {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 text-brand-dark bg-light-bg selection:bg-stone-950 selection:text-white">
      <div className="w-full max-w-xl text-center flex flex-col items-center">

        {/* Декоративный элемент: Тэг и тонкая премиальная линия */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-3 mb-6"
        >
          {tag && (
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-dark/40 font-mono font-medium">
              {tag}
            </span>
          )}
          <div className="w-12 h-[1px] bg-brand-dark/20" />
        </motion.div>

        {/* Заголовок с мягким проявлением */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl font-normal tracking-tight leading-tight max-w-lg"
        >
          {title}
        </motion.h1>

        {/* Описание */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-brand-dark/60 text-base md:text-lg leading-relaxed max-w-md font-light"
        >
          {description}
        </motion.p>

        {/* Интерактивная кнопка-минималист */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <Link
            href={backLink}
            className="inline-flex items-center gap-2 bg-stone-950 text-white font-medium text-sm px-7 py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:bg-stone-800 transition-all duration-300 active:scale-98 group"
          >
            <span>{backLinkText}</span>
            <svg
              className="w-4 h-4 stroke-current transform group-hover:translate-x-0.5 transition-transform duration-300"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
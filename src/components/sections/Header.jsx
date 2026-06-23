"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "@/components/Logo";
import Link from "next/link";
import { FaTelegram, FaVk, FaOdnoklassniki } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuTransition = { type: 'tween', duration: 0.4, ease: 'easeOut' };

  return (
    <div className="fixed top-3 left-0 right-0 w-full px-4 md:px-20 z-50">

      <div className="max-w-7xl mx-auto w-full relative">

        {/* АНИМИРОВАННАЯ ПИЛЮЛЯ ХЕДЕРА */}
        <motion.header
          animate={{ y: isOpen ? -80 : 0 }}
          transition={menuTransition}
          className="w-full bg-light-bg text-brand-dark h-13 rounded-[12px] shadow-md relative"
        >
          <div className="h-full flex items-center justify-between pr-16 lg:pr-8">

            <div className="h-full">
              <Logo inHeader={true} size={"lg"} />
            </div>

            {/* МАКЕТ: Десктопное меню */}
            {/* w-auto заставит меню сжаться до контента, mx-auto отцентрирует его, а gap-12 задаст ширину */}
            <nav className="hidden lg:flex w-auto mx-auto items-center justify-center gap-12 font-normal text-sm">
              <div className="hover:text-brand-dark/80 transition-colors cursor-pointer">Проживание</div>
              <div className="hover:text-brand-dark/80 transition-colors cursor-pointer">Ресторан</div>
              <div className="hover:text-brand-dark/80 transition-colors cursor-pointer">Услуги</div>
              <div className="hover:text-brand-dark/80 transition-colors cursor-pointer">Бани</div>
              <div className="hover:text-brand-dark/80 transition-colors cursor-pointer">Прайс</div>
            </nav>

            <div className="text-brand-dark hidden sm:block">
              <b className="font-medium text-sm/4">+7 391 231 16 16</b>
            </div>

          </div>

          {/* КНОПКА 1: БУРГЕР (Сидит строго внутри хедера и улетает вместе с ним) */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex items-center justify-center w-8 h-8 absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none"
            aria-label="Открыть меню"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-6 h-0.5 bg-stone-950" />
              <span className="w-6 h-0.5 bg-stone-950" />
              <span className="w-6 h-0.5 bg-stone-950" />
            </div>
          </button>
        </motion.header>

      </div>

      {/* ВЫЕЗДНОЕ МОБИЛЬНОЕ МЕНЮ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={menuTransition}
            className="fixed top-0 right-0 h-screen w-[70vw] sm:w-80 bg-brand-dark shadow-2xl pt-16 px-10 flex flex-col lg:hidden z-40"
          >
            {/* КНОПКА 2: ИДЕАЛЬНО РОВНЫЙ КРЕСТИК (Привязан к доку, появляется вместе с ним) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 flex items-center justify-center w-8 h-8 focus:outline-none z-50"
              aria-label="Закрыть меню"
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                <span className="absolute h-0.5 bg-white w-6 rotate-45" />
                <span className="absolute h-0.5 bg-white w-6 -rotate-45" />
              </div>
            </button>
            
            <div className="bg-[#a3c6a8] w-25 h-2/22 flex rounded-xl items-center justify-center mb-10">
              <Logo size={'lg'}/>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-lg font-normal text-white">
                <Link href='/app/public'>
                  Проживание
                </Link>
              </div>
              <div className="text-lg font-normal text-white">
                <Link href='/app/public'>
                  Бани
                </Link>
              </div>
              <div className="text-lg font-normal text-white">
                <Link href='/app/public'>
                  Ресторан
                </Link>
              </div>
              <div className="text-lg font-normal text-white">
                <Link href='/app/public'>
                  Услуги
                </Link>
              </div>
              <div className="text-lg font-normal pb-3 text-white">
                <Link href='/app/public'>
                  Прайс
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-end items-center h-full mb-7 gap-5">

              <b className="text-white font-medium text-sm opacity-80">Мы в социальных сетях</b>

              {/* Ряд с иконками */}
              <div className="flex items-center gap-6 text-white select-none">

                {/* ТЕЛЕГРАМ: Родная круглая иконка, меняет цвет самого самолетика/круга */}
                <a
                  href="https://t.me/your_channel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-sky-400 active:scale-95 transition-all duration-200"
                  aria-label="Телеграм"
                >
                  <FaTelegram className="w-10 h-10" />
                </a>

                {/* ВКОНТАКТЕ: Белый круг, на ховере становится синим */}
                <a
                  href="https://vk.com/your_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white hover:bg-blue-800 rounded-full flex items-center justify-center mix-blend-screen active:scale-95 transition-all duration-200"
                  aria-label="ВКонтакте"
                >
                  <FaVk className="w-5 h-5 text-black" />
                </a>

                {/* ОДНОКЛАССНИКИ: Белый круг, на ховере становится оранжевым */}
                <a
                  href="https://ok.ru/your_group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white hover:bg-[#F97316] rounded-full flex items-center justify-center mix-blend-screen active:scale-95 transition-all duration-200"
                  aria-label="Одноклассники"
                >
                  <FaOdnoklassniki className="w-5 h-5 text-black" />
                </a>

              </div>

              {/* Твоя кнопка звонка */}
              <a
                href="tel:+73912311616"
                className="border border-white/20 bg-transparent text-white py-3 px-9 rounded-xl font-medium text-sm inline-block text-center cursor-pointer hover:bg-white hover:text-brand-dark transition-colors duration-300 mt-2"
              >
                Позвонить сейчас
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
'use client';

import { m } from 'framer-motion';
import Logo from '@/components/ui/media/Logo';
import AnimatedButton from '@/components/ui/buttons/AnimatedButton';
import NavLink from '@/components/ui/buttons/NavLink';
import { FaTelegram, FaVk, FaOdnoklassniki } from 'react-icons/fa';

export default function MobileMenu({ isOpen, setIsOpen, menuItems }) {

  // Единый жесткий транзишн без пружин и отскоков для самого меню
  const menuTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.3
  };

  const navContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.05 }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: 15 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.25
      }
    }
  };

  return (
    <m.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? '0%' : '100%' }}
      transition={menuTransition} // Повесили чистый tween
      className="fixed top-0 right-0 h-screen w-[75vw] sm:w-[320px] bg-stone-950 pt-20 px-6 flex flex-col lg:hidden z-50 pointer-events-auto border-l border-white/5 will-change-transform"
    >
      {/* Логотип */}
      <m.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.98 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="bg-[#a3c6a8] w-27 h-20 flex rounded-xl items-center justify-center mb-12 mx-2 will-change-[opacity,transform]"
      >
        <Logo size={'lg'} />
      </m.div>

      {/* ССЫЛКИ */}
      <m.div
        variants={navContainerVariants}
        initial="hidden"
        animate={isOpen ? "show" : "hidden"}
        className="flex flex-col"
      >
        {menuItems.map((item) => (
          <m.div
            key={item.name}
            variants={navItemVariants}
            className="w-full border-b border-white/5 last:border-none will-change-[opacity,transform]"
          >
            <NavLink
              href={item.href}
              isMobile={true}
              className="flex items-center justify-between py-4 px-2 w-full text-base font-normal tracking-wide text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 group"
            >
              <span>{item.name}</span>
              <svg
                className="w-4 h-4 stroke-white/30 group-hover:stroke-white group-hover:translate-x-0.5 transition-all duration-300"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </NavLink>
          </m.div>
        ))}
      </m.div>

      {/* Соцсети */}
      <div className="flex flex-col justify-end items-center h-full mb-8 gap-6">
        <b className="text-white/40 font-medium text-xs uppercase tracking-wider">Мы в социальных сетях</b>

        <div className="flex items-center gap-6 text-white select-none">
          <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-sky-400 active:scale-95 transition-all duration-200" aria-label="Телеграм">
            <FaTelegram className="w-9 h-9" />
          </a>
          <a href="https://vk.com/your_page" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center active:scale-95 transition-all duration-200" aria-label="ВКонтакте">
            <FaVk className="w-5 h-5 text-white" />
          </a>
          <a href="https://ok.ru/your_group" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#F97316] rounded-full flex items-center justify-center active:scale-95 transition-all duration-200" aria-label="Одноклассники">
            <FaOdnoklassniki className="w-5 h-5 text-white" />
          </a>
        </div>

        <m.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 8 }}
          transition={{ delay: 0.15, duration: 0.3, ease: 'easeInOut' }}
          className="w-full flex justify-center px-2 will-change-[opacity,transform]"
        >
          <AnimatedButton href="tel:+73912311616" variant="light" size="md" className="w-full text-center">
            Позвонить сейчас
          </AnimatedButton>
        </m.div>
      </div>
    </m.div>
  );
}
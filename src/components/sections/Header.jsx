'use client';

import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import NavLink from '@/components/buttons/NavLink';

export default function Header({ isOpen, setIsOpen, menuItems, shiftClasses = '', transitionClasses = '' }) {
  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className={`fixed top-3 left-0 right-0 w-full max-w-[100vw] px-4 md:px-20 z-50 pointer-events-none box-border ${shiftClasses} ${transitionClasses}`}>
      <div className="max-w-7xl mx-auto w-full relative pointer-events-auto">
        <motion.header
          variants={headerVariants}
          initial="initial"
          animate="animate"
          className="w-full bg-light-bg text-brand-dark h-13 rounded-[12px] shadow-md relative"
        >
          <div className="h-full flex items-center justify-between pr-16 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-full"
            >
              <Logo inHeader={true} size={"lg"} />
            </motion.div>

            {/* ДЕСКТОПНОЕ МЕНЮ */}
            <nav className="hidden lg:flex w-auto mx-auto items-center justify-center gap-12 font-normal text-sm">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  className="text-brand-dark/90 hover:text-brand-dark"
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            <div className="text-brand-dark hidden sm:block">
              <b className="font-medium text-sm/4">+7 391 231 16 16</b>
            </div>
          </div>

          {/* ИНТЕРАКТИВНЫЙ БУРГЕР / КРЕСТИК */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-8 h-8 absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none z-50"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between items-center">
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-6 h-0.5 bg-stone-950"
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-stone-950"
              />
              <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-6 h-0.5 bg-stone-950"
              />
            </div>
          </button>
        </motion.header>
      </div>
    </div>
  );
}
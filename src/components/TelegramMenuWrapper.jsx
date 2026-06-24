'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import MobileMenu from '@/components/sections/MobileMenu';

export default function TelegramMenuWrapper({ children, menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const sharedTransition = {
    type: 'tween',
    duration: 0.35,
    ease: [0.16, 1, 0.3, 1]
  };

  const xDrive = isOpen ? '-75vw' : '0vw';

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* 1. ХЕДЕР (z-50) */}
      <motion.div
        animate={{ x: xDrive }}
        transition={sharedTransition}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="pointer-events-auto">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} menuItems={menuItems} />
        </div>
      </motion.div>

      {/* 2. МОБИЛЬНОЕ МЕНЮ (z-45) */}
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menuItems={menuItems}
        sharedTransition={sharedTransition}
      />

      {/* 3. ОВЕРЛЕЙ КЛИКА (z-40) */}
      {isOpen && (
        <motion.div
          initial={{ x: '0vw' }}
          animate={{ x: xDrive }}
          transition={sharedTransition}
          onClick={() => setIsOpen(false)}
          className="fixed inset-y-0 left-0 w-full z-40 lg:hidden cursor-pointer bg-black/10"
        />
      )}

      {/* 4. ЛЕНДИНГ (z-30) */}
      <motion.div
        animate={{ x: xDrive }}
        transition={sharedTransition}
        className="w-full min-h-screen bg-light-bg shadow-[[-20px_0_50px_rgba(0,0,0,0.4)]] relative z-30 will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
}
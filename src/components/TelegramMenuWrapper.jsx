'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/sections/Header';
import MobileMenu from '@/components/sections/MobileMenu';

export default function TelegramMenuWrapper({ children, menuItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const shiftClasses = isOpen ? '-translate-x-[75vw] sm:-translate-x-[320px] lg:translate-x-0' : 'translate-x-0';
  const transitionClasses = "transition-transform duration-300 ease-in-out";

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
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} menuItems={menuItems} />

      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menuItems={menuItems}
        shiftClasses={shiftClasses}
        transitionClasses={transitionClasses}
      />

      <div className={`w-full min-h-screen bg-light-bg shadow-[[-20px_0_50px_rgba(0,0,0,0.4)]] relative z-30 will-change-transform ${transitionClasses} ${shiftClasses}`}>
        {children}
      </div>
    </>
  );
}
'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';

// Используем m.create для создания анимированной ссылки Next.js
const MotionLink = m.create(Link);

export default function SolidButton({
                                      children,
                                      onClick,
                                      href,
                                      type = 'button',
                                      variant = 'outline', // 'outline' | 'filled'
                                      rounded = 'rounded-full', // Любые классы скругления: rounded-xl, rounded-3xl и т.д.
                                      className = ''
                                    }) {

  // Кешируем пропсы анимации и стили, чтобы избежать их пересоздания при каждом рендере
  const motionProps = useMemo(() => {
    const baseStyles = `relative inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-medium tracking-wide transition-colors duration-500 overflow-hidden select-none cursor-pointer ${rounded} ${className}`;

    const variants = {
      outline: 'border border-brand-dark/20 text-brand-dark bg-transparent',
      filled: 'bg-brand-dark text-brand-white border border-transparent'
    };

    return {
      className: `${baseStyles} ${variants[variant]} group`,
      whileHover: {
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(48,67,64,0.05)"
      },
      whileTap: { scale: 0.98 },
      transition: { type: 'spring', stiffness: 400, damping: 30 }
    };
  }, [variant, rounded, className]);

  // Внутренний контент кнопки (текст, иконка, стрелочка, фоны)
  const buttonContent = (
    <>
      {/* Анимированный фон-заливка для outline варианта */}
      {variant === 'outline' && (
        <span className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
      )}

      {/* Контент кнопки (текст + возможная иконка) */}
      <span className={`flex items-center justify-center gap-2 relative z-10 transition-colors duration-500 ${variant === 'outline' ? 'group-hover:text-brand-white' : ''}`}>
        {children}

        {/* Минималистичная стрелочка, которая изящно сдвигается вправо при ховере */}
        <svg
          className={`w-4 h-4 transform transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-1 ${variant === 'outline' ? 'stroke-brand-dark group-hover:stroke-brand-white' : 'stroke-brand-white'}`}
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </span>
    </>
  );

  // Если передан href, рендерим как ссылку Next.js
  if (href) {
    return (
      <MotionLink href={href} onClick={onClick} {...motionProps}>
        {buttonContent}
      </MotionLink>
    );
  }

  // В противном случае рендерим как стандартную кнопку
  return (
    <m.button type={type} onClick={onClick} {...motionProps}>
      {buttonContent}
    </m.button>
  );
}
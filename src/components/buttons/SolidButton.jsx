'use client';

import { motion } from 'framer-motion';

export default function solidButton({
                                 children,
                                 onClick,
                                 type = 'button',
                                 variant = 'outline', // 'outline' | 'filled'
                                 rounded = 'rounded-full', // Передаем любые классы скругления: rounded-xl, rounded-3xl и т.д.
                                 className = ''
                               }) {

  // Стили для разных вариантов кнопки, завязанные на наши фирменные цвета
  const baseStyles = `relative px-8 py-4 text-sm md:text-base font-medium tracking-wide transition-colors duration-500 overflow-hidden ${rounded} ${className}`;

  const variants = {
    outline: 'border border-brand-dark/20 text-brand-dark bg-transparent',
    filled: 'bg-brand-dark text-brand-white border border-transparent'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} group`}
      // Эффект при наведении (слегка увеличиваем кнопку и делаем тень глубже)
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(48,67,64,0.05)"
      }}
      // Эффект при нажатии (физический отклик)
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {/* Анимированный фон-заливка для outline варианта */}
      {variant === 'outline' && (
        <span className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] -z-10" />
      )}

      {/* Контент кнопки (текст + возможная иконка) */}
      <span className={`flex items-center justify-center gap-2 transition-colors duration-500 ${variant === 'outline' ? 'group-hover:text-brand-white' : ''}`}>
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
    </motion.button>
  );
}
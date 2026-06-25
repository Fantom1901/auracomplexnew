import React from 'react';
import Link from 'next/link';

const AnimatedButton = ({
                          children,
                          href,
                          className = '',
                          variant = 'dark',       // 'dark', 'light', 'accent', 'outline-dark', 'outline-light', 'text'
                          size = 'md',          // 'sm', 'md', 'lg'
                          animation = 'shimmer', // 'shimmer' (блик), 'fill' (заливка), 'lift' (минимал подъем), 'none'
                          onClick,
                          target,
                          rel,
                          ...props
                        }) => {

  // Базовые стили
  const baseStyles = `
    group relative inline-flex items-center justify-center
    font-medium rounded-xl overflow-hidden
    tracking-tight select-none cursor-pointer whitespace-nowrap
    transition-all duration-600 ease-[cubic-bezier(0.16,_1,_0.3,_1)]
    active:scale-[0.98] will-change-transform
  `;

  // Сетка дизайн-системы для вариаций
  const variants = {
    dark: 'bg-brand-dark text-light-bg border border-brand-dark/10 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)]',
    light: 'bg-light-bg text-brand-dark border border-brand-dark/5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)]',
    accent: 'bg-brand-dark text-white border border-brand-dark/20 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_28px_rgba(0,0,0,0.18)]',
    'outline-dark': 'bg-transparent text-brand-dark border border-brand-dark/20 hover:border-brand-dark',
    'outline-light': 'bg-transparent text-light-bg border border-light-bg/25 hover:border-light-bg',
    text: 'bg-transparent text-brand-dark px-0 py-2 rounded-none border-none shadow-none hover:text-brand-dark/70'
  };

  // Пресеты размеров
  const sizes = {
    sm: 'py-2.5 px-6 text-xs uppercase tracking-[0.1em]',
    md: 'py-4 px-10 text-sm md:text-base tracking-normal',
    lg: 'py-5 px-14 text-base md:text-lg tracking-normal',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Умная проверка ссылки: внешняя или внутренняя
  const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));

  // Пропсы для внешних ссылок (типа виджета)
  const externalProps = isExternal
    ? { target: target || '_blank', rel: rel || 'noopener noreferrer' }
    : { target, rel };

  // Динамические цвета для инверсивных анимаций
  const isDarkVariant = ['dark', 'accent'].includes(variant);

  const shimmerColor = isDarkVariant
    ? 'from-transparent via-white/15 to-transparent'
    : 'from-transparent via-brand-dark/5 to-transparent';

  const fillColor = isDarkVariant
    ? 'bg-white/10'
    : 'bg-brand-dark/[0.04]';

  // Отрендерит контент анимаций и текста
  const renderInnerContent = () => (
    <>
      {/* 1. SHIMMER */}
      {animation === 'shimmer' && variant !== 'text' && (
        <span
          className={`absolute inset-0 w-[200%] h-full bg-gradient-to-r ${shimmerColor} -skew-x-12 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,_1,_0.3,_1)]`}
        />
      )}

      {/* 2. FILL */}
      {animation === 'fill' && variant !== 'text' && (
        <span
          className={`absolute inset-0 w-full h-full ${fillColor} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-600 ease-[cubic-bezier(0.16,_1,_0.3,_1)]`}
        />
      )}

      {/* 3. LIFT */}
      {animation === 'lift' && variant !== 'text' && (
        <span
          className="absolute inset-0 bg-current opacity-0 group-hover:opacity-[0.03] transition-opacity duration-400 ease-out"
        />
      )}

      {/* ХОВЕР ДЛЯ ТЕКСТА */}
      {variant === 'text' && (
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,_1,_0.3,_1)]" />
      )}

      {/* КОНТЕНТ */}
      <span className={`
        relative z-10 flex items-center gap-2
        transition-transform duration-500 ease-[cubic-bezier(0.16,_1,_0.3,_1)]
        ${animation === 'lift' ? 'group-hover:-translate-y-[1px]' : ''}
      `}>
        {children}
      </span>
    </>
  );

  // Если есть href — рендерим некстовый <Link>
  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={combinedClasses}
        {...externalProps}
        {...props}
      >
        {renderInnerContent()}
      </Link>
    );
  }

  // Если href нет — обычная кнопка
  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {renderInnerContent()}
    </button>
  );
};

export default AnimatedButton;
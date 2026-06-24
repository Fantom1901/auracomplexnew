import React from 'react';

const AnimatedButton = ({
                          children,
                          href,
                          className = '',
                          variant = 'dark', // 'dark' или 'light'
                          size = 'md',      // 'sm', 'md', 'lg'
                          ...props
                        }) => {
  // Базовые стили анимаций, ховеров и бликов, которые остаются ВСЕГДА
  const baseStyles = `
    group relative inline-flex items-center justify-center
    font-medium rounded-xl overflow-hidden
    border border-light-bg/10
    shadow-[2px_4px_8px_rgba(0,0,0,0.2)]
    hover:shadow-[2px_4px_12px_rgba(0,0,0,0.5),_0_0_20px_rgba(255,255,255,0.06)]
    hover:border-light-bg/30
    transition-all duration-500 ease-[cubic-bezier(0.16,_1,_0.3,_1)]
    active:scale-[0.97] cursor-pointer select-none whitespace-nowrap
  `;

  // Пресеты цветов (вынесли из хардкода)
  const variants = {
    dark: 'bg-brand-dark text-light-bg',
    light: 'bg-light-bg text-brand-dark',
    transparent: 'bg-transparent text-light-bg border border-light-bg/30 hover:bg-light-bg/10',
  };

  // Пресеты размеров (вынесли паддинги и текст)
  const sizes = {
    sm: 'py-2 px-6 text-xs md:text-sm',
    md: 'py-4 px-12 text-sm md:text-base',
    lg: 'py-5 px-16 text-base md:text-lg',
  };

  // Собираем все классы воедино + даем возможность прокинуть кастомные классы снаружи через className
  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Компонент-обертка: если есть href — рендерим как ссылку, если нет — как обычную кнопку
  const Element = href ? 'a' : 'button';

  return (
    <Element
      href={href}
      className={combinedClasses}
      {...(href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {/* ЭФФЕКТ СТРОГОГО БЛИКА */}
      <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-light-bg/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,_1,_0.3,_1)]" />

      {/* ЭФФЕКТ ГЛУБИНЫ */}
      <span className="absolute inset-0 bg-light-bg/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* ТЕКСТ */}
      <span className="relative z-10 tracking-normal group-hover:tracking-wider transition-all duration-500 ease-[cubic-bezier(0.16,_1,_0.3,_1)]">
        {children}
      </span>
    </Element>
  );
};

export default AnimatedButton;
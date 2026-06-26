import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, children, className = '', isMobile = false }) => {
  // Базовые стили для текста и строгого подчеркивания линии на ховере
  const linkStyles = `
    relative pb-1 pt-1 
    cursor-pointer select-none whitespace-nowrap
    transition-colors duration-300 group
    ${className}
  `;

  // Линия подчеркивания: использует currentColor, чтобы подстраиваться под цвет текста (темный или белый)
  const underline = (
    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
  );

  // Если есть href, в любом случае рендерим Link (и для мобилки, и для десктопа)
  if (href) {
    return (
      <Link href={href} className={linkStyles}>
        {children}
        {underline}
      </Link>
    );
  }

  // Фолбэк на случай, если ссылки нет (просто заглушка-див)
  return (
    <div className={linkStyles}>
      {children}
      {underline}
    </div>
  );
};

export default NavLink;
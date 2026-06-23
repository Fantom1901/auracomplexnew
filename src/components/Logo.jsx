import Link from 'next/link';

export default function Logo({inHeader = false, size = 'base'}) {
  // Словарь размеров: связываем понятные слова с готовыми классами Tailwind
  const sizeClasses = {
    sm: 'text-sm tracking-wider',
    base: 'text-base tracking-widest',
    lg: 'text-[21px] tracking-widest font-normal',
    xl: 'text-2xl tracking-widest md:text-3xl',
  };

  return (
    <Link
      href="/"
      className={`
        inline-flex items-center justify-center font-sans uppercase
        ${sizeClasses[size] || sizeClasses.base} 
        ${inHeader
        ? 'bg-[#a3c6a8] text-brand-dark h-full px-3 rounded-l-[12px]'
        : 'text-brand-dark font-medium'
      }
      `}
    >
      AURA
    </Link>
  );
}
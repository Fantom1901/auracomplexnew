'use client';

import Link from 'next/link';

export default function PricePage() {
  return (
    <div className="w-full min-h-screen bg-light-bg text-brand-dark flex flex-col items-center justify-center px-4 font-sans">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          Прайс-лист
        </h1>
        <p className="text-brand-dark/70 text-base leading-relaxed">
          Страница находится в разработке. Скоро мы выложим актуальные цены на проживание, аренду локаций и дополнительные услуги комплекса.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block bg-stone-950 text-white font-medium text-sm px-6 py-3 rounded-xl shadow-md hover:bg-stone-800 transition-colors duration-200"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
'use client';

import React from 'react';
import Link from 'next/link';

export default function RoomPage({ params }) {
  // В Next.js 15+ params может быть асинхронным, разворачиваем через React.use()
  const { id } = React.use(params);

  return (
    <div className="w-full min-h-screen bg-light-bg text-brand-dark flex flex-col items-center justify-center px-4 font-sans">
      <div className="max-w-xl text-center space-y-6">
        <span className="text-xs font-medium uppercase tracking-widest text-brand-dark/40 block">
          Динамический SSR роут
        </span>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl capitalize">
          Комната: {id}
        </h1>
        <p className="text-brand-dark/70 text-base leading-relaxed">
          Страница генерируется на сервере Node.js в реальном времени. Полный доступ к динамическому роутингу!
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block bg-stone-950 text-white font-medium text-sm px-6 py-3 rounded-xl shadow-md hover:bg-stone-800 transition-colors duration-200"
          >
            На главную страницу
          </Link>
        </div>
      </div>
    </div>
  );
}
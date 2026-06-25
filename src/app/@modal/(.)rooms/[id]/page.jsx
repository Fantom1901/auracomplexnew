'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RoomModal({ params }) {
  const router = useRouter();
  const { id } = React.use(params);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const closeModal = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={closeModal} />

      <div className="bg-light-bg text-brand-dark w-full max-w-2xl rounded-2xl p-6 md:p-8 relative z-10 shadow-2xl border border-stone-200/50">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-brand-dark/50 hover:text-brand-dark transition-colors p-2 text-xl cursor-pointer"
        >
          ✕
        </button>

        <span className="text-xs font-medium uppercase tracking-widest text-[#243431]/60 block mb-2">
          Интерактивное превью
        </span>
        <h2 className="text-3xl font-medium tracking-tight mb-4">
          ID Номера: <span className="capitalize text-[#243431]">{id}</span>
        </h2>
        <p className="text-brand-dark/70 text-sm md:text-base leading-relaxed mb-6">
          Роут успешно перехвачен в режиме сервера! Модалка открылась без перезагрузки.
        </p>

        <button
          onClick={closeModal}
          className="w-full sm:w-auto bg-[#243431] text-white font-medium text-sm px-6 py-3 rounded-xl hover:bg-stone-800 transition-colors duration-200 cursor-pointer"
        >
          Закрыть окно
        </button>
      </div>
    </div>
  );
}
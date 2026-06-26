'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from "@/components/ui/buttons/AnimatedButton";

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    birthDate: '',
    agree: false,
  });

  const [status, setStatus] = useState({ type: null, message: '' });

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, '');
    if (input.startsWith('7') || input.startsWith('8')) input = input.substring(1);

    let formatted = '';
    if (input.length > 0) formatted += '+7 (' + input.substring(0, 3);
    if (input.length > 3) formatted += ') ' + input.substring(3, 6);
    if (input.length > 6) formatted += '-' + input.substring(6, 8);
    if (input.length > 8) formatted += '-' + input.substring(8, 10);

    setFormData({ ...formData, phone: formatted === '' ? '' : formatted.substring(0, 18) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agree) {
      setStatus({ type: 'error', message: 'Необходимо согласие на обработку данных' });
      return;
    }

    setStatus({ type: 'loading', message: '' });

    try {
      console.log('Отправка данных:', formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus({ type: 'success', message: 'Заявка успешно отправлена! Мы свяжемся с вами.' });
      setFormData({ fullName: '', phone: '', birthDate: '', agree: false });
    } catch (error) {
      setStatus({ type: 'error', message: 'Что-то пошло не так. Попробуйте позже.' });
    }
  };

  return (
    <section className="w-full bg-[#f4f6f5] text-[#304340] py-20 md:py-36 px-6 md:px-16 flex flex-col items-center">

      <div className="w-full max-w-[560px] flex flex-col items-center text-center">

        {/* Заголовок */}
        <div className="mb-10 md:mb-12 flex flex-col items-center gap-3">
          <h2 className="font-medium text-3xl md:text-5xl tracking-tight text-[#304340]">
            Остались вопросы?
          </h2>
          <p className="text-[#304340]/70 text-sm md:text-base max-w-sm font-normal leading-relaxed">
            Заполните форму, и мы свяжемся с Вами в ближайшее время!
          </p>
        </div>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

          {/* ФИО */}
          <div className="w-full">
            <input
              type="text"
              required
              placeholder="Ваши ФИО"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-6 py-4 rounded-[16px] bg-[#e5eae7] border border-transparent focus:border-[#304340]/20 text-[#304340] placeholder-[#304340]/40 outline-none text-base transition-all duration-300 font-medium"
            />
          </div>

          {/* Телефон */}
          <div className="w-full">
            <input
              type="tel"
              required
              placeholder="Ваш телефон"
              value={formData.phone}
              onChange={handlePhoneChange}
              className="w-full px-6 py-4 rounded-[16px] bg-[#e5eae7] border border-transparent focus:border-[#304340]/20 text-[#304340] placeholder-[#304340]/40 outline-none text-base transition-all duration-300 font-medium"
            />
          </div>

          {/* Дата рождения — Тотальный фикс иконки */}
          <div className="w-full relative flex items-center text-left rounded-[16px] bg-[#e5eae7] overflow-hidden">

            <input
              type="date"
              required
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              className="w-full px-6 py-4 text-[#304340] bg-transparent outline-none text-base font-medium z-20 [color-scheme:light] cursor-pointer"
              style={{
                minHeight: '58px',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none'
              }}
            />

            {/*/!* Наша кастомная иконка из react-icons — теперь она строго ПОД прозрачной областью клика *!/*/}
            {/*<div className="absolute right-5 z-10 text-[#304340]/40 pointer-events-none">*/}
            {/*  <FiCalendar className="w-5 h-5" />*/}
            {/*</div>*/}

            {/* Выжигаем нативный значок календаря через инжект стилей */}
            <style jsx global>{`
              input[type="date"]::-webkit-calendar-picker-indicator {
                background: transparent;
                bottom: 0;
                color: transparent;
                cursor: pointer;
                left: 0;
                position: absolute;
                right: 0;
                top: 0;
                width: auto;
                height: auto;
                opacity: 0; /* Полная прозрачность */
                -webkit-appearance: none;
              }
              input[type="date"]::-webkit-inner-spin-button,
              input[type="date"]::-webkit-clear-button {
                -webkit-appearance: none;
                display: none;
              }
            `}</style>
          </div>

          {/* Чекбокс */}
          <label className="flex items-start text-left gap-3 mt-1 select-none cursor-pointer group">
            <div className="relative flex items-center justify-center mt-0.5">
              <input
                type="checkbox"
                checked={formData.agree}
                onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                formData.agree ? 'bg-[#304340] border-[#304340]' : 'border-[#304340]/30 group-hover:border-[#304340]'
              }`}>
                {formData.agree && (
                  <svg className="w-3 h-3 text-white stroke-white" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-xs md:text-sm text-[#304340]/80 font-normal">
              Согласие на обработку{' '}
              <a href="/privacy" className="underline hover:text-[#304340] transition-colors duration-200">
                персональных данных
              </a>
            </span>
          </label>

          {/* Анимация статуса */}
          <AnimatePresence mode="wait">
            {status.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-sm p-4 rounded-xl font-medium mt-1 text-left ${
                  status.type === 'success' ? 'bg-emerald-100 text-emerald-800' :
                    status.type === 'error' ? 'bg-rose-100 text-rose-800' : 'bg-stone-100 text-stone-600'
                }`}
              >
                {status.type === 'loading' ? (
                  <div className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-stone-600" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Обработка заявки...
                  </div>
                ) : (
                  status.message
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatedButton
          >Отправить заявку
          </AnimatedButton>


        </form>

      </div>
    </section>
  );
}
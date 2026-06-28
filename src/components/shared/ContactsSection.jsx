'use client';

import { useState } from 'react';
import { FaTelegram, FaVk, FaOdnoklassniki } from 'react-icons/fa';

export default function ContactsSection() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <section className="w-full bg-[#304340] text-white py-16 md:py-24 px-6 md:px-16 flex justify-center border-t border-white/10">
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 rounded-[24px] md:rounded-[40px] overflow-hidden bg-[#e5eae7]/5 border border-white/5 shadow-2xl">

        {/* ЛЕВАЯ ЧАСТЬ: ИНТЕРАКТИВНАЯ КАРТА С КЛИК-АКТИВАЦИЕЙ */}
        <div className="lg:col-span-6 xl:col-span-7 w-full h-[350px] sm:h-[450px] lg:h-auto min-h-[400px] relative bg-[#263533]">

          {!isMapLoaded ? (
            /* Заглушка до клика: предотвращает загрузку сторонних кук и скриптов */
            <button
              onClick={() => setIsMapLoaded(true)}
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#1d2927] group outline-none cursor-pointer"
              aria-label="Активировать интерактивную карту"
            >
              {/* Тут можно сделать красивый фоновый градиент или подложить mapAuraImg через Next.js Image */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e5eae7_1px,transparent_1px)] [background-size:16px_16px] group-hover:scale-105 transition-transform duration-700" />

              <div className="relative z-10 flex flex-col items-center gap-4 p-6">
                <div className="w-14 h-14 rounded-full bg-[#304340] border border-white/10 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#39504c] transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium tracking-wide text-white/90">Показать интерактивную карту</p>
                  <p className="text-xs text-white/40 mt-1">пос. Манский</p>
                </div>
              </div>
            </button>
          ) : (
            /* Реальный iframe грузится строго в момент клика */
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A63dd39fa1e3976991ac1d8e712ffc3cbb30ecadef578d4c5ddea5dcc795ac285&amp;source=constructor"
              width="100%"
              height="100%"
              className="border-0 opacity-90 hover:opacity-100 transition-opacity duration-500 min-h-[400px] absolute inset-0"
              allowFullScreen={true}
              title="Карта проезда к AURA"
            />
          )}
        </div>

        {/* ПРАВАЯ ЧАСТЬ: ИНФОРМАЦИОННАЯ ПАНЕЛЬ С КОНТАКТАМИ */}
        <div className="lg:col-span-6 xl:col-span-5 p-8 sm:p-12 md:p-16 flex flex-col justify-between gap-12">

          <div className="flex flex-col gap-10">
            {/* БЛОК: СВЯЗЬ */}
            <div className="flex flex-col gap-4 will-change-[opacity,transform]">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
                Контакты
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+73912311616"
                  className="text-lg md:text-xl font-medium tracking-wide hover:text-[#e5eae7] transition-colors duration-200 flex flex-wrap items-baseline gap-2"
                >
                  <span className="font-bold text-white">+7 (391) 231-16-16</span>
                  <span className="text-sm text-white/50 font-normal">— отдел бронирования</span>
                </a>
                <a
                  href="tel:+73912511333"
                  className="text-lg md:text-xl font-medium tracking-wide hover:text-[#e5eae7] transition-colors duration-200 flex flex-wrap items-baseline gap-2"
                >
                  <span className="font-bold text-white">+7 (391) 251-13-33</span>
                  <span className="text-sm text-white/50 font-normal">— ресторан «Тепло»</span>
                </a>
                <a
                  href="mailto:auramana.inbox@gmail.com"
                  className="text-base md:text-lg text-white/70 hover:text-white transition-colors duration-200 mt-2 font-medium tracking-wide underline decoration-white/20 hover:decoration-white"
                >
                  auramana.inbox@gmail.com
                </a>
              </div>
            </div>

            {/* БЛОК: АДРЕС */}
            <div className="flex flex-col gap-3 will-change-[opacity,transform]">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
                Адрес
              </h3>
              <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed tracking-wide max-w-sm">
                СНТ Отдых, 89 <br />
                Земельный массив Отдых, пос. Манский, <br />
                Дивногорск городской округ, <br />
                Красноярский край
              </p>
            </div>
          </div>

          {/* БЛОК: СОЦСЕТИ */}
          <div className="flex flex-col gap-4 pt-8 border-t border-white/10 will-change-[opacity,transform]">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
              Мы в социальных сетях
            </h3>

            <div className="flex items-center gap-6 text-white select-none">
              <a
                href="https://t.me/your_channel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-white hover:text-sky-400 active:scale-95 transition-all duration-200"
                aria-label="Телеграм"
              >
                <FaTelegram className="w-10 h-10" />
              </a>
              <a
                href="https://vk.com/your_page"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white hover:bg-blue-800 rounded-full flex items-center justify-center mix-blend-screen active:scale-95 transition-all duration-200"
                aria-label="ВКонтакте"
              >
                <FaVk className="w-5 h-5 text-black" />
              </a>
              <a
                href="https://ok.ru/your_group"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white hover:bg-[#F97316] rounded-full flex items-center justify-center mix-blend-screen active:scale-95 transition-all duration-200"
                aria-label="Одноклассники"
              >
                <FaOdnoklassniki className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
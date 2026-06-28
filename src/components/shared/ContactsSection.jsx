import { FaTelegram, FaVk, FaOdnoklassniki } from 'react-icons/fa';

export default function ContactsSection() {
  return (
    <section className="w-full bg-[#304340] text-white py-16 md:py-24 px-6 md:px-16 flex justify-center border-t border-white/10">
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 rounded-[24px] md:rounded-[40px] overflow-hidden bg-[#e5eae7]/5 border border-white/5 shadow-2xl">

        {/* ЛЕВАЯ ЧАСТЬ: ИНТЕРАКТИВНАЯ КАРТА */}
        <div className="lg:col-span-6 xl:col-span-7 w-full h-[350px] sm:h-[450px] lg:h-auto min-h-[400px] relative bg-[#263533]">
          {/* Интерактивная Яндекс.Карта с точкой пос. Манский */}
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A63dd39fa1e3976991ac1d8e712ffc3cbb30ecadef578d4c5ddea5dcc795ac285&amp;source=constructor"
            width="100%"
            height="100%"
            className="border-0 opacity-80 hover:opacity-100 transition-opacity duration-500 min-h-[400px]"
            allowFullScreen={true}
            loading="lazy"
            title="Карта проезда к AURA"
          />
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
'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#304340] text-[#e5eae7] pt-16 pb-12 px-6 md:px-16 flex justify-center border-t border-white/5">
      <div className="w-full max-w-[1400px] flex flex-col gap-16">

        {/* ОСНОВНАЯ СЕТКА С ДАННЫМИ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* КОЛОНКА 1: МЕНЮ (4/12 ширины на десктопе) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-white/40">
              Меню
            </h4>
            <nav className="flex flex-col gap-2.5 text-base font-normal text-white/80">
              <Link href="/" className="hover:text-white transition-colors duration-200 w-fit">Главная</Link>
              <Link href="/rooms" className="hover:text-white transition-colors duration-200 w-fit">Проживание</Link>
              <Link href="/restaurant" className="hover:text-white transition-colors duration-200 w-fit">Ресторан</Link>
              <Link href="/bany" className="hover:text-white transition-colors duration-200 w-fit">Бани</Link>
              <Link href="/services" className="hover:text-white transition-colors duration-200 w-fit">Услуги</Link>
              <Link href="/price" className="hover:text-white transition-colors duration-200 w-fit">Прайс</Link>
            </nav>
          </div>

          {/* КОЛОНКА 2: ДОКУМЕНТЫ */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-white/40">
              Документы
            </h4>
            <div className="flex flex-col gap-2.5 text-base font-normal text-white/80">
              <a href="/docs/oferta.pdf" target="_blank" className="hover:text-white transition-colors duration-200 w-fit">Договор оферты</a>
              <a href="/docs/booking-terms.pdf" target="_blank" className="hover:text-white transition-colors duration-200 w-fit">Условия бронирования</a>
              <a href="/docs/rules.pdf" target="_blank" className="hover:text-white transition-colors duration-200 w-fit">Правила проживания</a>
              <a href="/privacy" className="hover:text-white transition-colors duration-200 w-fit">Политика конфиденциальности</a>
            </div>
          </div>

          {/* КОЛОНКА 3: РЕКВИЗИТЫ КОМПАНИИ */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-white/40">
              Реквизиты компании
            </h4>
            <div className="flex flex-col gap-2 text-sm md:text-base text-white/70 font-normal leading-relaxed tracking-wide">
              <p className="font-medium text-white/90">ООО "АУРА"</p>
              <p>ИНН 2446011356</p>
              <p>ОГРН 1242400003207</p>
              <p className="max-w-xs mt-1">
                Юридический адрес: 663090, Красноярский край, г Дивногорск, ул Набережная, д 55, кв 25
              </p>
            </div>
          </div>

          {/* КОЛОНКА 4: БАНКОВСКИЕ РЕКВИЗИТЫ */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-white/40">
              Банковские реквизиты
            </h4>
            <div className="flex flex-col gap-2 text-sm md:text-base text-white/70 font-normal leading-relaxed tracking-wide font-mono">
              <p className="font-sans font-medium text-white/90 tracking-normal">
                Филиал "Новосибирский" АО "Альфа-банк"
              </p>
              <p><span className="font-sans text-white/40 text-xs uppercase tracking-wider mr-1">БИК</span> 04500477</p>
              <p><span className="font-sans text-white/40 text-xs uppercase tracking-wider mr-1">Р/с</span> 40702810523300009194</p>
              <p><span className="font-sans text-white/40 text-xs uppercase tracking-wider mr-1">К/с</span> 30101810600000000774</p>
            </div>
          </div>

        </div>

        {/* НИЖНЯЯ ПАНЕЛЬ: КОПИРАЙТ И МЕТКА */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-white/30 font-normal">
          <p>© {currentYear} Комплекс отдыха AURA. Все права защищены.</p>
          <p className="tracking-wide">
            Разработка сайта — <span className="text-white/50 font-medium">Nixa</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
import Image from 'next/image';
import heroImg from '../../../public/assets/HeroImage.webp';

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">

      {/* Задний фон */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="База отдыха Аура"
          priority
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* КОНТЕНТ-ЗОНА (ТЕКСТ): Оставляем её наверху с pt-40 */}
      <div className="absolute inset-0 z-10 flex w-full items-start pt-40 justify-center text-center px-4">
        <div className="max-w-2xl flex flex-col items-center gap-4">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-light-bg leading-tight md:leading-snug">
            Территория <br/> вашего отдыха
          </h1>
          <p className="text-sm sm:text-md text-light-bg/90 max-w-md font-normal">
            Многофункциональный комплекс отдыха<br/> в 30 минутах от города Красноярска<br/> на реке Мана
          </p>
        </div>
      </div>

      {/* Кнопка плавно и дорого выезжает снизу через CSS-анимацию */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-fade-in-up">
        <a
          href="https://auracomplex.mehotel.ru/widget"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group relative inline-flex items-center justify-center
            bg-brand-dark text-light-bg font-medium text-sm md:text-base
            py-4 px-12 rounded-xl overflow-hidden
            border border-light-bg/10
            shadow-[0_4px_20px_rgba(0,0,0,0.3)]
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),_0_0_20px_rgba(255,255,255,0.06)]
            hover:border-light-bg/30
            transition-all duration-500 ease-[cubic-bezier(0.16,_1,_0.3,_1)]
            active:scale-[0.97] cursor-pointer select-none whitespace-nowrap
          "
        >
          {/* Элегантная световая полоса при наведении */}
          <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-light-bg/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,_1,_0.3,_1)]" />

          {/* Мягкое внутреннее свечение */}
          <span className="absolute inset-0 bg-light-bg/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Текст раздвигает буквы на ховере */}
          <span className="relative z-10 tracking-normal group-hover:tracking-wider transition-all duration-500 ease-[cubic-bezier(0.16,_1,_0.3,_1)]">
            Подобрать номер
          </span>
        </a>
      </div>

    </section>
  );
}
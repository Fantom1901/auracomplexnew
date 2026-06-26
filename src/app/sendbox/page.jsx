"use client";

import ServiceCard from '@/components/ui/ServiceCard';

export default function SandboxPage() {
  // Тестовые данные строго по твоему ТЗ
  const poolPrices = [
    { label: 'Для проживающих гостей', price: 'Бесплатно' },
    { label: 'Гостевой визит (08:00–21:00)', price: '3 300 ₽' },
    { label: 'Вечерний визит (16:00–21:00)', price: '2 000 ₽' },
    { label: 'Дети до 12 лет (без лежака)', price: 'Бесплатно' },
  ];

  return (
    <div className="w-full min-h-screen bg-stone-950 text-stone-100 px-4 py-24 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">

        <div className="border-b border-stone-800 pb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-2">
            Service Page // Component Preview
          </span>
          <h1 className="text-3xl md:text-4xl font-medium font-atyp tracking-tight">
            Тест премиум-карточки услуг
          </h1>
        </div>

        {/* Тест 1: Карточка с кнопкой «Подробнее» */}
        <div className="space-y-4">
          <span className="text-[10px] font-mono uppercase text-stone-500 block">Вариант 1: С кнопкой</span>
          <ServiceCard
            title="Подогреваемый панорамный бассейн"
            description="Просторный бассейн и бар на крыше с видом на реку и горы – лучшее место для расслабления среди горных пейзажей."
            schedule="с 8:00 до 21:00"
            prices={poolPrices}
            imageSrc="/pool-preview.jpg" // Замени на актуальный путь к фотке бассейна
            imageAlt="Подогреваемый панорамный бассейн AURA"
            showButton={true}
          />
        </div>

        {/* Тест 2: Карточка без кнопки */}
        <div className="space-y-4 pt-8">
          <span className="text-[10px] font-mono uppercase text-stone-500 block">Вариант 2: Без кнопки (showButton={"{false}"})</span>
          <ServiceCard
            title="Консьерж-сервис"
            description="Полное сопровождение вашего отдыха: бронирование билетов, заказ цветов, организация экскурсий по Манской петле и оперативное решение любых бытовых вопросов."
            schedule="24 / 7"
            prices={[
              { label: 'Базовые поручения', price: 'Включено' },
              { label: 'Индивидуальные гиды', price: 'по запросу' }
            ]}
            imageSrc="/pool-preview.jpg"
            showButton={false}
          />
        </div>

      </div>
    </div>
  );
}
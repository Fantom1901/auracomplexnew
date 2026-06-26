import ServicesSection from '@/components/sections/services/ServicesSection';

export const metadata = {
  title: 'Услуги и развлечения — Многофункциональный комплекс AURA',
  description: 'Подогреваемый панорамный бассейн, экскурсии на Манскую петлю, премиальный консьерж-сервис и комфортабельный трансфер для гостей комплекса AURA.',
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-light-bg min-h-screen">
      {/* Вызываем нашу интерактивную секцию с фильтрацией */}
      <ServicesSection />
    </main>
  );
}
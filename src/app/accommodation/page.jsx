import PageWrapper from '@/components/layout/PageWrapper';
import AccommodationSection from '@/components/sections/Accommodation/AccommodationSection';

export const metadata = {
  title: 'Элитные дома и номера для проживания на берегу Маны',
  description: 'Выберите идеальный вариант для отдыха: премиум-виллы, уютные шале и комфортабельные номера с панорамными видами на скалы и реку.',
};

export default function AccommodationPage() {
  return (
    <main className="w-full min-h-screen bg-[#fbfbfb] overflow-x-hidden">
      {/* Оборачиваем секцию во враппер и передаем заголовок страницы */}
      <PageWrapper title="Проживание">
        <AccommodationSection />
      </PageWrapper>
    </main>
  );
}
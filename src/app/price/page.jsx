import PriceSection from '@/components/sections/price/PriceSection';

export const metadata = {
  title: 'Прайс-лист — Комплекс AURA',
  description: 'Стоимость проживания, оздоровительных процедур и дополнительных услуг в комплексе AURA.',
};

export default function PricePage() {
  return (
    <main className="w-full">
      <PriceSection />
    </main>
  );
}
import PageWrapper from '@/components/layout/PageWrapper';
import PriceSection from '@/components/sections/price/PriceSection';

export const metadata = {
  title: 'Цены на проживание и услуги термального комплекса AURA',
  description: 'Честные и прозрачные цены на аренду вилл, шале, спа-программы и дополнительные услуги на берегу Маны.',
};

export default function PricePage() {
  return (
    <main className="w-full min-h-screen bg-[#fbfbfb] overflow-x-hidden">
      <PageWrapper title="Прайс-лист">
        <PriceSection />
      </PageWrapper>
    </main>
  );
}
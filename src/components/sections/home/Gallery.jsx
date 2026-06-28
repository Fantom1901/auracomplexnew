'use client';

import PremiumSlider from '@/components/features/PremiumSlider';

const mockImages = [
  { id: 1, title: 'Панорамный бассейн AURA', tag: 'Wellness & Spa' },
  { id: 2, title: 'Вид на террасу и горы', tag: 'Outdoor Terrace' },
  { id: 3, title: 'Интерьер главного зала', tag: 'Lounge Interior' },
  { id: 4, title: 'Уютные вечерние костровища', tag: 'Fireplace Zone' },
  { id: 5, title: 'Прогулочная зона у реки', tag: 'Riverside Park' },
  { id: 6, title: 'Приватный винный погреб и дегустационный зал', tag: 'Wine Club' },
  { id: 7, title: 'Подземный охраняемый паркинг класса люкс', tag: 'Premium Parking' }
];

export default function Galleray() {
  return (
    <div className="space-y-20">
      <PremiumSlider
        items={mockImages}
        title="Галерея комплекса"
        sectionTag="Visual Aesthetics"
        sliderClassName="max-w-[1400px] h-[460px] sm:h-[520px] md:h-auto md:aspect-[16/10] xl:aspect-[21/12] max-h-[1080px]"
      />
    </div>
  );
}
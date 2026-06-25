'use client';

import PremiumSlider from '@/components/sliders/PremiumSlider';

const mockImages = [
  {
    id: 1,
    color: 'from-[#2C3E35] to-[#1A2621]', // Глубокий хвойный / мрамор
    title: 'Панорамный бассейн AURA',
    tag: 'Wellness & Spa'
  },
  {
    id: 2,
    color: 'from-[#4A3B32] to-[#2D241E]', // Благородный орех / тёплое дерево
    title: 'Вид на террасу и горы',
    tag: 'Outdoor Terrace'
  },
  {
    id: 3,
    color: 'from-[#232B38] to-[#141923]', // Ночной графит / сланец
    title: 'Интерьер главного зала',
    tag: 'Lounge Interior'
  },
  {
    id: 4,
    color: 'from-[#3A3238] to-[#251F24]', // Дымчатый кварц / тёмная медь
    title: 'Уютные вечерние костровища',
    tag: 'Fireplace Zone'
  },
  {
    id: 5,
    color: 'from-[#1F2E35] to-[#111A1E]', // Глубокий океанический / полумрак
    title: 'Прогулочная зона у реки',
    tag: 'Riverside Park'
  },
  {
    id: 6,
    color: 'from-[#42313A] to-[#261B21]', // Приглушённый винный / темный бордо
    title: 'Приватный винный погреб и дегустационный зал',
    tag: 'Wine Club'
  },
  {
    id: 7,
    color: 'from-[#373A36] to-[#212421]', // Мокрый асфальт / матовый антрацит
    title: 'Подземный охраняемый паркинг класса люкс',
    tag: 'Premium Parking'
  }
];

export default function Page() {
  return (
    <div className="space-y-20">

      {/* ВАРИАНТ 1: Полноценная секция с внешним заголовком, прогресс-баром и нижними кнопками */}
      <PremiumSlider
        items={mockImages}
        title="Галерея комплекса"
        sectionTag="Visual Aesthetics"
        sliderClassName="max-w-[1400px] h-[460px] sm:h-[520px] md:h-auto md:aspect-[16/10] xl:aspect-[21/12] max-h-[1080px]"
      />

    </div>
  );
}
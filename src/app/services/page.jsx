import PageWrapper from '@/components/layout/PageWrapper';
import ServicesSection from '@/app/services/components/ServicesSection';

export const metadata = {
  title: 'Премиальные услуги и спа-программы комплекса AURA',
  description: 'Погрузитесь в атмосферу абсолютного уединения: спа-комплексы, подогреваемые купели, экскурсии по Мане и авторская кухня.',
};

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-[#fbfbfb] overflow-x-hidden">
      <PageWrapper title="Услуги">
        <ServicesSection />
      </PageWrapper>
    </main>
  );
}
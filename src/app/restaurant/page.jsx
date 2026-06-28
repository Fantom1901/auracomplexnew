import PageWrapper from "@/components/layout/PageWrapper";
import RestaurantAboutSection from "@/app/restaurant/components/RestaurantAboutSection";
import RestaurantGallerySection from "@/app/restaurant/components/RestaurantGallerySection";

const pageWrapperTitle = 'Ресторан на Мане «Тепло»';

export default function RestaurantPage() {
  return (
    <PageWrapper title={pageWrapperTitle}>
      <div className="flex flex-col w-full">

        {/* Секция 1: Чистый контент, журнальная сетка и кнопка меню */}
        <RestaurantAboutSection />

        {/* Секция 2: Интерактивная галерея с таб-баром и адаптивными градиентами */}
        <RestaurantGallerySection />

      </div>
    </PageWrapper>
  );
}
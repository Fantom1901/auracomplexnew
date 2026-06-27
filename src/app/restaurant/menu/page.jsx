import PageWrapper from "@/components/layout/PageWrapper";
import RestaurantMenuSection from "@/components/sections/restaurant/RestaurantMenuSection";

const pageTitle = "Меню ресторана «Тепло»";

export default function RestaurantMenuPage() {
  return (
    <PageWrapper title={pageTitle}>
      <div className="w-full mt-8 mb-24">
        {/* Вызываем ту же самую секцию, но уже в рамках полноценного лейаута сайта */}
        <RestaurantMenuSection />
      </div>
    </PageWrapper>
  );
}
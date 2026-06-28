import { MENU_DATA } from "@/data/restaurant";
import { validateMenuConfig } from "@/lib/utils/checkFile";
import RestaurantMenuModalClient from "./RestaurantMenuModalClient";

export default function RestaurantMenuModalPage() {
  // Сохраняем отвалидированные данные
  const validatedMenuData = validateMenuConfig(MENU_DATA);

  // Передаем их пропом в клиентский компонент модалки
  return <RestaurantMenuModalClient validatedMenuData={validatedMenuData} />;
}
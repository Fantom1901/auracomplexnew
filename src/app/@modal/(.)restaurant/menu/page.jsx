import { MENU_DATA } from "@/data/restaurant";
import { validateMenuConfig } from "@/lib/utils/checkFile";
import RestaurantMenuModalClient from "./RestaurantMenuModalClient";

export default function RestaurantMenuModalPage() {
  // Серверная валидация для модального окна
  const validatedMenuData = validateMenuConfig(MENU_DATA);

  return <RestaurantMenuModalClient validatedMenuData={validatedMenuData} />;
}
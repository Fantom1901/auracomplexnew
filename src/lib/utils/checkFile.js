import fs from "fs";
import path from "path";

/**
 * Проверяет физическое существование файла в папке public.
 * Если файла нет или путь пустой — возвращает null.
 */
export function verifyImageExistence(src) {
  if (!src || typeof src !== "string") return null;

  // Проверяем только локальные статические пути Complex комплекса
  if (src.startsWith("/")) {
    try {
      const absolutePath = path.join(process.cwd(), "public", src);

      if (fs.existsSync(absolutePath)) {
        return src; // Файл найден, возвращаем исходный путь
      }
    } catch (error) {
      console.error(`Ошибка при проверке файла: ${src}`, error);
    }

    return null; // Файла физически нет на сервере
  }

  return src; // Если это внешний URL (http/https), возвращаем как есть
}

/**
 * Прогоняет весь конфиг данных меню через валидатор файлов
 */
export function validateMenuConfig(menuData) {
  const validatedData = {};

  Object.keys(menuData).forEach((category) => {
    validatedData[category] = menuData[category].map((src) =>
      verifyImageExistence(src)
    );
  });

  return validatedData;
}
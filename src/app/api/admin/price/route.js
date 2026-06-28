// src/app/api/admin/price/route.js
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();

    const { priceCategories, stayData, wellnessData, servicesData, stayNotes } = data;

    // Генерируем чистое текстовое содержимое JS-файла
    const fileContent = `// Данные сгенерированы локальной админкой
export const priceCategories = ${JSON.stringify(priceCategories, null, 2)};

export const stayData = ${JSON.stringify(stayData, null, 2)};

export const wellnessData = ${JSON.stringify(wellnessData, null, 2)};

export const servicesData = ${JSON.stringify(servicesData, null, 2)};

export const stayNotes = ${JSON.stringify(stayNotes, null, 2)};
`;

    // Определяем абсолютный путь к файлу данных в проекте
    const filePath = path.resolve(process.cwd(), 'src/data/priceData.js');

    // Записываем обновленный код на диск
    await fs.writeFile(filePath, fileContent, 'utf-8');

    return NextResponse.json({ success: true, message: 'Конфиг прайса успешно сохранен на диск!' });
  } catch (error) {
    console.error('Ошибка сохранения прайса:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
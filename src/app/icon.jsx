import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

// Твои настройки разрешения
export const size = {
  width: 48,
  height: 48,
};
export const contentType = 'image/png';

export default async function Icon() {
  // Подтягиваем локальный шрифт
  const fontPath = join(process.cwd(), 'src/app/fonts/AtypText-Medium.woff');
  const fontData = await readFile(fontPath);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <span
          style={{
            fontFamily: 'AtypText',
            fontSize: '60px',       // Твой размер
            color: '#fbfbfb',      // Твой цвет
            fontWeight: 500,
            lineHeight: 1,
            marginBottom: '4px',   // Твоё смещение для идеального центра
            display: 'flex',
          }}
        >
          А
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'AtypText',
          data: fontData,
          style: 'normal',
          weight: 500,
        },
      ],
    }
  );
}
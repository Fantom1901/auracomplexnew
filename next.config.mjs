/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    qualities: [60, 70, 75, 85, 90], // Добавили 60 и 70, которые мы вручную прописали в компонентах
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'auracomplex.ru' },
      { protocol: 'https', hostname: '*.auracomplex.ru' },
      { protocol: 'https', hostname: 'auracomplexnew.ru' },
      { protocol: 'https', hostname: '*.auracomplexnew.ru' },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // ЖЕСТКО УКАЗЫВАЕМ СТАНДАРТ СБОРКИ ДЛЯ SWC
  experimental: {
    // Говорим сборщику не пихать лишние полифилы core-js в клиентские чанки
    legacyBrowsers: false,
  },
};

export default nextConfig;
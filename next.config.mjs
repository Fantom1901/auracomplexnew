/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    // Добавляем разрешенные уровни качества для оптимизатора
    qualities: [75, 90],
    // Включаем поддержку современных легковесных форматов
    formats: ['image/avif', 'image/webp'],
    // Оптимальный набор разрешений для генерации srcSet под мобилки и десктопы
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Разрешаем загрузку оптимизированных картинок с твоих доменов
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'auracomplex.ru',
      },
      {
        protocol: 'https',
        hostname: '*.auracomplex.ru',
      },
      {
        protocol: 'https',
        hostname: 'auracomplexnew.ru',
      },
      {
        protocol: 'https',
        hostname: '*.auracomplexnew.ru',
      },
    ],
  },
  compiler: {
    // Автоматически удаляем console.log в продакшене, чтобы не забивать консоль пользователя
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
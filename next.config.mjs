/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/auracomplexnew',

  output: 'export',
  images: {
    unoptimized: true, // Обязательно для статического экспорта
  },
};

export default nextConfig;
import localFont from 'next/font/local';
import TelegramMenuWrapper from '@/components/TelegramMenuWrapper';
import './globals.css';

const atypText = localFont({
  src: [
    { path: './fonts/AtypText-Regular.woff', weight: '400', style: 'normal' },
    { path: './fonts/AtypText-Medium.woff', weight: '500', style: 'normal' },
  ],
  variable: '--font-atyp',
  preload: false,
});

export const metadata = {
  title: 'AURA — Многофункциональный комплекс отдыха на реке Мана',
  description: 'Погрузитесь в атмосферу идеального загородного отдыха. Элитный термальный комплекс, гранд-бани, панорамный ресторан и безупречный комфорт на берегу Маны.',
};

const menuItems = [
  { name: 'Проживание', href: '/accommodation' },
  { name: 'Ресторан', href: '/restaurant' },
  { name: 'Услуги', href: '/services' },
  { name: 'Бани', href: '/banya' },
  { name: 'Прайс', href: '/price' },
];

export default function RootLayout({ children, modal }) {
  return (
    <html lang="ru">
    <body className={`${atypText.variable} antialiased bg-stone-950 relative min-h-screen w-full overflow-x-hidden`}>

    {/* Оборачиваем контент в интерактивный клиентский слой */}
    <TelegramMenuWrapper menuItems={menuItems}>
      {children}
    </TelegramMenuWrapper>

    {/* Слот для модальных окон (Intercepting Routes) */}
    {modal}

    </body>
    </html>
  );
}
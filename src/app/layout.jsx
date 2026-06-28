import localFont from 'next/font/local';
import dynamic from 'next/dynamic';
import { LazyMotion, domAnimation } from 'framer-motion'; // <-- Добавили сюда ленивую загрузку анимаций
import TelegramMenuWrapper from '@/components/ui/TelegramMenuWrapper';
import './globals.css';

const ContactsSection = dynamic(() => import('@/components/shared/ContactsSection'), {
  ssr: true,
  loading: () => <div className="w-full h-[500px] bg-stone-900 animate-pulse" />
});

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  ssr: true,
  loading: () => <div className="w-full h-[400px] bg-[#304340]" />
});

const atypText = localFont({
  src: [
    { path: './fonts/AtypText-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/AtypText-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-atyp',
  preload: true,
  display: 'swap',
});

export const metadata = {
  title: 'Многофункциональный комплекс отдыха на реке Мана',
  description: 'Погрузитесь в атмосферу идеального загородного отдыха. Элитный термальный комплекс, гранд-бани, панорамный ресторан и безупречный комфорт на берегу Маны.',
};

const menuItems = [
  { name: 'Проживание', href: '/accommodation' },
  { name: 'Бани', href: '/banya' },
  { name: 'Ресторан', href: '/restaurant' },
  { name: 'Услуги', href: '/services' },
  { name: 'Прайс', href: '/price' },
];

export default function RootLayout({ children, modal }) {
  return (
    <html lang="ru">
    <body className={`${atypText.variable} antialiased bg-stone-950 relative min-h-screen w-full overflow-x-hidden`}>

    <TelegramMenuWrapper menuItems={menuItems}>
      {/* Обернули всё приложение, чтобы m.div в табах заработал на минималках */}
      <LazyMotion features={domAnimation}>
        <main className="w-full relative z-10 flex flex-col min-h-screen">
          <div className="flex-grow">
            {children}
          </div>
          <ContactsSection />
          <Footer />
        </main>
      </LazyMotion>
    </TelegramMenuWrapper>

    {/* Слот для модальных окон (Intercepting Routes) */}
    {modal}

    </body>
    </html>
  );
}
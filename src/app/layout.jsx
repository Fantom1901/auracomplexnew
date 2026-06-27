import localFont from 'next/font/local';
import TelegramMenuWrapper from '@/components/ui/TelegramMenuWrapper';
import ContactsSection from '@/components/shared/ContactsSection'
import Footer from '@/components/layout/Footer'; // Импортируем футер
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
      <main className="w-full relative z-10 flex flex-col min-h-screen">
        <div className="flex-grow">
          {children}
        </div>
        <ContactsSection />
        <Footer />
      </main>
    </TelegramMenuWrapper>

    {/* Слот для модальных окон (Intercepting Routes) */}
    {modal}

    </body>
    </html>
  );
}
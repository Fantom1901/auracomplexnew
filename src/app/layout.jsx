import localFont from 'next/font/local';
import Header from '@/components/sections/Header';
import './globals.css';

const atypText = localFont({
  src: [
    {
      path: './fonts/AtypText-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/AtypText-Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-atyp',
});

export const metadata = {
  title: 'Элитный банный комплекс AURA',
  description: 'Термальный комплекс премиум-класса',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
    <body className={`${atypText.variable} antialiased`}>
    <Header/>
    {children}
    </body>
    </html>
  );
}
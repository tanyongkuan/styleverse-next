import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import Header from './components/header/Header';
import HeaderContextProvider from './components/header/HeaderContextProvider';

const inter = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Styleverse',
  description: 'Young and bold style for all genders'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col items-center bg-neutral-50">
          <HeaderContextProvider>
            <Header />
          </HeaderContextProvider>
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

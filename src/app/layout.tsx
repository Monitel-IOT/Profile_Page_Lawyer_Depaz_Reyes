import Header from '@/components/header/header';
import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/footer/footer';

export const metadata: Metadata = {
  title: 'Depaz Reyes',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

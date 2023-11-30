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
        <main className="grid m-auto min-h-screen grid-rows-[60px,1fr,60px]">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

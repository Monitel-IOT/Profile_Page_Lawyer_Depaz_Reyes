import Header from '@/components/header/header';
import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/footer/footer';
import IconButton from '@/components/UI/atoms/IconButton/IconButton';

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
        <main>
          <div className="fixed top-[60%] right-0 z-[100] flex flex-col items-end">
            <IconButton
              className="flex bg-whatsapp w-[45px] h-[45px] rounded-tl-xl hover:shadow-3xl no-underline hover:w-[69px] bg-no-repeat hover:rounded-bl-xl bg-[#1BD741] transition-all ease-in-out duration-300"
              href="https://api.whatsapp.com/send?phone=51913812243&text=Hola,%20es%20Jhon%20Henry%20Depaz%20Abogados?"
              target="_blank"
            />
            <IconButton
              className="flex bg-contact w-[45px] h-[45px] bg-[#999] hover:shadow-3xl no-underline hover:w-[69px] bg-no-repeat hover:rounded-bl-xl hover:rounded-tl-xl transition-all ease-in-out duration-300"
              href="/contacto"
            />
            <IconButton
              className="flex bg-facebook w-[45px] h-[45px] rounded-bl-xl bg-[#0084FF] hover:shadow-3xl no-underline hover:w-[69px] bg-no-repeat hover:rounded-tl-xl transition-all ease-in-out duration-300"
              href="https://m.me/Ancashabogados"
              target="_blank"
            />
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

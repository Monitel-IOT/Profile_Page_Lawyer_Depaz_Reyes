import IconButton from '@/components/UI/atoms/IconButton/IconButton';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css';

export const metadata: Metadata = {
  title: 'Depaz Reyes ',
  description:
    'Jhon Henry DePaz Reyes, abogado en Huaraz, Ancash, Perú. Especializado en brindar asesoria juridica integral. Conoce nuestros servicios legales y experiencia en la región.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>
          Jhon Henry Depaz Reyes - Abogado en Huaraz, Ancash, Perú |
          Especialista Legal
        </title>
        <meta
          name="description"
          content="Jhon Henry DePaz Reyes, abogado en Huaraz, Ancash, Perú. Especializado en brindar asesoria juridica integral. Conoce nuestros servicios legales y experiencia en la región."
        />

        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />

        <meta
          name="keywords"
          content="abogado, Jhon Henry Depaz Reyes, especialista legal, Huaraz, Ancash, Perú, Especializado en brindar asesoria juridica integral"
        />
        <meta name="author" content="Jhon Henry Depaz Reyes" />
        <meta name="organization" content="Despacho Legal Depaz" />
        <meta name="language" content="es" />
        <meta name="geo.region" content="PE-ANC" />
        <meta name="geo.placename" content="Huaraz" />
        <link rel="canonical" href="https://depaz-reyes.vercel.app/" />
        <meta
          property="og:title"
          content="Jhon Henry DePaz Reyes - Abogado en Huaraz, Ancash, Perú | Especialista Legal"
        />
        <meta
          property="og:description"
          content="Conoce a Jhon Henry DePaz Reyes, abogado especializado en brindar asesoria juridica integral en Huaraz, Ancash, Perú."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://depaz-reyes.vercel.app/" />
      </Head>
      <body>
        <Header />
        <main>
          <div className="fixed top-[60%] right-0 z-[100] flex flex-col items-end">
            <IconButton
              className="flex bg-whatsapp w-[45px] h-[45px] rounded-tl-xl hover:shadow-3xl no-underline hover:w-[69px] bg-no-repeat hover:rounded-bl-xl bg-[#1BD741] transition-all ease-in-out duration-300"
              href="https://api.whatsapp.com/send?phone=51913812243"
              target="_blank"
            />
            <IconButton
              className="flex bg-contact w-[45px] h-[45px] bg-[#3b5998] hover:shadow-3xl no-underline hover:w-[69px] bg-no-repeat hover:rounded-bl-xl hover:rounded-tl-xl transition-all ease-in-out duration-300"
              href="https://www.facebook.com/jhonhenry.depazreyes"
              target="_blank"
            />
            <IconButton
              className="flex bg-facebook w-[45px] h-[45px] rounded-bl-xl bg-[#0084FF] hover:shadow-3xl no-underline hover:w-[69px] bg-no-repeat hover:rounded-tl-xl transition-all ease-in-out duration-300"
              href="https://m.me/jhonhenry.depazreyes"
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

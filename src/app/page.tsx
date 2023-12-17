import Text from '@/components/UI/atoms/Text/Text';
import Title from '@/components/UI/atoms/Title/Title';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Depaz Reyes | Home',
};

export default function Home() {
  return (
    <article className="bg-black pt-16 md:h-[calc(100vh_-_104px)]">
      <div className="flex flex-col items-center justify-start ">
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:space-x-10 md:pt-8">
          <div className="text-white flex flex-col items-center md:items-end md:flex-1 mb-8 md:mb-0">
            <Title className="font-bold text-[50px] leading-none text-right">
              JHON HENRY
            </Title>
            <Title className="font-bold text-[50px] leading-none text-right">
              DEPAZ REYES
            </Title>
            <Link href="/contacto" passHref>
              <button className="text-white py-2 px-6 rounded-full bg-gradient-to-r from-dorado to-brown-100 shadow-xl mt-4">
                Contáctanos hoy
              </button>
            </Link>
          </div>
          <div className="text-white flex flex-col items-center md:items-start md:flex-1 mt-8 md:mt-0 px-4 md:px-0">
            {' '}
            <Text className="font-bold text-lg">ABOGADO</Text>
            <Text className="text-lg">jhonhdepazr@gmdssac.com</Text>
            <Text className="text-lg">+51 913 812 243</Text>
            <Text className="text-lg">Dirección: Pasaje Daniel Coral Vega</Text>
            <Text className="text-lg">N° 542 2do piso Oficina 200</Text>
            <Text className="text-lg">Huaraz-Ancash</Text>
          </div>
        </div>
        <div className="w-full mt-5" style={{ height: '350px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.85259547525783!2d-77.5301354577974!3d-9.53154103215082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a90d1a861b4c8f%3A0x26e462c21f063106!2s2do%20piso%20Oficina%20200%2C%20Pje.%20Daniel%20Coral%20Vega%20542%2C%20Huaraz%2002001!5e0!3m2!1ses-419!2spe!4v1701735982688!5m2!1ses-419!2spe"
            width="100%"
            height="90%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </article>
  );
}

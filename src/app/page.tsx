import Text from '@/components/UI/atoms/Text/Text';
import Title from '@/components/UI/atoms/Title/Title';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-2 h-screen">
        <div className="col-span-1 flex flex-col items-center justify-center text-white">
          <Title className="font-bold text-[50px]">JHON HENRY</Title>
          <Title className="font-bold text-[50px]">DEPAZ REYES</Title>
          <Link href={'/contacto'}>
            <button className="text-white p-[20px] mt-[30px] rounded-full bg-gradient-to-r from-dorado to-yellow-950 shadow-xl">
              Contactanos hoy
            </button>
          </Link>
        </div>
        <div className="col-span-1 bg-black"></div>
      </div>
    </div>
  );
}

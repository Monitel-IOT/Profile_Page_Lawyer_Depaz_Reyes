import Title from '@/components/UI/atoms/Title/Title';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black pt-16"> {/* Añade padding-top para separar del navbar */}
      {/* Contenedor principal para todo el contenido */}
      <div className="flex flex-col items-center justify-start h-screen">
        {/* Contenedor para el contenido central */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:space-x-10 md:pt-8"> {/* Añade espacio en el eje x para desktop */}
          {/* Contenido del lado izquierdo */}
          <div className="text-white flex flex-col items-center md:items-end md:flex-1 mb-8 md:mb-0">
            <Title className="font-bold text-[50px] leading-none text-right">JHON HENRY</Title>
            <Title className="font-bold text-[50px] leading-none text-right">DEPAZ REYES</Title>
            <Link href="/contacto" passHref>
              <button className="text-white py-2 px-6 rounded-full bg-gradient-to-r from-dorado to-brown-100 shadow-xl mt-4">
                Contáctanos hoy
              </button>
            </Link>
          </div>

          {/* Contenido del lado derecho */}
          <div className="text-white flex flex-col items-center md:items-start md:flex-1 mt-8 md:mt-0 px-4 md:px-0"> {/* Añade padding para móviles */}
            <p className="font-bold text-lg">ABOGADO</p>
            <p className="text-lg">R.C.A.A. 3946</p>
            <p className="text-lg">johndepazr@gmail.com</p>
            <p className="text-lg">913 812 243</p>
          </div>
        </div>

        {/* Mapa de Google Maps */}
        <div className="w-full absolute bottom-0 left-0" style={{ height: '350px', marginTop: '-2rem' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2096.9010047099637!2d-71.97579024047458!3d-13.523373584943919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5e0715c165f%3A0xc3f32263f6450b35!2sHotel%20%C3%91usta%20Pakana!5e0!3m2!1ses-419!2spe!4v1701305751804!5m2!1ses-419!2spe"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

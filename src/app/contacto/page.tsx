import Title from '@/components/UI/atoms/Title/Title';
import React from 'react';
import Text from '@/components/UI/atoms/Text/Text';

function Page() {
  return (
    <div className="flex flex-col md:h-[calc(100vh_-_104px)]">
      <section className="flex justify-center items-center h-[285.5px] bg-black">
        <Title className="text-white font-bold" variant="h2">
          Contactame
        </Title>
      </section>
      <section className=" bg-hero-contact min-h-[562px]">
        <div className="flex justify-center relative bg-[rgba(0,0,0,0.85)] h-[582px] md:h-[562px]">
          <div className="shadow-[0px_1px_18px_0px_rgba(0,0,0,0.15)] h-auto  max-w-[1170px] bg-white mx-[30px] absolute top-[-60px] md:top-[-82px] p-[30px] md:p-[70px]">
            <Title className="mb-[16px] font-bold" variant="h2">
              Póngase en contacto o programe una cita
            </Title>
            <Text className="hidden md:flex md:mb-[16px] md:max-w-[700px]" variant="xs">
              Por favor contáctenos usando la información a continuación. Para
              obtener información adicional visite la página correspondiente en
              nuestro sitio.
            </Text>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-0">
              <div className="pr-[16px]">
                <Text className="text-[#666]" variant="sm">
                  Piso 2, oficina 200
                </Text>
                <Text className="text-[#666]" variant="sm">
                  Pasaje Daniel Coral Vega N 542
                </Text>
                <Text className="text-[#666]" variant="sm">
                  Ancash, Huaraz
                </Text>
                <Text className="text-[#666]" variant="sm">
                  Peru
                </Text>
                <Text className="text-[#666]" variant="sm">
                  +51 913 812 243
                </Text>
                <Text className="text-[#666]" variant="sm">
                  johndepazr@gmail.com
                </Text>
              </div>
              <div className="w-[100%] md:w-[500px] h-[250px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.6844796034345!2d-77.53013119124677!3d-9.531483890544004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a90d1a861b4c8f%3A0x5c5ffb516be07d!2sPje.%20Daniel%20Coral%20Vega%20542%2C%20Huaraz%2002001!5e0!3m2!1ses-419!2spe!4v1701738058241!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;

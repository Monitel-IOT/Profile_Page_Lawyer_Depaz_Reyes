import Title from '@/components/UI/atoms/Title/Title';
import React from 'react';
import Text from '@/components/UI/atoms/Text/Text';

function Page() {
  return (
    <div className="flex flex-col h-[calc(100vh_-_104px)]">
      <section className="flex justify-center items-center h-[285.5px] bg-black">
        <Title className="text-white font-bold" variant="h2">
          Contactame
        </Title>
      </section>
      <section className=" bg-hero-contact min-h-[562px]">
        <div className="flex justify-center relative bg-[rgba(0,0,0,0.85)] h-[562px]">
          <div className="shadow-[0px_1px_18px_0px_rgba(0,0,0,0.15)] h-auto  max-w-[1170px] bg-white mx-[30px] absolute top-[-50px] md:top-[-82px] p-[30px] md:p-[70px]">
            <Title className="mb-[16px] font-bold" variant="h2">
              Póngase en contacto o programe una cita
            </Title>
            <Text className="mb-[16px] max-w-[700px]" variant="xs">
              Por favor contáctenos usando la información a continuación. Para
              obtener información adicional visite la página correspondiente en
              nuestro sitio.
            </Text>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-0">
              <div className="pr-[16px]">
                <Text className="text-[#666]" variant="sm">
                  R.C.A.A. 3946
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.3286780650906!2d-77.5289602291244!3d-9.525495238415857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a90d0e2fd69969%3A0x89950cf26668d6be!2sHuaraz!5e0!3m2!1ses-419!2spe!4v1701544904351!5m2!1ses-419!2spe"
                  // style="border:0;"
                  // allowfullscreen=""
                  width="100%"
                  height="100%"
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
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

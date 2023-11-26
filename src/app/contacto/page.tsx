import Title from '@/components/UI/atoms/Title/Title';
import React from 'react';
import buildsImg from '../../../public/images/contact/builds.png';
import Text from '@/components/UI/atoms/Text/Text';

function Page() {
  return (
    <div className="flex flex-col">
      <section className="flex justify-center items-center h-[285.5px] bg-black">
        <Title className="text-white font-bold" variant="h2">
          Contactame
        </Title>
      </section>
      <section className=" bg-hero-contact min-h-[562px]">
        <div className="flex justify-center relative bg-[rgba(0,0,0,0.85)] h-[562px]">
          <div className="shadow-[0px_1px_18px_0px_rgba(0,0,0,0.15)] h-auto  max-w-[1170px] bg-white mx-[30px] absolute top-[-82px] p-[30px] md:p-[70px]">
            <Title className="mb-[16px] font-bold" variant="h2">
              Póngase en contacto o programe una cita
            </Title>
            <Text className="mb-[16px] max-w-[700px]" variant="xs">
              Por favor contáctenos usando la información a continuación. Para
              obtener información adicional visite la página correspondiente en
              nuestro sitio.
            </Text>
            <Text className="text-[#666]" variant="sm">
              131 Dartmouth Street
            </Text>
            <Text className="text-[#666]" variant="sm">
              Boston, Massachusetts 012
            </Text>
            <Text className="text-[#666]" variant="sm">
              United States
            </Text>
            <Text className="text-[#666]" variant="sm">
              +1 617 572 2000
            </Text>
            <Text className="text-[#666]" variant="sm">
              support@lawsight.com
            </Text>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;

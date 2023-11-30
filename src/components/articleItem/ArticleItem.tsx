import React from 'react';
import Link from 'next/link';
import Title from '@/components/UI/atoms/Title/Title';
import Text from '@/components/UI/atoms/Text/Text';


interface ArticleProps {
  id: string;
  title: string;
  imageUrl: string;
  content: string;
  createdAt: string;
}

const ArticleItem = ({ id, title, imageUrl, content, createdAt }: ArticleProps) => {
  const maxCharacters = 200;

  // Trunca el contenido si es más largo que el número máximo de caracteres
  const truncatedContent = content.length > maxCharacters
    ? content.substring(0, maxCharacters) + "..."
    : content;

  return (
    <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-lg mb-5 bg-white">
      <div className="md:flex-shrink-0">
        <img src={imageUrl} alt={title} className="md:w-52 md:h-52 w-full object-cover" />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <Title className="text-lg md:text-[25px] font-bold">
            {title}
          </Title>
          <p className="text-sm text-gray-600 mb-2">{createdAt}</p>
          <Text className="mb-[16px] max-w-[700px]" variant="sm">
            {truncatedContent}
          </Text>
        </div>
        <Link href={`/articulos/${id}`} passHref>
          <span className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer">Leer más →</span>
        </Link>
      </div>
    </div>
  );
};

export default ArticleItem;
import React from 'react';
import Title from '@/components/UI/atoms/Title/Title';
import Text from '@/components/UI/atoms/Text/Text';
import { ArticleData } from '@/interface/ArticleData';

const formatDate = (dateString : string) => {
  if (!dateString) {
    return 'Fecha no disponible';
  }

  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: '2-digit',
    minute: '2-digit'
  });
};


const Article = ({ title, imageUrl, body, createdAt }: ArticleData) => {
  const formattedDate = createdAt ? formatDate(createdAt) : 'Fecha no disponible';
  return (
    <div className="flex flex-col items-center py-8">
      <article className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-8">
          <Title className="text-[19px] md:text-[36px] font-bold">{title}</Title>
          <p className="text-sm text-gray-600">{formattedDate}</p>
          <img src={imageUrl} alt={title} className="w-full h-auto my-4 rounded" />
          <Text className="mb-[16px] max-w-[700px] whitespace-pre-line" variant="sm">
            {body}
          </Text>
      </article>
    </div>
  );
};

export default Article;

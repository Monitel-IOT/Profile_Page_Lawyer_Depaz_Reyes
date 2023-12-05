import React from 'react';
import Title from '@/components/UI/atoms/Title/Title';
import Text from '@/components/UI/atoms/Text/Text';

interface ArticleProps {
  id: string;
  title: string;
  imageUrl: string;
  summary: string;
  content: string;
  createdAt: string;
}

const Article = ({ title, imageUrl, content, createdAt }: ArticleProps) => {
  return (
    <div className="flex flex-col items-center py-8">
      <article className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-8">
          <Title className="text-[19px] md:text-[36px] font-bold">{title}</Title>
          <p className="text-sm text-gray-600">{createdAt}</p>
          <img src={imageUrl} alt={title} className="w-full h-auto my-4 rounded" />
          <Text className="mb-[16px] max-w-[700px]" variant="sm">
            {content}
          </Text>
      </article>
    </div>
  );
};

export default Article;

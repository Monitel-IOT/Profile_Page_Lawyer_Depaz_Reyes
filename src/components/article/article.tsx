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
    <article className="max-w-3xl mx-auto p-8">
        <Title className="text-[19px] md:text-[36px] font-bold">{title}</Title>
        <p className="text-sm text-gray-600">{createdAt}</p>
        <img src={imageUrl} alt={title} className="w-full h-auto my-4" />
        <Text className="mb-[16px] max-w-[700px]" variant="sm">
          {content}
        </Text>
    </article>
  );
};

export default Article;
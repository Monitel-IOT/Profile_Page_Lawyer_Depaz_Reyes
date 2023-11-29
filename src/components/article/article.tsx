import React from 'react';

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
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm text-gray-600">{createdAt}</p>
        <img src={imageUrl} alt={title} className="w-full h-auto my-4" />
        <p>{content}</p>
    </article>
  );
};

export default Article;
import React from 'react';
import Link from 'next/link';

interface ArticleProps {
  id: string;
  title: string;
  imageUrl: string;
  summary: string;
  createdAt: string;
}

const ArticleItem = ({ id, title, imageUrl, summary, createdAt }: ArticleProps) => {
  return (
    <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-lg mb-5 bg-white">
      <div className="md:flex-shrink-0">
        <img src={imageUrl} alt={title} className="md:w-52 md:h-52 w-full object-cover" />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm text-gray-600 mb-2">{createdAt}</p>
          <p className="mb-4">{summary}</p>
        </div>
        <Link href={`/articulos/${id}`} passHref>
          <span className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer">Read more →</span>
        </Link>
      </div>
    </div>
  );
};

export default ArticleItem;
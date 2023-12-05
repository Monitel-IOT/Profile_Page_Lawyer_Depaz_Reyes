"use client"

import React, { useEffect, useState } from 'react';
import Article from '../../../components/article/article';
import { ArticleData } from '@/interface/ArticleData';
import Spinner from '@/components/Spinner/Spinner';

const ArticlePage = ({ params }: { params: { id: string } }) => { // Asume que 'id' se pasa como prop

  const { id } = params;
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return; // Asegúrate de que el id esté presente

    const fetchArticle = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/articles/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticle(data.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]); // Dependencia de id para que el efecto se ejecute cuando el id cambie

  if (isLoading) {
    return <Spinner />;
  }

  if (!article) {
    return <p>Artículo no encontrado</p>;
  }

  return (
    <div className='bg-black'>
      <Article key={article.id} {...article} />
    </div>
  );
};

export default ArticlePage;

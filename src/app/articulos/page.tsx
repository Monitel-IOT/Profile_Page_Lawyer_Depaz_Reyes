"use client"

import React, { useEffect, useState } from 'react';
import ArticleItem from '../../components/articleItem/ArticleItem';
import { ArticleData } from '@/interface/ArticleData'; // Importa la interfaz

const ArticleList = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]); // Usa ArticleData para el estado
  const [isLoading, setIsLoading] = useState(false); // Estado para el indicador de carga

  useEffect(() => {
    // Función asíncrona para cargar los artículos desde la API
    const fetchArticles = async () => {
      setIsLoading(true); // Comienza a mostrar el indicador de carga
      try {
        const response = await fetch('/api/articles');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.data); // Actualiza el estado con los artículos cargados
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false); // Oculta el indicador de carga
      }
    };

    fetchArticles(); // Llama a la función para cargar los artículos
  }, []); // El array vacío asegura que el efecto se ejecute una sola vez al montar el componente

  return (
    <div className='bg-black'>
      <main className="max-w-5xl mx-auto p-10">
        {isLoading ? (
          <p>Cargando artículos...</p> // Muestra un mensaje o spinner de carga
        ) : (
          articles.map(article => (
            <ArticleItem key={article.id} {...article} />
          ))
        )}
      </main>
    </div>
  );
};

export default ArticleList;
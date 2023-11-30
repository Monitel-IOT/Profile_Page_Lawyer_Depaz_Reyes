'use client';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import ArticleFormModal from '@/components/UI/pages/admin/ArticleFormModal/ArticleFormModal';
import { ArticleData } from '@/interface/ArticleData';
import TableArticles from '@/components/UI/pages/admin/TableArticles/TableArticles';

const Admin: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [article, setArticle] = useState<ArticleData | undefined>();
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // ///////////// Create /////////////////////////////////////////////

  const handleCreateClick = () => {
    setArticle({
      title: '',
      imageUrl: '',
      body: '',
    });
    handleOpenModal();
  };

  const handleCreateArticle = async (articleData: ArticleData) => {
    try {
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });
      const data = await response.json();
      setArticles([...articles, data.data]);
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  // ///////////// Update /////////////////////////////////////////////

  const handleUpdateClick = (id: string) => {
    const article = articles.find((article) => article.id === id);
    setIsUpdate(true);
    setArticle(article);
    handleOpenModal();
  };

  const handleUpdateArticle = async (articleData: ArticleData) => {
    try {
      const response = await fetch(`/api/articles/${articleData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: articleData.title,
          imageUrl: articleData.imageUrl,
          body: articleData.body,
        }),
      });

      const data = await response.json();
      const updatedArticles = articles.map((article) =>
        article.id === data.data.id ? data.data : article
      );
      setArticles(updatedArticles);
    } catch (error) {
      console.error('Error updating article:', error);
    }
    handleCloseModal();
    setIsUpdate(false);
    setArticle({
      title: '',
      imageUrl: '',
      body: '',
    });
  };

  const handleDeleteClick = async (id: string) => {
    try {
      const response = await fetch(`/api/articles/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      });
      const { data } = await response.json();
      const updatedArticles = articles.filter(
        (article) => article.id !== data.id
      );
      setArticles(updatedArticles);
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/articles');
        const data = await response.json();
        setArticles(data.data);
        console.log('Articles fetched:', data.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    })();
  }, []);

  return (
    <div className=" bg-black">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">
        Manejo de Artículos
      </h1>
      <div className="flex justify-center">
        <button
          onClick={handleCreateClick}
          className="text-white p-[20px] mt-[30px] font-bold rounded-full bg-gradient-to-r from-dorado to-yellow-950 shadow-xl"
        >
          Crear Articulo
        </button>
      </div>
      <ArticleFormModal
        isOpen={isModalOpen}
        article={article}
        onClose={handleCloseModal}
        isUpdate={isUpdate}
        onCreate={handleCreateArticle}
        onUpdate={handleUpdateArticle}
        setArticle={setArticle}
        setIsModalOpen={setIsModalOpen}
      />
      <TableArticles
        articles={articles}
        handleUpdateClick={handleUpdateClick}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default Admin;

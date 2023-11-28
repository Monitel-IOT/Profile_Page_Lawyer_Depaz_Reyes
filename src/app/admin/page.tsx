'use client';
import React, { useState } from 'react';
import ArticleFormModal from '@/components/UI/pages/admin/ArticleFormModal/ArticleFormModal';
import { ArticleData } from '@/interface/ArticleData';

const Admin: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedArticle, setSubmittedArticle] = useState<ArticleData | null>(
    null
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitArticle = (articleData: ArticleData) => {
    setSubmittedArticle(articleData);
    // Aquí puedes enviar los datos del artículo a tu backend
    console.log('Article data:', articleData);
    // Lógica para enviar los datos a tu API o guardarlos
  };

  return (
    <div className=" bg-black">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">
        Manejo de Artículos
      </h1>
      <div className="flex justify-center">
        <button
          onClick={handleOpenModal}
          className="text-white p-[20px] mt-[30px] rounded-full bg-gradient-to-r from-dorado to-brown-100 shadow-xl"
        >
          Crear Articulo
        </button>
      </div>
      <ArticleFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitArticle}
      />
    </div>
  );
};

export default Admin;

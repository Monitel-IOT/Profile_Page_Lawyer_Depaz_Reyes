'use client';
import { ArticleData } from '@/interface/ArticleData';
import React, { useState } from 'react';
import Modal from 'react-modal';

interface ArticleFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (articleData: ArticleData) => void;
}

const ArticleFormModal: React.FC<ArticleFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [articleData, setArticleData] = useState<ArticleData>({
    title: '',
    imageUrl: '',
    body: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setArticleData({ ...articleData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(articleData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      className="modal"
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-96 mx-auto mt-10">
        <h2 className="text-xl font-bold mb-4">Crear un Articulo</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-1">
              Titulo:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={articleData.title}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block mb-1">
              Imagen URL:
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={articleData.imageUrl}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block mb-1">
              Contenido:
            </label>
            <textarea
              id="body"
              name="body"
              value={articleData.body}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 w-full h-32 resize-none"
            />
          </div>
          <button
            type="submit"
            className="text-black p-[20px] mt-[30px] rounded-full bg-gradient-to-r from-dorado to-brown-100 shadow-xl"
          >
            Crear
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ArticleFormModal;

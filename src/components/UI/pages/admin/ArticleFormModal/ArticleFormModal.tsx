'use client';
import { ArticleData } from '@/interface/ArticleData';
import React, { MouseEventHandler } from 'react';
import Modal from 'react-modal';

interface ArticleFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  isUpdate: boolean;
  onCreate: (articleData: ArticleData) => void;
  onUpdate: (articleData: ArticleData) => void;
  article: ArticleData | undefined;
  setArticle: (article: ArticleData) => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

const ArticleFormModal: React.FC<ArticleFormModalProps> = ({
  isOpen,
  onClose,
  isUpdate,
  onCreate,
  onUpdate,
  article,
  setArticle,
  setIsModalOpen,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isUpdate) {
      onUpdate(article!);
    } else {
      onCreate(article!);
    }
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
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Crear un Articulo</h2>
          <button className="text-2xl" onClick={() => setIsModalOpen(false)}>
            x
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-1">
              Titulo:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={article?.title}
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
              value={article?.imageUrl}
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
              value={article?.body}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 w-full h-32 resize-none"
            />
          </div>
          <button
            type="submit"
            className="text-white font-bold p-[20px] mt-[30px] rounded-full bg-gradient-to-r from-dorado to-yellow-950 shadow-xl"
          >
            {isUpdate ? 'Actualizar' : 'Crear'}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ArticleFormModal;

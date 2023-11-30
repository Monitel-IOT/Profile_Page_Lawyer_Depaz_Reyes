import { ArticleData } from '@/interface/ArticleData';
import React from 'react';

type Props = {
  articles: ArticleData[];
  handleUpdateClick: (id: string) => void;
  handleDeleteClick: (id: string) => void;
};

const TableArticles = ({
  articles,
  handleUpdateClick,
  handleDeleteClick,
}: Props) => {
  return (
    <div className="flex flex-col text-white m-10">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light  border border-neutral-500">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Titulo
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Contenido
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article, index) => (
                  <tr
                    className="border-b dark:border-neutral-500"
                    key={`article-key-${index}`}
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {index}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {article.title}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {article.body}
                    </td>
                    <td>
                      <div className="whitespace-nowrap px-6 py-4 space-x-2">
                        <a
                          onClick={() => handleUpdateClick(article.id!)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Actualizar
                        </a>
                        <a
                          onClick={() => handleDeleteClick(article.id!)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Eliminar
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableArticles;

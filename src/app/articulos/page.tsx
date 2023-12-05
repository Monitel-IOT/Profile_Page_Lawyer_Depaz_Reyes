"use client"

import React, { useEffect, useState } from 'react';
import ArticleItem from '../../components/articleItem/ArticleItem';


const mockArticles = [
  {
    id: '1',
    title: 'El primer artículo',
    imageUrl: 'https://oficinascentenario.pe/wp-content/uploads/2021/06/DSC02889-1024x683.jpg',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content he making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsu will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    summary: 'ste es el resumen del primer  ste es el resumen del primer  Este es el resumen del primer artículo... Este es el resumen del primer artículo... Este es el resumen del primer artículo... Este es el resumen del primer artículo...',
    createdAt: 'Nov 13, 2014' // Formato de fecha como string
  },
  {
    id: '2',
    title: 'El segundo artículo',
    imageUrl: 'https://www.ofitipo.com/modules/dbblog/views/img/post/tendencias-oficinas-2023.png',
    content: 'Este es el contenido del segundo artículo...',
    summary: 'Este es el resumen del primer artículo...',
    createdAt: 'Nov 13, 2014' // Formato de fecha como string
  },
  {
    id: '3',
    title: '3er artículo',
    imageUrl: 'https://www.ofitipo.com/modules/dbblog/views/img/post/tendencias-oficinas-2023.png',
    content: 'Este es el contenido del 3 artículo...',
    summary: 'Este es el resumen del primer artículo...',
    createdAt: 'Nov 13, 2014' // Formato de fecha como string
  },
  // ...más artículos
];


const ArticleList = () => {
  //const [articles, setArticles] = useState<Article[]>([]);

  //useEffect(() => {
  //  // Aquí haces tu llamada a la API o fetch de tus datos
  //  fetch('/api/articles')
  //    .then(response => response.json())
  //    .then(data => setArticles(data))
  //    .catch(error => console.error('Error fetching articles:', error));
  //}, []);

  const articles = mockArticles;

  return (
    <div className='bg-black'>
      {/* ... */}
      <main className="max-w-5xl mx-auto p-10 max-w-2xl mx-auto p-12">
        {articles.map(article => (
          <ArticleItem key={article.id} {...article} />
        ))}
      </main>
      {/* ... */}
    </div>
  );
};

export default ArticleList;
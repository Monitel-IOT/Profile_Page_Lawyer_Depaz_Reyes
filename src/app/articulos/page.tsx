import React from 'react';
import { Metadata } from 'next';
import ArticlesList from '@/components/UI/templates/ArticlesList/ArticlesList';

export const metadata: Metadata = {
  title: 'Depaz Reyes | Artículos',
};

const ArticleList = () => {
  return <ArticlesList />;
};

export default ArticleList;

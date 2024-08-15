// components/NewsArticle.tsx
import React from "react";

interface ArticleProps {
  article: {
    title: string;
    date: string;
    category: string;
    content: string;
    additionalContent: string;
  };
}

const NewsArticle: React.FC<ArticleProps> = ({ article }) => {
  return (
    <article className="mb-8">
      <h1 className="mb-2 text-3xl font-bold text-blue-600">{article.title}</h1>
      <div className="mb-4 text-sm text-gray-600">
        {article.date} | {article.category}
      </div>
      <div className="mb-4 rounded bg-blue-100 p-4">
        <p>{article.content}</p>
      </div>
      <p>{article.additionalContent}</p>
    </article>
  );
};

export default NewsArticle;
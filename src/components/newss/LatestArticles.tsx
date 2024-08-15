import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: any;
  };
  date: string;
  image: any;
}

interface LatestArticlesProps {
  articles: Article[];
}

const LatestArticles: React.FC<LatestArticlesProps> = ({ articles }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          <span className="text-blue-500">Latest</span> Articles
        </h2>
        <Link
          href="/more-articles"
          className="text-gray-600 hover:text-gray-800"
        >
          Load more <span>&gt;</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.id}
            className="overflow-hidden rounded-lg border border-gray-200"
          >
            <div className="relative h-48">
              <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={24}
                  height={24}
                  className="mr-2 rounded-full"
                />
                <span className="text-sm text-gray-600">
                  {article.author.name}
                </span>
                <span className="ml-2 text-sm text-gray-400">
                  | {article.date}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{article.title}</h3>
              <p className="mb-4 text-sm text-gray-600">{article.excerpt}</p>
              <Link
                href={`/article/${article.id}`}
                className="text-blue-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
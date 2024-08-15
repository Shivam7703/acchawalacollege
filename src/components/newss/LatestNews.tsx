import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  author: string;
  authorImage: any;
  timeAgo: string;
  content: string;
  image: any;
}

const LatestNews: React.FC<{ news: NewsItem }> = ({ news }) => {
  return (
    <div className="mx-auto max-w-[1300px] p-3">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="border-spacing-8 border-b-2 border-b-blue-900 px-3 text-3xl font-bold">
          <span className=" text-blue-500">Latest</span> News
        </h2>
        <Link href="/more-news" className="text-gray-600 hover:text-gray-800">
          Load more <span className="ml-1">&gt;</span>
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-64 md:h-auto md:w-1/2">
            <Image
              src={news.image}
              alt={news.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6 md:w-1/2">
            <div className="mb-4 flex items-center">
              <Image
                src={news.authorImage}
                alt={news.author}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold">{news.author}</p>
                <p className="text-sm text-gray-600">{news.timeAgo}</p>
              </div>
            </div>
            <h3 className="mb-3 text-2xl font-bold">{news.title}</h3>
            <p className="mb-4 text-gray-700">{news.content}</p>
            <Link
              href={`/news/${news.id}`}
              className="inline-block text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
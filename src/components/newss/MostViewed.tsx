import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  author: string;
  authorImage: string;
  date: string;
  content?: string;
  image: string;
}

interface MostViewedProps {
  news: NewsItem[];
}

const MostViewed: React.FC<MostViewedProps> = ({ news }) => {
  return (
    <div className="mx-auto mt-5 max-w-[1300px] p-3">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="border-b-2 border-b-blue-800 px-4 text-2xl font-bold">
          <span className="text-blue-500">Most</span> Viewed
        </h2>
        <Link href="/more-news" className="text-gray-600 hover:text-gray-800">
          Load more <span className="ml-1">&gt;</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="relative h-64 w-full">
            <Image
              src={news[0].image}
              alt={news[0].title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-700">{news[0].content}</p>
            <Link
              href={`/news/${news[0].id}`}
              className="text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          {news.slice(1, 4).map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <div className="relative h-16 w-16 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <div className="flex items-center text-xs text-gray-500">
                  <Image
                    src={item.authorImage}
                    alt={item.author}
                    width={16}
                    height={16}
                    className="mr-2 rounded-full"
                  />
                  <span>{item.author}</span>
                  <span className="mx-1">|</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostViewed;
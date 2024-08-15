"use client";
import BlogCard from "@/components/cards/BlogCard";
import { useState } from "react";

export default function BlogAndOthersFilterSection({ data }: any) {
  const [activeCategory, setActiveCategory] = useState("articles");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section className="mx-auto my-16 w-full max-w-[1440px] p-5">
      <div className="mb-10 flex flex-wrap justify-center gap-5">
        {/* Filter Titles  */}
        {data?.filterBy.map((item: any) => (
          <h1
            className={`cursor-pointer px-3 transition-all duration-200  ${
              activeCategory === item?.category
                ? "-translate-y-1 border-b-2 border-black pb-1 text-black"
                : "pb-0 text-zinc-500"
            }`}
            key={item.id}
            onClick={() => handleCategoryClick(item.category)}
          >
            {item?.category.toUpperCase()}
          </h1>
        ))}
      </div>
      <div className="mt-5 flex overflow-x-auto gap-5 w-full md:justify-center">
        {data.cardsContent
          .filter(
            (card: any) =>
              activeCategory === "articles" ||
              card.category.includes(activeCategory),
          )
          .slice(0, 3)
          .map((card: any) => (
            <BlogCard key={card.id} card={card} />
          ))}
      </div>
    </section>
  );
}

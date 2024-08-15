import Image from "next/image";
import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";

export default function BlogCard({ card }: any) {
  return (
    <div
      key={card.id}
      className="max-w-sm rounded overflow-hidden shadow-lg border-b-2 border-blue-950 min-w-80 mb-5"
    >
      <div className="relative w-full">
        <Image
          className="w-full h-[200px] object-cover"
          src={card.img}
          alt={card.title}
        />
        <p className="absolute top-2 left-2 bg-white/25 rounded px-3 py-1 text-sm text-white mr-2">
          {card.tag}
        </p>
      </div>
      <div className="p-5 pb-2">
        <div className="flex justify-between items-center text-sm flex-wrap">
          <div className="flex gap-2 items-center">
            <Image
              src={card.author.avatar}
              alt="avatar"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="font-bold">{card.author.name}</span>
          </div>
          <span className="text-zinc-500 text-nowrap">{card.date}</span>
          <span className="text-zinc-500 flex gap-1 flex-nowrap">
          <IoShareSocialOutline className="mt-0.5" />{card.shares}</span>
        </div>

          <h1 className="font-bold text-xl mb-5">{card.title}</h1>
          <p className="text-gray-700 text-base line-clamp-4 mb-10">
            {card.description}
          </p>
          <button className="w-full text-center font-semibold text-blue-950">
            {card.button.label}
          </button>
      </div>
    </div>
  );
}

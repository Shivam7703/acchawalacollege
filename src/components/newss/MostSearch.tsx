"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const searchItems = [
  "NEET Exams",
  "UPSC Exams",
  "IIT JEE Advanced / Mains",
  "LAW Exams",
  "IELTS Abroad Exams",
  "CAT Exams",
  "NEET Exams",
  "UPSC Exams",
  "IIT JEE Advanced / Mains",
  "LAW Exams",
  "IELTS Abroad Exams",
  "CAT Exams",
];

const MostSearch: React.FC = () => {
 

  return (
    <div className="mx-auto max-w-[1300px] p-4 grid grid-cols-12 gap-2">
    <h2 className="md:col-span-2 col-span-12 mb-2 text-lg font-semibold">Most Searched Items:</h2>
    <div className="md:col-span-10 col-span-12 flex flex-nowrap gap-2 w-full overflow-auto">
      {searchItems.map((item, index) => (
        <span
          key={index}
          className="cursor-pointer rounded-full border border-gray-300 bg-blue-100 px-4 min-w-max py-1 mb-2 text-sm"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
  );
};

export default MostSearch;
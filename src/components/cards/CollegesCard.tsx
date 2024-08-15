"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function CollegesCard({ data }: any) {
  const uniqueId = "college123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <>
      <Swiper
        {...swiperOptions}
        className={`mySwiper w-[95%] max-w-fit px-5 ${uniqueId}`}
      >
        {data?.map((college: any, index: number) => (
          <SwiperSlide
            key={index}
            className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-2xl"
          >
            <CollegesCardContent college={college} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Add navigation buttons */}
      <div className={`${uniqueId}-next swiper-button-next`}></div>
      <div className={`${uniqueId}-prev swiper-button-prev`}></div>
    </>
  );
}

export const CollegesCardContent = function CollegesCard({ college }: any) {
  return (
    <React.Fragment>
      <div className="relative w-full">
      {college?.img && <Image
          src={college?.img}
          alt={college?.name}
          width={800}
          height={800}
          className="w-full h-[200px] object-cover rounded-t-xl"
        />}
        <div className="absolute right-4 top-4 rounded-lg bg-white p-5">
          {college?.icon}
        </div>
      </div>
      <div className="flex-center w-full bg-blue-200 p-2 font-semibold text-blue-500">
        {college.title}
      </div>
      <div className="p-5">
        <p className="font-semibold text-blue-950">{college?.text1}</p>
        <h4 className="mb-5 text-2xl font-medium md:mb-8">
          {college?.stream} from {college?.collegeName}
        </h4>
        <p className="icon-text">
          <span>{college?.degreeType?.icon}</span>
          {college.degreeType.name}
        </p>
        <p className="icon-text">
          <span>{college.duration.icon}</span> {college.duration.name}
        </p>
        <p className="icon-text">
          {college.noOfSpecializations.icon && (
            <span>{college.noOfSpecializations.icon}</span>
          )}{" "}
          {college.noOfSpecializations.no} Specializations
        </p>
        <div className="my-5 flex justify-between gap-4 max-md:flex-col md:my-8 ">
          <button className="cardButton1">
            {college.button1.icon && <span>{college.button1.icon}</span>}{" "}
            {college.button1.text}
          </button>
          <button className="cardButton2">
            {college.button2.icon && <span>{college.button2.icon}</span>}{" "}
            {college.button2.text}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

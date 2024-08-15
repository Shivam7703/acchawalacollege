"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import { LuDot } from "react-icons/lu";

export default function AbroadCollegesCard({ data }: any) {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
      1200: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <>
      <Swiper {...swiperOptions} className="mySwiper w-[95%] max-w-fit px-5">
        {data?.slice(0, 4).map((college: any, index: number) => (
          <SwiperSlide
            key={index}
            className="mb-12 flex w-full flex-col overflow-hidden rounded-xl border"
          >
            <CollegesCardContent college={college} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Add navigation buttons */}
      <div className="swiper-button-next mr-2"></div>
      <div className="swiper-button-prev ml-2"></div>
    </>
  );
}

export const CollegesCardContent = function DiscoverTopCollegesCard({
  college,
}: any) {
  // Helper function to format the location
  const formatLocation = (location: any) => {
    const parts = [location?.city, location?.state, location?.country].filter(
      Boolean,
    );
    return parts.join(", ");
  };

  // Helper function to map rating to descriptive text
  const getRatingText = (rating: number) => {
    if (rating >= 4.5) return "Excellent";
    if (rating >= 3.5) return "Good";
    if (rating >= 2.5) return "Average";
    return "Below Average";
  };

  return (
    <React.Fragment>
      <Image
        src={college?.bgImage}
        alt={college?.collegeName}
        width={800}
        height={800}
        className="h-[200px] w-full rounded-xl  object-cover md:h-[260px]"
      />
      <h2 className="my-2 text-xl font-semibold">{college?.collegeName}</h2>
      <p className="mb-2 text-base">{formatLocation(college?.location)}</p>
      <div className="flex max-sm:flex-col flex-wrap sm:justify-between text-sm">
        <p>
          <span className="mr-1 rounded bg-blue-500 px-1 py-0.5 text-center text-white">
            {college?.reviews?.overallRating}
          </span>
          <span className=" ">{getRatingText(college?.reviews?.overallRating)}</span>
        </p>
        <p className="flex items-center">
          <LuDot className="text-2xl text-blue-950" />
          {college?.reviews?.totalReviews} reviews
        </p>
        <p className="flex items-center">
          <LuDot className="text-2xl text-blue-950" />
          {college?.distanceFromAirport} km away
        </p>
      </div>
      <div className="mt-2 text-semibold text-orange-500">
        {college?.avgFeePerYear}
      </div>
    </React.Fragment>
  );
};

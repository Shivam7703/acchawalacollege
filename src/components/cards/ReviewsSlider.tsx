"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
export default function ReviewsSlider({ reviews }: any) {
  const uniqueId = "review1234";
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <>
      <Swiper
        {...swiperOptions}
        className={`w-full max-w-fit px-5 ${uniqueId}`}
      >
        {reviews?.map(
          (h: any, index: number) =>
            h?.title && (
              <SwiperSlide
                key={index}
                className="flex-center w-full flex-col gap-y-3 overflow-hidden rounded-md border border-zinc-300 py-10 text-center"
              >
                <ReviewsSliderContent h={h} />
              </SwiperSlide>
            ),
        )}
      </Swiper>
      {/* Add navigation buttons */}
      <div className={`${uniqueId}-next swiper-button-next`}></div>
      <div className={`${uniqueId}-prev swiper-button-prev`}></div>
    </>
  );
}

const StarRating = ({ rating = 3.5, totalStars = 5 }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      const filled = i <= Math.floor(rating); // Full stars for integer part
      const partial = i === Math.ceil(rating); // Partial star for decimal part
      stars.push(
        <span key={i} className={`rounded-sm bg-blue-950 p-1 text-2xl`}>
          {filled ? <FaStar /> : partial ? <FaStarHalfAlt /> : <CiStar />}
        </span>,
      );
    }
    return stars;
  };

  return <div className="flex-center gap-x-1 text-white">{renderStars()}</div>;
};

function ReviewsSliderContent({ h }: any) {
  return (
    <React.Fragment>
      <div className="mx-auto w-max pb-2 text-4xl text-blue-500">{h.icon}</div>
      <h6 className="font-medium">{h?.title}</h6>
      <StarRating rating={h?.rating} totalStars={5} />
      <p className="flex-center gap-x-1">
        {h?.rating} <FaStar className="mb-[1px]" />
      </p>
      {h?.basedOn && (
        <p className="text-xs">
          <span className="text-zinc-500">Based on </span>
          <span className="font-medium underline">{h?.basedOn} reviews</span>
        </p>
      )}
    </React.Fragment>
  );
}

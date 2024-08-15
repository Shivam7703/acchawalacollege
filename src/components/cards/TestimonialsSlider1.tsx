"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import {  FaStar, FaStarHalfAlt } from "react-icons/fa";
import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

export default function TestimonialsSlider1({ testimonials }: any) {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
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
    },
  };

  return (
    <>
      <Swiper {...swiperOptions} className="mySwiper w-[95%] max-w-full px-5">
        {testimonials?.map((testimonial: any, index: number) => (
          <SwiperSlide
            key={index}
            className="flex-center mb-12 w-full flex-col rounded-2xl border border-blue-500 bg-white p-8 text-center text-black"
          >
            <TestimonialsContent testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Add navigation buttons */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </>
  );
}

function TestimonialsContent({ testimonial }: any) {
  return (
    <React.Fragment>
      <div className="mb-5 flex w-full justify-center">
        <Image
          src={testimonial?.avatar}
          alt="teacher"
          width={1000}
          className="h-40 w-40 rounded-full object-cover"
        />
      </div>
      <h6 className="text-xl font-medium">{testimonial?.name}</h6>
      <p className="mb-3">{testimonial?.collegeName}</p>
      <StarRating rating={testimonial?.rating} totalStars={5} />
      <p className="mb-5 line-clamp-4 text-xs">{testimonial?.comment}</p>
      {testimonial?.button && (
        <div className="flex justify-center">
          <Link href={testimonial?.button.href || "#"}>
            <button className="flex items-center gap-x-2 rounded-lg bg-blue-500 p-3 text-xs text-white">
              <FaRegCirclePlay /> <p>{testimonial?.button.text}</p>
            </button>
          </Link>
        </div>
      )}
    </React.Fragment>
  );
}


const StarRating = ({ rating = 3.5, totalStars = 5 }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      const filled = i <= Math.floor(rating); // Full stars for integer part
      const partial = i === Math.ceil(rating); // Partial star for decimal part
      stars.push(
        <span key={i} className={`rounded-sm  p-1 text-2xl`}>
          {filled ? <FaStar /> : partial ? <FaStarHalfAlt /> : <CiStar />}
        </span>,
      );
    }
    return stars;
  };

  return <div className="flex-center gap-x-1 text-orange-600 mb-3">{renderStars()}</div>;
};
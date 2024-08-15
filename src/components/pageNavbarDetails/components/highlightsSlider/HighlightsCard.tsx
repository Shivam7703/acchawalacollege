"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import Image from "next/image";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaChalkboardTeacher, FaTransgenderAlt } from "react-icons/fa";
import { BiSolidInstitution } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";

export default function HighlightsCard({ data }: any) {
  const swiperOptions = {
    slidesPerView: 2,
    spaceBetween: 20,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Autoplay, Navigation],
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };

  const HighlightsCards = [
    {
      icon: <RiMoneyRupeeCircleFill />,
      text1: "Avg. Fee/ Year",
      text2: data?.avgFeePerYear,
    },
    {
      icon: <FaTransgenderAlt />,
      text1: "Gender Accepted",
      text2: data?.genderAccepted,
    },
    {
      icon: <BiSolidInstitution />,
      text1: "Institute",
      text2: data?.collegeType,
    },
    {
      icon: <MdCastForEducation />,
      text1: "Study Mode",
      text2: data?.studyMode,
    },
    {
      icon: <HiBuildingOffice2 />,
      text1: "Established Year",
      text2: data?.estYear,
    },
    {
      icon: <FaChalkboardTeacher />,
      text1: "No. of Faculty",
      text2: data?.noOfFaculty,
    },
  ];

  return (
    <>
      <Swiper {...swiperOptions} className="w-full max-w-fit px-5">
        {HighlightsCards?.map(
          (h: any, index: number) =>
            h?.text2 && (
              <SwiperSlide
                key={index}
                className="flex-center w-full flex-col overflow-hidden rounded-md bg-sky-100 py-10 text-center my-5"
              >
                <div className="mx-auto w-max pb-2 text-4xl text-blue-500">{h.icon}</div>
                <p className="text-sm text-zinc-500">{h.text1}</p>
                <p className="text-lg font-medium">{h?.text2}</p>
              </SwiperSlide>
            ),
        )}
      </Swiper>
      {/* Add navigation buttons */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </>
  );
}

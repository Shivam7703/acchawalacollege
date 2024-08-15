"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { IoCalendarOutline } from "react-icons/io5";
import { formatDate } from "@/utils/formatDate";
import { MdAutoGraph } from "react-icons/md";
import { PiStudent } from "react-icons/pi";

export default function UpcomingExamsCard({ data }: any) {
  const uniqueId = "exams123";

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
      <Swiper {...swiperOptions} className={`mySwiper w-[95%] max-w-fit px-5 ${uniqueId}`}>
        {data?.map((exam: any, index: number) => (
          <SwiperSlide
            key={index}
            className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-2xl"
          >
            <ExamCardContent exam={exam} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Add navigation buttons */}
      <div className={`${uniqueId}-next swiper-button-next`}></div>
      <div className={`${uniqueId}-prev swiper-button-prev`}></div>
    </>
  );
}


export const ExamCardContent = function ({ exam }: any) {
  return (
    <React.Fragment>
      <div className="flex-center relative w-full bg-blue-950/10 md:py-5">
        <Image src={exam?.img} alt="exam" className="h-32 object-contain" />
        {exam?.mode && (
          <div className="absolute md:right-2 md:top-2 right-1 top-1 flex flex-col gap-2 rounded-lg md:p-5 text-sm text-black">
            {exam?.mode?.map((item: any, index: number) => (
              <p
                key={index}
                className="rounded-e-full rounded-s-full border border-black px-3 py-1"
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col p-5 md:gap-3">
        {exam?.title && (
          <h4 className="mb-5 text-xl font-medium text-blue-950">
            {exam?.title}
          </h4>
        )}
        <p className="flex justify-between text-sm">
          <span className="flex-center gap-2 text-wrap">
            <PiStudent />
            Students Participating
          </span>
          <span className="flex gap-2">{exam?.studentsParticipation}</span>
        </p>
        {exam?.applicationFormDate && (
          <p className="flex justify-between text-sm">
            <span className="flex-center gap-2 text-wrap">
              <IoCalendarOutline />
              Registration Date
            </span>
            <span className="flex max-sm:flex-col">
              <span className="text-nowrap">
                {formatDate(exam?.applicationFormDate.startDate)}
              </span>
              <span> - {formatDate(exam.applicationFormDate?.endDate)}</span>
            </span>
          </p>
        )}
        {exam?.level && (
          <p className="flex justify-between text-sm">
            <span className="flex-center gap-2">
              <MdAutoGraph />
              Exam Level
            </span>
            <span className="flex capitalize max-sm:text-right">
              {exam?.level?.map((item: any, i: number) => (
                <React.Fragment key={i}>
                  {item}
                  {i !== exam?.level?.length - 1 ? ", " : ""}
                </React.Fragment>
              ))}
            </span>
          </p>
        )}
        <div className="mt-5 flex justify-between gap-2 md:gap-4 max-md:flex-col ">
          <button className="cardButton1">
            {exam?.button1?.icon && <span>{exam?.button1?.icon}</span>}{" "}
            {exam?.button1?.text}
          </button>
          <button className="cardButton2">
            {exam?.button2?.icon && <span>{exam?.button2?.icon}</span>}{" "}
            {exam?.button2?.text}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

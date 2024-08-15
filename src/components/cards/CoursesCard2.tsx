"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaRegCalendarAlt, FaRegClock, FaStar } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import TextWithLineBreak from "@/utils/TextWithLineBreak";

export default function CoursesCard2({ data }: any) {
  const uniqueId = "course1234";
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
        {data.map((data: any, index: number) => (
          <SwiperSlide
            key={index}
            className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white"
          >
            <CoursesCardContent data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Add navigation buttons */}
      <div className={`${uniqueId}-next swiper-button-next`}></div>
      <div className={`${uniqueId}-prev swiper-button-prev`}></div>
    </>
  );
}

function CoursesCardContent({ data }: any) {
  return (
    <React.Fragment>
      <div className="relative w-full">
        <Image src={data?.bg} alt="data" className="h-[200px] w-full" />
        <div className="absolute left-0 top-0 flex h-full w-full items-center gap-3 bg-black/50 p-5">
          <Image
            src={data?.teacher?.avatar}
            alt="teacher"
            width={112}
            height={112}
            className="h-28 w-28 rounded-full border-2 border-zinc-200 object-cover"
          />
          <div className="my-auto text-white">
            <p className="mb-3 text-wrap text-sm font-thin underline">
              {data?.teacher?.role}
            </p>
            <h6 className="mb-1 text-wrap font-bold">{data?.teacher.name}</h6>
            <p className="text-wrap text-sm font-thin">
              {data?.teacher?.designation}
            </p>
          </div>
        </div>
        <p className="absolute bottom-2 right-2 rounded-md bg-red-600 p-1.5 text-xs text-white">
          {data.tag}
        </p>
      </div>
      <div className="p-5">
        {/* line 1  */}
        <div className="mb-5 flex items-center justify-between">
          <h4 className="max-w-max text-wrap text-2xl font-medium">
            {data?.title}
          </h4>
          {/* stars  */}
          <div className="flex flex-nowrap items-center gap-x-1">
            <FaStar className="text-yellow-400" />
            <span className="rounded bg-blue-500 px-1 text-sm text-white">
              {data?.rating}
            </span>
          </div>
        </div>
        {/* END line 1  */}
        {/* line 2  */}
        <h6 className="text-sm font-bold">Course Summery</h6>
        <p className="mb-2 text-sm">
          <TextWithLineBreak text={data?.summery} />
        </p>
        {/* END line 2  */}
        {/* line 3  */}
        <div className="flex justify-between pb-5 text-sm">
          <p className="flex items-center gap-x-2">
            <MdOutlineMapsHomeWork className="text-lg text-blue-500" />
            {data?.noOfCourses} Courses
          </p>
          <p className="flex items-center gap-x-2">
            <FaRegClock className="text-lg text-blue-500" />
            {data?.courseTime}
          </p>
          <p className="flex items-center gap-x-2">
            <FaRegCalendarAlt className="text-lg text-blue-500" />
            {data?.duration}
          </p>
        </div>
        {/* End line 3  */}
        {/* line 4  */}
        <Link href={data?.button?.href || "#"}>
          <button className="cardButton2">{data?.button?.text}</button>
        </Link>
      </div>
    </React.Fragment>
  );
}

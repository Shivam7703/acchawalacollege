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
import { formatRupee } from "@/utils/fotmatRupee";

export default function CoursesCard({ data }: any) {
  const uniqueId = "course123";
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
        {data && data.length > 0 && data.map((course: any, index: number) => (
          <SwiperSlide
            key={index}
            className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-2xl"
          >
            <CoursesCardContent course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Add navigation buttons */}
      <div className={`${uniqueId}-next swiper-button-next`}></div>
      <div className={`${uniqueId}-prev swiper-button-prev`}></div>
    </>
  );
}

export const CoursesCardContent = function CoursesCard({ course }: any) {
  return (
    <React.Fragment>
      <div className="relative w-full">
        <Image src={course?.bg} alt="course" className="h-[200px] w-full" />
        <div className="absolute left-0 top-0 flex h-full w-full items-center gap-3 bg-black/50 p-5">
          <Image
            src={course?.teacherAvatar}
            alt="teacher"
            width={112}
            height={112}
            className="h-28 w-28 rounded-full border-2 border-zinc-200 object-cover"
          />
          <div className="my-auto text-white">
            <p className="mb-3 text-wrap text-sm font-thin underline">
              {course?.teacherRole}
            </p>
            <h6 className="mb-1 text-wrap font-bold">{course?.teacherName}</h6>
            <p className="text-wrap text-sm font-thin">{course?.designation}</p>
          </div>
        </div>
      </div>
      <div className="p-5">
        {/* line 1  */}
        <div className="mb-5 flex items-center justify-between">
          <Link href={`/courses/${course?.slug} || #`}>
            <h4 className="max-w-max text-wrap text-2xl font-medium hover:text-blue-500">
              {course?.stream} from {course?.title}
            </h4>
          </Link>
          {/* stars  */}
          <div className="flex flex-nowrap items-center gap-x-1">
            <FaStar className="text-yellow-400" />
            <span className="rounded bg-blue-950 px-1 text-sm text-white">
              {course?.stars}
            </span>
          </div>
        </div>
        {/* END line 1  */}
        {/* line 2  */}
        <div className="mb-2 flex border-b border-zinc-400 text-sm">
          <div className="flex-[1] border-r border-zinc-400 pb-5">
            <h6 className="text-base font-bold">Course Details</h6>
            <p className="flex items-center gap-x-2">
              <MdOutlineMapsHomeWork className="text-lg text-blue-500" />
              {course?.courseDetails?.noOfAvailableCourses} Courses
            </p>
            <p className="flex items-center gap-x-2">
              <FaRegClock className="text-lg text-blue-500" />
              {course?.courseDetails?.courseTime}
            </p>
            <p className="flex items-center gap-x-2">
              <FaRegCalendarAlt className="text-lg text-blue-500" />
              {course?.courseDetails?.duration}
            </p>
          </div>
          <div className="flex-[1] pb-5 pl-5">
            <h6 className="text-base font-bold">Course Price</h6>
            <p>
              Full Time :{" "}
              <span className="font-bold text-blue-500">
                {formatRupee(course?.courseDetails?.coursesPrice?.fullTime)}
              </span>
            </p>
            <p>
              Part Time :{" "}
              <span className="font-bold text-blue-500">
                {formatRupee(course?.courseDetails?.coursesPrice?.partTime)}
              </span>
            </p>
          </div>
        </div>
        {/* END line 2  */}

        {/* line 3  */}

        <h6 className="text-sm font-bold">Course Summery</h6>
        <p className="mb-2 text-sm">{course?.summery}</p>
        {/* END line 3  */}

        {/* line 4  */}
        <Link href={`/courses/${course?.slug} || #`}>
          <button className="cardButton2">{course?.button?.text}</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

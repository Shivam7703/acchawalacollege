"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function CoursesCard1({ data }: any) {
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
        {data.map((d: any, index: number) => (
          <SwiperSlide
            key={index}
            className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white"
          >
            <CoursesCardContent data={d} />
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
        <Image
          src={data?.bg}
          alt="data"
          className="h-[250px] w-full object-cover"
        />
        <div className="absolute left-0 top-0 flex max-sm:flex-col h-full w-full gap-3 bg-black/50 p-3">
          <div className="flex flex-col justify-between text-white">
            {data?.button?.button1 && (
              <Link href={data?.button?.button1?.href || "#"} className="mb-5">
                <button className="flex items-center gap-x-2 rounded-3xl border border-white bg-white p-2 text-xs text-black">
                  <FaRegCirclePlay /> <p>{data?.button?.button1?.text}</p>
                </button>
              </Link>
            )}
            <div>
              {data?.teacher?.role && (
                <p className="w-min text-wrap rounded-3xl border border-white px-2 py-1 text-xs font-thin ">
                  {data?.teacher?.role}
                </p>
              )}
              <h6 className="text-wrap font-medium">{data?.teacher?.name}</h6>
              {data?.teacher?.designation && (
                <p className="text-wrap text-sm font-thin">
                  {data?.teacher?.designation}
                </p>
              )}
            </div>
          </div>
          {data?.teacher?.avatar && (
            <Image
              src={data?.teacher?.avatar}
              alt="teacher"
              width={112}
              height={112}
              className="m-2 h-28 w-28 max-sm:h-16 max-sm:w-16 rounded-full border-2 border-zinc-200 object-cover max-sm:relative right-1 bottom-1"
            />
          )}
        </div>
      </div>
      <div className="p-3">
        {/* line 1  */}
        <h4 className="mb-3 max-w-max text-wrap text-xl font-medium">
          {data?.title}
        </h4>
        {/* line 4  */}
        <Link href={data?.button?.button2?.href || "#"}>
          <button className="cardButton2">{data?.button?.button2?.text}</button>
        </Link>
      </div>
    </React.Fragment>
  );
}

"use client";
import React, { useState } from "react";
import { formatRupee } from "@/utils/fotmatRupee";
import { FaRegCircleCheck } from "react-icons/fa6";
import { SlClose } from "react-icons/sl";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function PackageCardSlider({ data }: any) {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [showAll, setShowAll] = useState(false);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  const uniqueId = "package123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
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
        className={`mySwiper w-[95%] px-2 ${uniqueId}`}
      >
        {data?.map((data2: any, index: number) => (
          <SwiperSlide key={index} className="mb-3 w-full p-5 md:mb-10 ">
            <PackageCard
              data={data2}
              isActive={index === activeIndex}
              onSelect={() => handleSelect(index)}
              showAll={showAll}
              setShowAll={setShowAll}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Add navigation buttons */}
      <div className={`${uniqueId}-next swiper-button-next`}></div>
      <div className={`${uniqueId}-prev swiper-button-prev`}></div>
    </>
  );
}

export function PackageCard({
  data,
  isActive,
  onSelect,
  showAll,
  setShowAll,
}: any) {
  const displayedList = data?.lists?.data 
 && (showAll ? data.lists.data : data.lists.data.slice(0, 4)) ;
  return (
    <div
      className={`relative w-full rounded-lg border-2 ${isActive ? "scale-100 md:translate-y-4 md:scale-105 md:border-blue-500 md:shadow-lg md:shadow-blue-500" : "border-zinc-300"} gap-1 transition-all duration-300 md:overflow-hidden  bg-white md:hover:translate-y-4 md:hover:scale-105 md:hover:shadow-lg md:hover:shadow-blue-500`}
      onClick={onSelect}
    >
      {data?.isPopular && (
        <div className="right-[8.5rem] top-[2.5rem] w-full bg-red-800 py-1 text-center text-white md:absolute md:-rotate-45">
          Most Popular
        </div>
      )}
      <div className={`flex-center bg-gradient-to-r p-2 ${data?.styling?.tagBg || "from-orange-400 to-white"}`}>
        <Image src={data?.icon?.data?.[0]?.url} alt="icon" width={30} height={30} />
      </div>
      <div className="flex w-full flex-col items-center text-center">
        <h2 className="mt-2 font-semibold">
          <TextWithLineBreak text={data?.PackageName} />
        </h2>

        <p>
          <span className="text-2xl font-semibold">
            {formatRupee(data?.price)}
          </span>
          <span className="text-xs text-zinc-500">/year</span>
        </p>

        {data?.text1 && (
          <>
            <p className="mb-8 px-3 max-md:mb-5 max-md:hidden">
              <TextWithLineBreak text={data.text1} />
            </p>
            <p className="mb-8 px-3 max-md:mb-5 md:hidden">
              {data?.text1}
            </p>
          </>
        )}
        {/* Desktop View  */}
        <ul className="w-full text-left leading-8 max-md:hidden md:pl-12">
          {data?.lists?.data?.map(
            (d: any, i: number) =>
              d?.text && (
                <li key={i} className="flex items-center gap-4 text-wrap">
                  <span>
                    {d.isInclude ? (
                      <FaRegCircleCheck className="mt-[0.6rem] text-green-500" />
                    ) : (
                      <SlClose className="mt-[0.6rem] text-red-500" />
                    )}
                  </span>
                  <span className="w-full text-wrap">
                    <TextWithLineBreak text={d?.text} />
                  </span>
                </li>
              ),
          )}
        </ul>
        {/* mobile view  */}
        <ul className="w-full px-5 text-left leading-8 md:hidden">
          {displayedList?.map(
            (d: any, i: number) =>
              d.text && (
                <li key={i} className="flex gap-4 text-wrap">
                  <span>
                    {d.isInclude ? (
                      <FaRegCircleCheck className="mt-[0.6rem] text-green-500" />
                    ) : (
                      <SlClose className="mt-[0.6rem] text-red-500" />
                    )}
                  </span>
                  <span className="w-full text-wrap">
                    <TextWithLineBreak text={d?.text} />
                  </span>
                </li>
              ),
          )}
          {data?.lists?.data?.length > 4 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full text-left text-blue-500 underline md:hidden"
            >
              {showAll ? "Show Less" : "Read More"}
            </button>
          )}
        </ul>

        {data?.button && (
          <Link href={data?.button?.href || "#"}>
            <button className="button2 my-8">{data?.button?.text}</button>
          </Link>
        )}
      </div>
    </div>
  );
}

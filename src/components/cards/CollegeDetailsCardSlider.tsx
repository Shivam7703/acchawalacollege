"use client";
import React, { useState } from "react";
import Carousel from "./Carousel";
import Link from "next/link";
import { formatRupee } from "@/utils/fotmatRupee";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function CollegeDetailsCardSlider({ course }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const slides = [
    {
      title: "Eligibility",
      text: course?.eligibility,
    },
    {
      title: "Fees",
      text: formatRupee(course?.fees),
    },
    {
      title: "Duration",
      text: course?.duration,
    },
  ];
  function handleCompare() {
    console.log("compare");
  }
  return (
    <div className="relative h-[21.5rem] overflow-hidden rounded-md border border-zinc-300 text-white md:h-[21rem]">
      {/* Image  */}
      {course?.bg && (
        <Image
          src={course?.bg}
          alt="bg"
          className="h-full w-full object-cover"
          width={500}
          height={500}
        />
      )}
      {/* Like / Compare  */}
      <div className="flex-center absolute right-4 top-2 z-10 gap-x-2 text-white">
        <p
          className="cursor-pointer border-r border-zinc-300 pr-2 text-sm hover:underline"
          onClick={handleCompare}
        >
          Compare
        </p>
        <div
          className="text-xl transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? <FaHeart className="text-red-500" /> : <CiHeart />}
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full bg-black/70 p-5">
        {/* Title  */}
        {course?.name && (
          <h2 className="text-2xl font-medium text-blue-500">{course?.name}</h2>
        )}
        {/* slider  */}
        <div className="relative mb-12 mt-5">
          {/* Note: givimg min-w-full is neccessary to each slide */}
          <Carousel autoSlide={true}>{slides}</Carousel>
        </div>
        {/* buttons  */}
        <div>
          {course?.buttons && (
            <div className="flex gap-x-4 md:max-w-xl">
              {course?.buttons?.button1?.text && (
                <Link
                  className="button6 flex-[1]"
                  href={course?.buttons?.button1?.href || "#"}
                >
                  {course?.buttons?.button1?.text}
                </Link>
              )}
              {course?.buttons?.button2?.text && (
                <Link
                  className="button7 flex-[1]"
                  href={course?.buttons?.button2?.href || "#"}
                >
                  {course?.buttons?.button2?.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

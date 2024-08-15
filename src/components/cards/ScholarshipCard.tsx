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
import { FaMoneyCheckDollar, FaRegCirclePlay } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoSchoolOutline } from "react-icons/io5";
import { Button } from "../dashboardSections/Button";

export default function ScholarshipCard({ data }: any) {
 

  return (
    <>
    <div className="sm:w-[48%] md:w-[32%] mb-8 shadow-lg w-full pb-3">
      <div className="relative w-full ">
        <Image
          src={data?.img}
          alt="data"
          className="h-[250px] w-full object-cover"
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between gap-3 bg-black bg-opacity-70 p-3 text-white">
          <div className="flex w-full justify-between">
        
            {data?.uccImg && (
              <Image
                src={data?.uccImg}
                alt="teacher"
                width={112}
                height={112}
                className="mt-12 h-28 w-28 rounded-xl  object-cover"
              />
            )}
          </div>
          <div className="">
            <h6 className="text-wrap font-medium">{data?.imgText}</h6>
            
          </div>
        </div>
      </div>
      <div className="text-medium flex flex-col gap-3 p-3 text-black capitalize">
        {/* line 1  */}
        {data?.title && (
              <p className="text-blue-500 text-xl font-semibold">
                {data?.title}
              </p>
            )}
       <div className="px-3 flex justify-between  text-left flex-wrap">
        <p className="my-1 mr-2"><span className="text-zinc-500">Eligibility</span> <br />                 {data?.eligiblity}
        </p>
        <p className="my-1 mr-2"><span className="text-zinc-500">Type</span> <br />                {data?.type}
        </p><p className="my-1"><span className="text-zinc-500">No. of Scholarships</span> <br />                {data?.numberOfSchol}
        </p>
        <p className="my-1"><span className="text-zinc-500">Amount</span> <br /> <span className="text-orange-600 text-2xl font-medium">$ {data?.amount}
        </span >                {data?.degree}
        </p>
       
       <Button variant="blue" type="submit" className="min-w-max mt-6 !text-xs">
       {data?.button1?.text}
       </Button>
          <Button variant="white" type="submit" className="min-w-max mt-6 border-[3px] !text-xs">
          {data?.button2?.text}
          </Button></div></div>
    </div>
  
    </>
  );
}



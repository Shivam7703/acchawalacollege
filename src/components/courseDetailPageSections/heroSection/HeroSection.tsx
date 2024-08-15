import Wrapper from "@/components/Wrapper";
import { formatRupee } from "@/utils/fotmatRupee";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  FaAngleRight,
  FaChalkboardTeacher,
  FaQuestionCircle,
  FaRegClock,
} from "react-icons/fa";
import { FaBuildingFlag, FaClockRotateLeft } from "react-icons/fa6";
import { GrValidate } from "react-icons/gr";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { IoBookOutline, IoHeartCircleSharp } from "react-icons/io5";

export default function HeroSection({ data }: any) {
  return (
    <section className="relative w-full border-b border-zinc-300">
      <Image
        src={data?.collegeDetails?.bg}
        alt="collegeBanner"
        className="h-[40rem] w-full object-cover sm:h-[32rem] md:h-[21.5rem]"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black/65">
        <Wrapper className="p-10 text-white">
          {/* BreadCrumb  */}
          <div className="mb-5 flex  gap-x-1 text-xs font-medium ">
            <Link href="/">
              <p>Home</p>
            </Link>
            <FaAngleRight className="mt-[2px]" />
            <Link href="/courses">
              <p>Courses</p>
            </Link>
            <FaAngleRight className="mt-[2px]" />
            <p className="text-blue-500">{data?.title}</p>
          </div>
          {/* End BreadCrumb  */}
          <div className="my-auto gap-x-8 border-b border-white pb-3 md:flex">
            <div className="w-max rounded-md bg-white p-3">
              <Image
                src={data?.collegeDetails?.collegeLogo}
                alt="collegeLogo"
                className="h-full max-h-40 w-full max-w-40 object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm">
              {/* title  */}
              <div className="items-center gap-x-1 font-thin md:flex">
                <h1 className="text-wrap text-2xl font-medium md:text-4xl">
                  {data?.title}
                </h1>
                {data?.courseType && (
                  <p className="flex w-max items-center gap-x-1 rounded-md bg-orange-600 px-2 py-1 text-xs font-thin">
                    <IoBookOutline />
                    {data?.courseType} Course
                  </p>
                )}
              </div>
              {/* End  title  */}
              {/* Location  */}
              <div className="flex gap-x-6 max-md:flex-col">
                <p className="flex items-center gap-x-1 font-thin">
                  <CiLocationOn />
                  {data?.collegeDetails?.location?.city}{" "}
                  {data?.collegeDetails?.location?.state && (
                    <>
                      {", "}
                      {data?.collegeDetails?.location?.state}
                    </>
                  )}
                </p>
                <p className="flex items-center gap-1 text-wrap font-thin">
                  <FaBuildingFlag />
                  {data?.collegeDetails?.CollegeName}
                </p>

                {/* <p className="flex items-center gap-x-1 font-thin">
                <CiFlag1 />
                {data?.collegeType === "Government" ? "Govt." : "Pvt."} College
              </p> */}
              </div>
              {/* End Location  */}
              {/* Affiliation  */}
              <div className="text-bold flex flex-wrap gap-x-6 text-nowrap">
                {data?.collegeDetails?.affiliation && (
                  <p className="flex items-center gap-x-1 ">
                    <GrValidate className="text-lg text-blue-500" /> Approved by{" "}
                    {data?.collegeDetails?.affiliation}
                  </p>
                )}
                {" | "}
                {data?.duration && (
                  <p className="flex items-center gap-x-1 ">
                    <FaClockRotateLeft className="text-lg text-blue-500" />
                    {data?.duration}
                  </p>
                )}
                {" | "}
                {data?.courseType && (
                  <p className="flex items-center gap-x-1 ">
                    <FaChalkboardTeacher className="text-lg text-blue-500" />
                    {data?.courseType}
                  </p>
                )}
                {" | "}
                {data?.fees && (
                  <p className="flex items-center gap-x-1 ">
                    <HiOutlineCurrencyRupee className="text-lg text-blue-500" />
                    {formatRupee(data?.fees)}
                  </p>
                )}
              </div>
              {/* End Affiliation  */}
            </div>
          </div>
          <div className="mt-3 flex justify-between gap-y-3 max-md:flex-col">
            {/* Last Updated  */}
            <p className="flex items-center gap-x-1 ">
              <FaRegClock /> Updated on {data?.lastUpdate}
            </p>
            {/* End Last Updated  */}
            <div className="flex flex-wrap justify-end gap-x-6 text-nowrap max-md:gap-y-2">
              <p className="flex items-center gap-x-1 font-thin">
                <IoHeartCircleSharp className="text-lg" />
                Save
              </p>
              <p className="flex items-center gap-x-1 font-thin">
                <FaQuestionCircle />
                Ask
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href={data?.button1?.href || "#"} className="button4 rounded-lg max-sm:w-full">
                  {data?.button1?.text}
                </Link>
                <Link href={data?.button2?.href || "#"} className="button8 rounded-lg max-sm:w-full">
                  {data?.button2?.text}
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}

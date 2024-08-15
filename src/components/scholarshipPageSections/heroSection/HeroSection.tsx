import Wrapper from "@/components/Wrapper";
import { formatRupee } from "@/utils/fotmatRupee";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiFlag1, CiLocationOn } from "react-icons/ci";
import { FaAngleRight, FaQuestionCircle, FaRegClock } from "react-icons/fa";
import { IoBookOutline, IoHeartCircleSharp } from "react-icons/io5";

export default function HeroSection({ data }: any) {
  return (
    <section className="relative w-full border-b border-zinc-300">
      <Image
        src={data?.bgImage}
        alt="collegeBanner"
        className="h-[42rem] w-full object-cover sm:h-[32rem] md:h-[21.5rem]"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black/65">
        <Wrapper className="p-10 text-white">
          {/* BreadCrumb  */}
          <div className="mb-5 flex gap-x-1 text-xs font-medium ">
            <Link href="/">
              <p>Home</p>
            </Link>
            <FaAngleRight className="mt-[2px]" />
            <Link href="/colleges">
              <p>Colleges</p>
            </Link>
            <FaAngleRight className="mt-[2px]" />
            <p className="text-blue-500">{data?.CollegeName}</p>
          </div>
          {/* End BreadCrumb  */}
          <div className="my-auto gap-x-8 border-b border-white pb-3 md:flex">
            <div className="w-max rounded-md bg-white p-3">
              <Image
                src={data?.collegeLogo}
                alt="collegeLogo"
                className="h-full max-h-40 w-full max-w-40 object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm">
              {/* title  */}
              <div className="items-center gap-x-1 font-thin md:flex">
                <h1 className="text-wrap text-2xl font-medium md:text-4xl">
                  {data?.collegeName}
                </h1>
                {/* {data?.collegeType && (
                  <p className="flex w-max items-center gap-x-1 rounded-md bg-orange-600 px-2 py-1 text-xs font-thin">
                    <IoBookOutline />
                    {data?.collegeType} Course
                  </p>
                )} */}
              </div>
              {/* End  title  */}
              {/* Location  */}
              <div className="flex gap-x-6 max-md:flex-col">
                {data?.location && (
                  <p className="flex items-center gap-x-1 font-thin">
                    <CiLocationOn />
                    {data?.location?.city && data?.location?.city}{" "}
                    {data?.location?.state && (
                      <>
                        {", "}
                        {data?.location?.state}
                      </>
                    )}
                  </p>
                )}
                {data?.estYear && (
                  <p className="flex items-center gap-1 text-wrap font-thin">
                    <CiFlag1 />
                    Est {data?.estYear}
                  </p>
                )}
                <p className="flex items-center gap-1 text-wrap font-thin">
                  <IoBookOutline />
                  {data?.collegeType === "Government" ? "Govt." : "Pvt."}{" "}
                  College
                </p>
              </div>
              {/* End Location  */}
            </div>
          </div>
          <div className="mt-3 flex justify-between gap-y-3 max-md:flex-col">
            {/* Last Updated  */}
            <p className="flex items-center gap-x-1 ">
              <FaRegClock /> Updated on {data?.lastUpdate}
            </p>
            {/* End Last Updated  */}
            <div className="flex flex-wrap justify-end gap-x-6 text-nowrap max-md:gap-y-2">
              <p className="flex cursor-pointer items-center gap-x-1 font-thin">
                <IoHeartCircleSharp className="text-lg" />
                Save
              </p>
              <p className="flex cursor-pointer items-center gap-x-1 font-thin">
                <FaQuestionCircle />
                Ask
              </p>
              <div className="flex flex-wrap gap-2">
                {/* Register Now */}
                <Link href={"#"} className="button4 rounded-lg max-sm:w-full">
                  Register Now
                </Link>
                {/* Brochure  */}
                <Link
                  href={data?.brochureSection?.buttons?.button1?.href || "#"}
                  className="button8 rounded-lg  max-sm:w-full"
                >
                  {data?.brochureSection?.buttons?.button1?.text}
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}

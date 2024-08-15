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
        src={data?.bg}
        alt="ExamBanner"
        className="h-[50rem] w-full object-cover sm:h-[32rem] md:h-[21.5rem]"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black/65">
        <Wrapper className="p-10 text-white">
          {/* BreadCrumb  */}
          <div className="mb-5 flex gap-x-1 text-xs font-medium ">
            <Link href="/">
              <p>Home</p>
            </Link>
            <FaAngleRight className="mt-[2px]" />
            <Link href="/exams">
              <p>Exams</p>
            </Link>
            <FaAngleRight className="mt-[2px]" />
            <p className="text-blue-500">{data?.breadCrumb}</p>
          </div>
          {/* End BreadCrumb  */}
          <div className="my-auto gap-x-8 border-b border-white md:pb-16 md:flex">
            <div className="w-max rounded-md bg-white p-3">
              <Image
                src={data?.logo}
                alt="ExamLogo"
                className="h-full max-h-50 w-full max-w-50 object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm  max-md:my-5">
              {/* title  */}
              <div className=" gap-1 font-thin capitalize md:flex">
                {data?.title && (
                  <h1 className="text-wrap text-2xl font-medium md:text-4xl">
                    {data?.title}{" "}
                    {data?.titleAddition && (
                      <span>: {data?.titleAddition}</span>
                    )}
                  </h1>
                )}
                {data?.mode && (
                  <p className="flex h-max w-max gap-x-1 text-wrap rounded-md bg-orange-600 px-2 py-1 text-xs font-thin capitalize">
                    <span>
                      {data?.mode?.map(
                        (item: any, index: number) =>
                          ` ${item} ${index === data?.mode?.length - 1 ? "" : " & "}`,
                      )}
                      Exam
                    </span>
                  </p>
                )}
              </div>
              {/* End  title  */}
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
                <Link
                  href={data?.button1?.href || "#"}
                  className="button4 rounded-lg max-sm:w-full"
                >
                  {data?.button1?.text}
                </Link>
                <Link
                  href={data?.button3?.href || "#"}
                  className="button8 rounded-lg  max-sm:w-full"
                >
                  {data?.button3?.text}
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}

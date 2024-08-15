"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import useIsMobile from "@/customHooks/useIsMobile";

export default function BannerSection({ data }: any) {
  const isMobile = useIsMobile(450);
  return (
    <section className="my-16 w-full max-md:mt-5">
      <Wrapper className="flex items-center justify-between max-md:flex-col max-md:gap-y-5">
        {/* Left Side of Banner */}
        <div className="flex w-max max-sm:w-full flex-col gap-y-3">
          {/* Title  */}
          <h1 className="flex text-nowrap flex-col text-[1.750rem] font-medium md:gap-y-2 md:text-5xl">
            <div className="flex max-md:flex-col gap-x-2">
            {data?.title?.t1 && (
              <span className="text-blue-950/70">{data?.title?.t1}</span>
            )}
            {data?.title?.t2 && (
              <span className="text-blue-950">{data?.title?.t2}</span>
            )}
            </div>
            {data?.title?.t3 && (
              <span className="text-blue-500">{data?.title?.t3}</span>
            )}
          </h1>
          {data?.text1 && (
            <p className="mb-5 !text-wrap flex-wrap">
              {isMobile ? data?.text1 : <TextWithLineBreak text={data?.text1} />}
            </p>
          )}
          {/* Input field */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mb-5 flex h-12 items-center gap-1"
          >
            <input
              className="h-full w-full rounded-md border  bg-zinc-100 p-5 shadow md:max-w-[500px]"
              placeholder="Search Colleges, Courses, Exams & more"
            />
            <button type="submit" className="banner-search-button ">
              <CiSearch className="text-2xl text-white" />
            </button>
          </form>
          {/* Buttons  */}
          <div className="flex gap-1 md:gap-2">
            <Link
              href={data?.button1?.href || "#"}
              className="button2  max-md:px-2"
            >
              {data?.button1?.text}
            </Link>
            <Link
              href={data?.button2?.href || "#"}
              className="button1  max-md:px-3"
            >
              {data?.button2?.text}
            </Link>
          </div>
        </div>
        {/* Right Side of Banner  */}
        <div className="relative flex items-center gap-x-5 md:w-1/2">
          <div className="relative flex h-full w-3/5 flex-col gap-y-5">
            <Image
              src={data?.img[0]}
              alt="b2"
              width={1000}
              height={1000}
              className="ml-auto h-full max-h-[180px] w-max rounded-xl object-cover"
            />
            <Image
              src={data?.img[2]}
              alt="b1"
              className="ml-auto h-full max-h-[300px] w-max rounded-xl object-cover"
            />
          </div>
          <Image
            src={data?.img[1]}
            alt="b3"
            width={1000}
            height={1000}
            className="h-full max-h-[350px] w-2/5 rounded-xl object-cover"
          />
          <p className="absolute bottom-5 right-1/2 flex w-[30%] min-w-[235px] translate-x-1/2 flex-col rounded-xl bg-blue-950 px-8 py-3 text-white max-md:scale-75 md:translate-x-full">
            <span className="mb-3 text-wrap">{data?.text2}</span>
            <span>{data?.text3}</span>
          </p>
        </div>
      </Wrapper>
    </section>
  );
}

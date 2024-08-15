"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";

export default function HeroSection({ data }: any) {
  return (
    <section className="my-8 w-full">
      <Wrapper className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side of Banner  */}
        <div className="max-sm:hidden grid grid-cols-2 gap-5">
          <Image
            src={data?.img[0]}
            alt="b2"
            width={1000}
            className="h-96 w-full my-auto rounded-lg object-cover"
          />
          <div className="flex flex-col gap-5">
            <Image
            width={1000}
              src={data?.img[1]}
              alt="b1"
              className=" w-full h-44  rounded-lg object-cover"
            />
            <Image
              src={data?.img[2]}
              alt="b3"
              width={1000}
              height={1000}
              className="w-full h-48  rounded-lg object-cover"
            />
          </div>
        </div>
        {/* Right Side of Banner */}
        <div className="my-auto ">
          {/* Title  */}
          <h1 className="max-md:4xl gap-y-2 text-5xl font-medium mb-2">    
            <span className="  text-blue-900/80">{data?.title?.t1}</span>{" "}
            <span className=" text-blue-900">{data?.title?.t2}</span> <br />
            <span className=" text-blue-500">{data?.title?.t3}</span>
          </h1>
          <p className="mb-5">{data?.text1}</p>
          {/* Input field */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex h-10  gap-1 mb-8"
          >
            <input
              className="h-full w-full max-w-[500px] rounded-md  border bg-zinc-100 p-5 shadow"
              placeholder="Search Colleges, Courses, Exams & more"
            />
            <button type="submit" className="banner-search-button">
              <CiSearch className="text-2xl text-white" />
            </button>
          </form>
          <div className="flex gap-2">
            <Link href={data?.button1?.href || "#"} className="button2 max-sm:px-4">
              {data?.button1?.text}
            </Link>
            <Link href={data?.button2?.href || "#"} className="button1 max-sm:px-4">
              {data?.button2?.text}
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

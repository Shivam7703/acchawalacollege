"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";

export default function BannerSection({ data }: any) {
  return (
    <section className="my-5 mt-0 w-full bg-blue-100 border-t border-blue-200">
      <Wrapper className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Side of Banner */}
        <div className="flex flex-col justify-end md:pb-20">
          {/* Title  */}
          <h1 className="mb-4 mt-5 gap-y-2 text-wrap text-4xl font-medium md:text-5xl">
            <span className="  text-blue-900/80">{data?.title?.t1}</span>{" "}
            <span className=" text-blue-900">{data?.title?.t2}</span>{" "}
            <span className=" text-blue-500">{data?.title?.t3}</span>
          </h1>
          {/* Input field */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mb-8 flex  h-10 gap-1"
          >
            <input
              className="h-full w-full max-w-[500px] rounded-md  border bg-zinc-100 p-5 shadow"
              placeholder="Search Colleges, Courses, Exams & more"
            />
            <button type="submit" className="banner-search-button">
              <CiSearch className="text-2xl text-white" />
            </button>
          </form>
        </div>
        {/* Right Side of Banner  */}
        <div className="grid grid-cols-3 gap-5 md:my-5 max-md:hidden">
          <div className="col-span-1 flex h-full items-end">
            <Image
              src={data?.img[0]}
              alt="bg"
              width={1000}
              className="h-64 w-full rounded-xl object-cover"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <Image
                src={data?.img[1]}
                alt="bg"
                width={1000}
                className="h-44 w-full rounded-xl object-cover"
              />
              <div className="flex h-full items-end">
                <Image
                  src={data?.img[2]}
                  alt="bg"
                  width={1000}
                  className="h-36 w-full rounded-xl object-cover"
                />
              </div>
            </div>
            <div>
              <Image
                src={data?.img[3]}
                alt="bg"
                width={1000}
                className="h-44 w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

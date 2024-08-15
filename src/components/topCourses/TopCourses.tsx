import React from "react";
import { LuListFilter } from "react-icons/lu";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CoursesCard from "@/components/cards/CoursesCard";
export default function TopCourses({ data }: any) {
  return (

    <section className="my-16 w-full ">
      <Wrapper isMaxWidthChangeRequired="max-w-[1500px]">
        <div className="mb-8 flex justify-between">
          {data?.title && (
            <h1 className="title1 md:ml-8">
              <span className="text-blue-950/70">{data?.title?.t1}</span>{" "}
              <span className="text-blue-950">{data?.title?.t2}</span>{" "}
              <span className="text-blue-500"> {data?.title?.t3} </span>
            </h1>
          )}
          {/* filter Button  */}
          {/* <button className="button3 h-max md:mr-8">
          <LuListFilter className="mt-1" /> Filter
        </button> */}
        </div>
        {/* Slider  */}
        <div className="topColleges relative">
          <CoursesCard data={data?.courses} />
        </div>
        <div className="flex-center pt-5">
          <Link
            href={"/courses"}
            className="w-max font-medium hover:text-blue-500"
          >
            View All
          </Link>
        </div>
      </Wrapper>
    </section>
  );
}

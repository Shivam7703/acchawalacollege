import React from "react";
import Wrapper from "@/components/Wrapper";
import AbroadCollegesCard, { CollegesCardContent } from "@/components/cards/AbroadCollegesCard";
import Link from "next/link";

export default function AbroadTopColleges({ data, sliceValue=8 }: any) {
  return (
    <section className="my-16 w-full">
      <Wrapper>
        <div className="mb-8 flex justify-between">
          {data?.title && (
            <h1 className="title1">
              {data?.title?.t1 && (
                <span className="text-blue-950/70">{data?.title?.t1}</span>
              )}{" "}
              {data?.title?.t2 && (
                <span className="text-blue-950">{data?.title?.t2}</span>
              )}{" "}
              {data?.title?.t3 && (
                <span className=" text-blue-500">{data?.title?.t3}</span>
              )}
            </h1>
          )}
          {/* filter Button  */}
          {/* <button className="button3 h-max md:mr-8">
                        <LuListFilter className="mt-1" /> Filter
                    </button> */}
        </div>
        {/* Slider for mobile view */}
        <div className="topColleges relative md:hidden">
          <AbroadCollegesCard data={data?.colleges} />
        </div>
        {/* Grid for desktop view */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data?.colleges
            ?.slice(0, sliceValue)
            .map((college: any, index: number) => (
              <div key={index} className="flex flex-col">
              <CollegesCardContent  college={college} />
              </div>
            ))}
        </div>
                {/* View All Button  */}
                <div className="flex-center pt-5">
          <Link
            href={"/study-abroad/colleges"}
            className="w-max font-medium hover:text-blue-500"
          >
            View All
          </Link>
        </div>
      </Wrapper>
    </section>
  );
}

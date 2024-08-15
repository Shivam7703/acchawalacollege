import Wrapper from "@/components/Wrapper";
import React from "react";
import ScholarshipCard from "../cards/ScholarshipCard";
import Link from "next/link";

export default function TopScholarship({ data }: any) {
  return (
    <section className="my-16 w-full">
      <Wrapper isMaxWidthChangeRequired="max-w-[1500px]">
        {/* Title  */}
        {data?.title && (
          <h1 className="title1 mb-8 md:ml-8">
            {data?.title?.t1 && (
              <span className="text-blue-950/70">{data?.title?.t1}</span>
            )}{" "}
            {data?.title?.t2 && (
              <span className="text-blue-950">{data?.title?.t2}</span>
            )}{" "}
            {data?.title?.t3 && (
              <span className="text-blue-500">{data?.title?.t3}</span>
            )}
          </h1>
        )}
        {/* Featured Programs  */}
        {data?.scholarshipsArray && (
          <div className="topColleges relative w-full">
            <ScholarshipCard data={data?.scholarshipsArray} />
          </div>
        )}
        {/* View All Button  */}
        <div className="flex-center pt-5">
          <Link
            href={"/scholarship"}
            className="w-max font-medium hover:text-blue-500"
          >
            View All
          </Link>
        </div>
      </Wrapper>
    </section>
  );
}

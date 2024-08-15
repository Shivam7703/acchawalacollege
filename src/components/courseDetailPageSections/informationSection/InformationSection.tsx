import Wrapper from "@/components/Wrapper";
import CoursesCard1 from "@/components/cards/CoursesCard1";
import React from "react";


export default function InformationSection({ data }: any) {
  return (
    <section className="my-16 w-full bg-white">
      <Wrapper isMaxWidthChangeRequired="max-w-[1500px]">
        {/* Title  */}
        {data?.title && (
          <h1 className="title1 mb-8 md:ml-8">
            <span className="text-blue-950">{data.title.t2}</span>{" "}
            <span className="text-blue-500">{data.title.t3}</span>
          </h1>
        )}

        {/* Featured Programs  */}
        {data?.coursesCard && (
          <div className="topColleges relative w-full">
            <CoursesCard1 data={data?.coursesCard} />
          </div>
        )}
      </Wrapper>
    </section>
  );
}

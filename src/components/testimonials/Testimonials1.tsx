import TextWithLineBreak from "@/utils/TextWithLineBreak";
import Image from "next/image";
import React from "react";
import TestimonialsSlider1 from "../cards/TestimonialsSlider1";
import Wrapper from "../Wrapper";

export default function Testimonials1({ data }: any) {
  return (
    <section className="relative my-5 w-full">
      {/* Background Images  */}
      <div className="relative flex w-full max-w-screen-2xl mx-auto">
        <div className="w-full">
          <Image
            src={data.bg}
            alt="bg"
            className="h-[700px] w-full object-cover"
          />
          <div className="absolute top-0 h-full w-full bg-blue-950/70"></div>
        </div>
        {/* Title and Text */}
        <div className="absolute left-0 top-0 w-full py-8 text-center">
          <Wrapper>
            {/* Title  */}
            <h1 className="title1 mb-2 w-full gap-y-2 md:text-5xl font-medium">
              <span className=" text-[#5C5B8F]">{data?.title?.t1}</span>{" "}
              <span className=" text-white">{data?.title?.t2}</span>{" "}
              <span className=" text-blue-500">{data?.title?.t3}</span>
            </h1>
            <p className="text-white mb-5 md:mb-10">
              <TextWithLineBreak text={data?.text} />
            </p>
            {/* Testimonials  Slider */}
            <div className="testimonials1 relative w-full">
              <TestimonialsSlider1 testimonials={data?.card} />
            </div>
          </Wrapper>
        </div>
      </div>
    </section>
  );
}

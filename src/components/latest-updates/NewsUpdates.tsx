import Wrapper from "@/components/Wrapper";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});
function NewsUpdates() {
  return (
    <Wrapper className="my-6">
      <div
        className={`${inter.className} sm:flex items-center w-full  border-l-2 border-[#2095F2] bg-[#DCE9F3] py-2`}
      >
        <div className="mr-6 ml-4 h-fit">
          <h1 className=" text-xs sm:text-sm  lg:text-base xl:text-lg font-bold text-[#2095F2] align-baseline text-nowrap">
            News Updates
          </h1>
        </div>

        <div className="relative overflow-x-hidden pause">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-4">IIT Madras JEE Advanced Cutoff 2024: Check Closing</span>
        <span className="mx-4">IIT Madras JEE Advanced Cutoff 2024: Check Closing</span>
        <span className="mx-4">IIT Madras JEE Advanced Cutoff 2024: Check Closing Ranks</span>
      </div>
    </div>
      </div>
    </Wrapper>
  );
}

export default NewsUpdates;

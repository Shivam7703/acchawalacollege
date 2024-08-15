"use client";
import { Montserrat, Inter } from "next/font/google";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import heroImg from "@/asset/news/card1.png";
import { IoEllipse, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { PiLineVertical } from "react-icons/pi";
import Wrapper from "@/components/Wrapper";

const montserrat = Montserrat({
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
});

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const newsItems = [
    {
      title1: "UN chief",
      title2: "calls for ‘dramatic shift’ to transform education worldwide",
      date: "11 July 2024",
      category: "Culture and Education",
      description:
        "The application correction window for GATE 2024 at IISc Bangalore is set to commence on November 18, 2023. Applicants can make corrections to their GATE forms until November 24, 2023.",
      imageUrl: heroImg,
    },
    {
      title1: "UN chief",
      title2: "calls for ‘dramatic shift’ to transform education worldwide",
      date: "13 July 2024",
      category: "Culture and Education",
      description:
        "The application correction window for GATE 2024 at IISc Bangalore is set to commence on November 18, 2023. Applicants can make corrections to their GATE forms until November 24, 2023.",
      imageUrl: heroImg,
    },
    {
      title1: "UN chief",
      title2: "calls for ‘dramatic shift’ to transform education worldwide",
      date: "14 July 2024",
      category: "Culture and Education",
      description:
        "The application correction window for GATE 2024 at IISc Bangalore is set to commence on November 18, 2023. Applicants can make corrections to their GATE forms until November 24, 2023.",
      imageUrl: heroImg,
    },
    {
      title1: "UN chief",
      title2: "calls for ‘dramatic shift’ to transform education worldwide",
      date: "15 July 2024",
      category: "Culture and Education",
      description:
        "The application correction window for GATE 2024 at IISc Bangalore is set to commence on November 18, 2023. Applicants can make corrections to their GATE forms until November 24, 2023.",
      imageUrl: heroImg,
    },
  ];

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section>
      <Wrapper>
        <div className="relative mb-4 flex h-fit flex-col pb-12 pt-5 sm:flex-row">
          {/* Image */}
          <div className="z-10 h-[95%] absolute sm:left-[33%]">
            <Image
              src={newsItems[activeIndex].imageUrl}
              alt="Education Image"
              className="h-full w-full sm:w-[56vw] object-cover"
            />
          </div>

          {/* NewsDescription */}
          <div className="z-20  mt-5 w-full rounded-md bg-white/90 pt-4 sm:w-1/2 md:pl-4">
            <div>
              <h2
                className={`${montserrat.className} ml-1 w-fit text-base font-bold text-[#2095F2]`}
              >
                Today's
              </h2>
              <div className="border-l-2 border-black sm:border-0">
                <div
                  className={`${inter.className} my-5 py-1 pl-1 text-[18px] leading-[22px] sm:border-l-2 sm:border-black md:pl-2 md:text-[30.96px] md:leading-[35.38px] xl:px-3 xl:pl-4 xl:text-[42px] xl:leading-[48px]`}
                >
                  <span className="font-bold text-[#2095F2]">
                    {newsItems[activeIndex].title1}
                  </span>
                  <span className="font-bold text-[#012148]">
                    {" "}
                    {newsItems[activeIndex].title2}
                  </span>
                </div>
                <div className={`${montserrat.className} ml-1 md:ml-3 xl:ml-5`}>
                  <div className="flex items-center text-[9.13px] md:text-[13.27px] xl:text-[18px]">
                    <span className="font-bold">
                      {newsItems[activeIndex].date}
                    </span>
                    <span className="text-black">
                      <PiLineVertical />{" "}
                    </span>
                    <span className="font-bold text-[#2095F2]">
                      {newsItems[activeIndex].category}
                    </span>
                  </div>
                  <div className="text-[9.13px] font-normal leading-[15px] xl:text-sm xl:leading-6">
                    {newsItems[activeIndex].description}{" "}
                    <a
                      href="#"
                      className="text-[9.13px] text-base font-semibold leading-[15px] text-[#2095F2] xl:text-sm"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* Chevrons */}
              <div className="my-5 flex items-center justify-center space-x-7">
                <div>
                  <IoChevronBack
                    className="h-3 w-3 cursor-pointer text-[#11111166]  md:h-5 md:w-5 xl:h-6 xl:w-6"
                    onClick={handlePrevClick}
                  />
                </div>
                <div>
                  <IoChevronForward
                    className="h-3 w-3 cursor-pointer text-[#2095F2] md:h-5 md:w-5 xl:h-6 xl:w-6"
                    onClick={handleNextClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ellipses */}
        <div className="flex items-center justify-center">
          <div className="flex space-x-2">
            {newsItems.map((_, index) => (
              <IoEllipse
                key={index}
                className={`h-[11px] w-4 ${
                  index === activeIndex ? "text-[#2095F2]" : "text-[#D9D9D9]"
                }`}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
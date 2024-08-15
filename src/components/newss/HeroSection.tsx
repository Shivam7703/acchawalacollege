import React from "react";
import MainImage from "@/asset/news/banner.png";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";

const HeroSection: React.FC = () => {
  return (
    <div className="flex h-[390px] items-center justify-center bg-blue-100">
      <div className="mx-auto flex max-w-[1300px] flex-col justify-center gap-10 md:flex-row">
        <div className="flex w-full  items-center justify-center p-4 md:w-[75%]">
          <div className="mt-4 md:mt-0">
            <h1 className="text-4xl font-bold md:text-[46px]">
              <span className="text-gray-600">Embark on a Journey of</span>{" "}
              <span className="text-[#012148]">Continuous Learning: </span>
              <span className="text-gray-600">Dive into Our</span>{" "}
              <span className="text-blue-500">
                Latest Insights and Updates.
              </span>
            </h1>
            <div className="mt-5 max-md:mt-12 flex items-center gap-6">
              <input
                type="text"
                className="h-[50px] w-full rounded-md text-xl"
              />
              <span className="flex h-[50px] w-[56px] items-center justify-center rounded-md bg-blue-500 text-xl text-white">
                <IoSearch />
              </span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[25%] max-md:hidden">
          <Image
            src={MainImage}
            alt="Megaphone"
            width={500}
            height={500}
            className="h-[350px] w-[357px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
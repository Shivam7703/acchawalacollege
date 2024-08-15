import React from "react";
import Image from "next/image";
import cardImg from "@/asset/news/card1.png";
import dpImg from "@/asset/latestUpdates/dpImg.png";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
});

function Card() {
  const CardItems = [
    {
      date: "June 24,2024",
      time: "5:50 PM",
      title: "UN chief calls for ‘dramatic shift’ to transform education worldwide",
      img: cardImg,
      pname: "Ashiq Umer",
      pcontent: "Content Creator | Jun 28, 2024",
    },
    {
      date: "June 24,2024",
      time: "5:50 PM",
      title: "UN chief calls for ‘dramatic shift’ to transform education worldwide",
      img: cardImg,
      pname: "Ashiq Umer",
      pcontent: "Content Creator | Jun 28, 2024",
    },
  ];

  return (
    <div className="flex flex-wrap h-fit md:pt-2">
      {CardItems.map((item, index) => (
        <div key={index} className={`${inter.className} w-1/2 px-1 sm:px-2`}>
          <div className=" rounded-xl border border-[#00000033]">
            {/* image */}
            <div className="h-40 md:h-72 xl:h-96 overflow-hidden rounded-t-xl">
              <Image
                src={item.img}
                alt="img"
                className="h-full w-full object-cover"
              />
            </div>

            {/* content */}
            <div className="p-2 md:p-3 xl:p-4">
              <p className="mb-1 text-[10.92px] md:text-[18.91px] xl:text-[30px] font-bold text-black">{item.title}</p>
            </div>

            {/* profile */}
            <div className="px-2">
              {/* data */}
              <div className="flex flex-col">
                <span className="text-[8.83px] md:text-[15.29px] xl:text-[21.02px] font-bold text-[#2095F2] mb-2">
                  {item.pname}
                </span>
                <span className="text-[7px] md:text-[9.73px] xl:text-[13.38px] font-medium text-[#00000099]">
                  {item.pcontent}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
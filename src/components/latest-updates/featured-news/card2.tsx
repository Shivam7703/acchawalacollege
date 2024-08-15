import React from "react";
import Image from "next/image";
import cardImg from "@/asset/news/card1.png";
import dpImg from "@/asset/news/card3.png";
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
      title:
        "GATE 2025: IIT Roorkee to conduct exams on February 1, 2, 15, 16",
      desc:"GATE 2025 will be held as a computer-based test (CBT) for a total of 30 test papers.GATE 2025 exam dates: The Indian Institute of Technology (IIT) Roorkee today announced the exam dates for the Graduate Aptitude Test Roorkee today announced the exam dates for the Graduate Aptitude Test in Engineering.",
      img: cardImg,
      dp: dpImg,
      pname: "Ashiq Umer",
      pcontent: "Content Creator | Jun 28, 2024",
    },
  ];

  return (
      <div className={`${inter.className}`}>
      {CardItems.map((item, index) => (
        <div key={index} className="mx-2 overflow-hidden rounded-3xl border border-[#0000004D] ">
          

          {/* profile  */}
          <div className="flex w-full items-center pl-1 md:pl-0 md:ml-2 md:my-5 md:py-2 xl:p-2 my-3 xl:pt-6">
            {/* pic  */}
            <div className="w-fit h-fit bg-white">
              <Image
               src={item.dp}
               alt="img"
               className="w-[33px] h-[33px] md:w-[43px] md:h-[43px] xl:w-[50px] xl:h-[50px] rounded-full object-cover"
             />
            </div>
            {/* content  */}
            <div className="flex flex-col ml-3 ">
              <span className="text-[12.07px] md:text-[15.87px] xl:text-xl text-[#2095F2] font-bold text-nowrap md:mb-2"> Ashik Umer</span>
              <span className="text-[#00000099] md:text-[10.1px] text-[7.68px] xl:text-sm font-medium text-nowrap">Content Curator | Jun 28, 2024</span>
            </div>
          </div>

          {/* image  */}
          <div className=" my-3 h-32 xl:h-72 w-full px-4 xl:px-6 xl:pt-4  relative">
            <Image
              src={item.img}
              alt="img"
              className=" h-full object-cover "
            />
          </div>

          
            {/* description  */}
          <div className="px-2 pb-2 md:px-3 md:pb-3 md:my-5 xl:px-4 xl:pt-5 xl:pb-1">
            <h2 className="mb-2 text-[15.37px] md:text-[20.2px] md:leading-[21.64px] md:mb-4 xl:text-2xl font-extrabold text-black leading-[16.46px] xl:leading-[28.67px] ">{item.title}</h2>
            <p className="text-[8.78px] md:text-[11.54px] md:leading-[21.64px] xl:text-lg font-base text-blacktext-black md:px-2">{item.desc} <Link href={""} className="text-[8.78px] xl:text-lg hover:underline underline-offset-4 text-[#2095F2]">Read More</Link> </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
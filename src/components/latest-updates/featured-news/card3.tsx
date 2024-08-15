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
      desc: "GATE 2025 will be held as a computer-based test (CBT) for a total of 30 test",
      img: cardImg,
      dp: dpImg,
      pname: "Ashiq Umer",
      pcontent: "Content Creator | Jun 28, 2024",
    },

  ];

  return (
      <div className={`${inter.className} mb-4`}>
      {CardItems.map((item, index) => (
        <div key={index} className="mx-2 overflow-hidden  rounded-3xl border border-[#0000004D]">
          {/* image  */}
          <div className="xl:h-72 w-full  md:p-4 xl:p-5  relative">
            <Image
              src={item.img}
              alt="img"
              className=" h-full object-cover rounded-2xl w-full"
            />
          </div>

          {/* profile  */}
          <div className="flex w-full p-2">
            {/* pic  */}
            <div className="w-fit h-fit bg-white">
              <Image
               src={item.dp}
               alt="img"
               className="md:w-[43.3px] md:h-[43.3px] xl:w-[50px] xl:h-[50px] rounded-full object-cover"
             />
            </div>
            {/* content  */}
            <div className="flex flex-col ml-3">
              <span className="md:text-[15.87px] xl:text-xl text-[#2095F2] font-bold">  {item.pname}</span>
              <span className="text-[#00000099] md:text-[10.1px] xl:text-sm font-medium">{item.pcontent}</span>
            </div>
          </div>
          

          <div className="p-4 pt-0">
            <h2 className="mb-1 md:text-[12.99px] xl:text-base font-bold text-black">{item.title}</h2>
            <p className=" md:text-[11.54px] xl:text-sm font-base text-black">{item.desc} <Link href={""} className="text-base underline underline-offset-4 text-[#2095F2]"></Link> </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
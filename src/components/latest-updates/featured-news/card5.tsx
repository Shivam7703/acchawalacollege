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
        title:
          "GATE 2025: IIT Roorkee to conduct exams on February 1, 2, 15, 16",
        desc: "GATE 2025 will be held as a computer-based test (CBT) for a total of 30 test",
        dp: dpImg,
        pname: "Ashiq Umer",
        pcontent: "Content Creator | Jun 28, 2024",
      },
      {
        title:
          "GATE 2025: IIT Roorkee to conduct exams on February 1, 2, 15, 16",
        desc: "GATE 2025 will be held as a computer-based test (CBT) for a total of 30 test",
        dp: dpImg,
        pname: "Ashiq Umer",
        pcontent: "Content Creator | Jun 28, 2024",
      },
      {
        title:
          "GATE 2025: IIT Roorkee to conduct exams on February 1, 2, 15, 16",
        desc: "GATE 2025 will be held as a computer-based test (CBT) for a total of 30 test",
        dp: dpImg,
        pname: "Ashiq Umer",
        pcontent: "Content Creator | Jun 28, 2024",
      },
      {
        title:
          "GATE 2025: IIT Roorkee to conduct exams on February 1, 2, 15, 16",
        desc: "GATE 2025 will be held as a computer-based test (CBT) for a total of 30 test",
        dp: dpImg,
        pname: "Ashiq Umer",
        pcontent: "Content Creator | Jun 28, 2024",
      },
    
  ];

  return (
      <div className={`${inter.className}`}>
      {CardItems.map((item, index) => (
        <div key={index} className=" md:p-1  xl:mx-1 mb-6 overflow-hidden border-b-2 border-[#00000033]">

          {/* profile  */}
          <div className="flex items-center w-full xl:mb-5 ">
            {/* pic  */}
            <div className=" bg-white md:w-2/5  xl:w-1/5">
              <Image
               src={item.dp}
               alt="img"
               className="w-[22px] h-[22px] md:w-[35.22px] md:h-[35.22px] xl:w-[35.22px] xl:h-[35.22px] rounded-full object-cover"
             />
            </div>
            {/* content  */}
            <div className="flex flex-col py-1 ml-2 md:ml-1 ">
              <span className="text-[9.88px] md-text-[17.2px]  xl:text-base text-[#2095F2] font-bold w-fit">{item.pname}</span>
              <span className="text-[#00000099] text-[5.49px] md:text-[9.56px] xl:text-xs font-medium text-wrap w-fit break-words">{item.pcontent}</span>
            </div>
          </div>
          

          <div className="md:px-2 md:pb-3 xl:px-4 xl:pb-5">
            <h2 className="mb-2 text-[9.88px] leading-[15.37px] md:text-[12.99px]  xl:leading-[26.76px] xl:text-base font-bold text-black">{item.title}</h2>
            <p className="text-[8.78px]   md:text-[11.54px] xl:text-sm font-base text-black">{item.desc} <Link href={""} className="text-base underline underline-offset-4 text-[#2095F2]"></Link> </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
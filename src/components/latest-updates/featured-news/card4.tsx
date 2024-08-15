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
    {id: 1,
      date: "June 24,2024",
      time: "5:50 PM",
      title:
        "UN chief calls for ‘dramatic shift’ to transform education worldwide",
      desc: "JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don’t wait any longer and....",
      img: cardImg,
      dp: dpImg,
      pname: "Ashiq Umer",
      pcontent: "Content Creator | Jun 28, 2024",
    },
    {id: 2,
      date: "June 24,2024",
      time: "5:50 PM",
      title:
        "UN chief calls for ‘dramatic shift’ to transform education worldwide",
      desc: "JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don’t wait any longer and....",
      img: cardImg,
      dp: dpImg,
      pname: "Ashiq Umer",
      pcontent: "Content Creator | Jun 28, 2024",
    },
  ];

  return (
      <div className={`${inter.className} `}>
      {CardItems.map((item, index) => (
        <div key={index} className="mx-2 overflow-hidden  rounded-3xl border border-[#00000033]">
          {/* image  */}
          <div className=" md:h-64 xl:h-96 w-full md:p-4 xl:p-5  relative">
            <Image
              src={item.img}
              alt="img"
              className=" h-full object-cover rounded-2xl w-full"
            />
          </div>

          {/* content  */}
          <div className="flex w-full  p-2">
            {/* pic  */}
            <div className="w-fit h-fit bg-white">
              <Image
               src={item.dp}
               alt="img"
               className="md:w-[43.3px] md:h-[43.3px] xl:w-[50px] xl:h-[50px] rounded-full object-cover"
             />
            </div>
            <div className="flex flex-col ml-3">
              <span className="md:text-[15.87px] xl:text-xl text-[#2095F2] font-bold"> {item.pname}</span>
              <span className="text-[#00000099] md:text-[10.1px] xl:text-sm font-medium">{item.pcontent}</span>
            </div>
          </div>
          
            {/* description  */}
          <div className="p-4">
            <div className="mb-2 md:text-[11.54px] xl:text-base font-normal text-[#000000]">
              <span>{item.date}</span> - <span>{item.time}</span>
            </div>
            <h2 className="mb-2 md:text-[14.43px] md:leading-[21.64px] xl:leading-[28.67px] xl:text-xl font-bold text-black">{item.title}</h2>
            <p className="md:text-[12.99px] md:leading-[21.64px] xl:leading-[28.67px] xl:text-lg font-base text-black">{item.desc} <Link href={""} className="md:text-[12.99px] xl:text-base underline underline-offset-4 text-[#2095F2]">Read More</Link> </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
import React from "react";
import Image from "next/image";
import cardImg from "@/asset/news/card1.png";
import dpImg from "@/asset/news/card2.png";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
});

function Card() {
  const CardItems = [
    {
      date: "June 24, 2024",
      time: "5:50 PM",
      title:
        "UN chief calls for ‘dramatic shift’ to transform education worldwide",
      desc: "JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don’t wait any longer and....",
      img: cardImg,
      dp: dpImg,
      pname: "Ashiq Umer",
      pcontent: "Content Creator | Jun 28, 2024",
    },
    {
      date: "June 25, 2024",
      time: "5:50 PM",
      title:
        "UN chief calls for ‘dramatic shift’ to transform education worldwide",
      desc: "JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don’t wait any longer and....",
      img: cardImg,
      dp: dpImg,
      pname: "Ashiq Umer",
      pcontent: "Content Creator | Jun 28, 2024",
    },
    {
      date: "June 26, 2024",
      time: "5:50 PM",
      title:
        "UN chief calls for ‘dramatic shift’ to transform education worldwide",
      desc: "JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don’t wait any longer and....",
      img: cardImg,
      dp: dpImg,
      pname: "Ashiq Umer",
      pcontent: "Content Creator | Jun 28, 2024",
    },
    {
      date: "June 26, 2024",
      time: "5:50 PM",
      title:
        "UN chief calls for ‘dramatic shift’ to transform education worldwide",
      desc: "JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don’t wait any longer and....",
      img: cardImg,
      dp: dpImg,
      pname: "Ashiq Umer",
      pcontent: "Content Creator | Jun 28, 2024",
    },
  ];

  return (
    <div className={`${inter.className} overflow-x-auto`}>
      <div className="flex flex-nowrap space-x-1 md:space-x-2 lg:space-x-4 xl:space-x-5 py-4  pl-1 lg:pl-2 xl:pl-3">
        {CardItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0  border border-[#00000033] rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl overflow-hidden w-[157px] lg:w-[326px]  xl:w-[429px]">
            {/* image  */}
            <div className="w-[157px] h-[107px] lg:w-[326px] lg:h-[223px] xl:w-[429px] xl:h-[294px]">
              <Image
                src={item.img}
                alt="Image description"
                className="object-cover w-full h-full"
              />
            </div>

            {/* profile  */}
            <div className="flex items-center p-1 xl:p-2 mt-2 xl:mt-4">
              {/* pic  */}
              <div className=" bg-white">
                <Image
                  src={item.dp}
                  alt="Profile picture"
                  className=" w-[20px] h-[20px] md:w-[43px] md:h-[43px] xl:w-[50px] xl:h-[50px] rounded-full object-cover"
                />
              </div>
              {/* content  */}
              <div className="flex flex-col ml-1 md:ml-2 xl:ml-3">
                <span className="text-[8.23px] md:text-[15.98px] xl:text-xl text-[#2095F2] font-bold">
                  {item.pname}
                </span>
                <span className="text-[#00000099] md:text-[10.17px]  text-[7.2px] xl:text-sm font-medium">
                  {item.pcontent}
                </span>
              </div>
            </div>

            <div className="p-1 md:p-2 xl:p-4">
              <div className="xl:mb-2 text-[8.23px] md:text-[12.16px] xl:text-base font-normal text-[#000000]">
                <span>{item.date}</span> - <span>{item.time}</span>
              </div>
              <h2 className="xl:mb-2 text-[10px] md:text-[15.2px] xl:text-xl font-bold text-black">
                {item.title}
              </h2>
              <p className=" text-[9px] md:text-[13.68px] xl:text-lg font-base text-black">
                {item.desc}{" "}
                <Link
                  href="/read-more"  // Replace with actual path
                  className="text-[9px] md:text-[13.68px] xl:text-base underline underline-offset-4 text-[#2095F2]"
                >
                  Read More
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
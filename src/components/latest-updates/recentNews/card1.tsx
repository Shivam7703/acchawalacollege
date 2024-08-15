import React from "react";
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
      title: "UN chief calls for ‘dramatic shift’ to transform education worldwide",
      desc: "GATE 2025 exam dates: be held as a computer-based test (CBT) for a total of 30 test papers. GATE 2025 examATE 2025 will be held as a computer-based test (CBT) for a total of 30 test papers. GATE 2025 exam dates: be held as a computer-based test (CBT) for a total of 30 test papers. GATE 2025 exam date",
    },
    {
      date: "June 24, 2024",
      time: "5:50 PM",
      title: "UN chief calls for ‘dramatic shift’ to transform education worldwide",
      desc: "GATE 2025 exam dates: be held as a computer-based test (CBT) for a total of 30 test papers. GATE 2025 examATE 2025 will be held as a computer-based test (CBT) for a total of 30 test papers. GATE 2025 exam dates: be held as a computer-based test (CBT) for a total of 30 test papers. GATE 2025 exam date",
    },
  ];

  return (
    <div className={`${inter.className}`}>
      <div className="block sm:hidden">
        <div className="mx-2 overflow-hidden border-b-2 border-[#00000033] p-1 mb-10 pb-3">
          <div>
            <h2 className="text-[21.47px] md:text-[21.82px] mb-7 xl:text-[30px] font-extrabold text-black">
              {CardItems[0].title}
            </h2>
            <p className="text-[14.19px] xl:text-[20px] font-normal text-black p-1">
              {CardItems[0].desc}{" "}
              <Link href={""} className="text-[14.19px] xl:text-[20px] hover:underline underline-offset-4 text-[#2095F2]">
                Read More
              </Link>
            </p>
          </div>
          <div className="mb-2 text-[11.64px] xl:text-[18px] font-normal text-[#000000] hidden sm:block md:mt-2 xl:mt-3">
            <span>{CardItems[0].date}</span> - <span>{CardItems[0].time}</span>
          </div>
        </div>
      </div>
      <div className="hidden sm:block space-y-6">
        {CardItems.map((item, index) => (
          <div key={index} className="mx-2 overflow-hidden border-b-2 border-[#00000033] pt-2 xl:pt-0">
            <div>
              <h2 className="text-[21.47px] md:text-[21.82px] mb-6 xl:text-[30px] font-extrabold text-black">{item.title}</h2>
              <p className="text-[14.19px] xl:text-[20px] font-normal text-black xl:p-1">
                {item.desc}{" "}
                <Link href={""} className="text-[14.19px] xl:text-[20px] hover:underline underline-offset-4 text-[#2095F2]">
                  Read More
                </Link>
              </p>
            </div>
            <div className="mb-2 text-[11.64px] xl:text-[18px] font-normal text-[#000000] hidden sm:block md:mt-2 xl:mt-3">
              <span>{item.date}</span> - <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
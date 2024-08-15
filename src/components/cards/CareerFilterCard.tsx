import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CiHeart, CiMobile1 } from "react-icons/ci";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { RiTodoLine } from "react-icons/ri";
import { Work_Sans } from "next/font/google";
import { TbBulb } from "react-icons/tb";

const work_sans = Work_Sans({
  subsets: ["latin"],
});

interface careerProps {
  img: StaticImageData;
  titleBg: string;
  education: string;
  package: number;
  skills: string;
  desc: string;
  name: string;
  readMore: string;
  navbar: string[];
  button1: { text: string };
  button2: { text: string };
}

interface CareerCardProps {
  career: careerProps;
}

const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  return (
    <section className={`${work_sans.className}`}>
      <div className="relative mb-5 w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="relative h-[300px] w-full  overflow-hidden">
          <Image
            src={career.img}
            alt="career"
            className=" h-full w-full  rounded-t-md object-cover max-md:w-full"
          />
          <div
            className="absolute bottom-1/3 flex w-full items-center justify-center py-2"
            style={{ backgroundColor: `rgba(${career.titleBg}, 0.5)` }}
          >
            <Link href={career.readMore}>
              <h1 className="text-nowrap text-[12px] font-semibold text-white hover:text-blue-500 md:text-[18.51px] xl:text-[26px]">
                {career.name}
              </h1>
            </Link>
          </div>
        </div>

        {/* Div 1 */}
        <div className="flex gap-y-2 py-3 max-md:flex-wrap">
          <div className="">
            {/* Line 3 */}
            <div className="mb-3 flex flex-wrap items-center gap-x-6">
              {/* item 1 */}
              <div className="flex flex-col">
                <div className="flex w-fit items-center gap-x-2">
                  <svg
                    className="h-[17.45px] w-[17.45px] text-[#2095F2] md:h-[32.74px] md:w-[32.74px]  xl:h-[45px]  xl:w-[45px]"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="48" fill="none" />
                    <path
                      d="M20 15C20 14.4477 20.4477 14 21 14H29C29.5523 14 30 14.4477 30 15C30 15.5523 29.5523 16 29 16H21C20.4477 16 20 15.5523 20 15Z"
                      fill="currentColor"
                    />
                    <path
                      d="M21 18C20.4477 18 20 18.4477 20 19C20 19.5523 20.4477 20 21 20H29C29.5523 20 30 19.5523 30 19C30 18.4477 29.5523 18 29 18H21Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20 28C20 27.4477 20.4477 27 21 27H29C29.5523 27 30 27.4477 30 28C30 28.5523 29.5523 29 29 29H21C20.4477 29 20 28.5523 20 28Z"
                      fill="currentColor"
                    />
                    <path
                      d="M21 31C20.4477 31 20 31.4477 20 32C20 32.5523 20.4477 33 21 33H29C29.5523 33 30 32.5523 30 32C30 31.4477 29.5523 31 29 31H21Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 27C10 26.4477 10.4477 26 11 26H16C16.5523 26 17 26.4477 17 27V32C17 32.5523 16.5523 33 16 33H11C10.4477 33 10 32.5523 10 32V27ZM12 28V31H15V28H12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.7071 15.7071C18.0976 15.3166 18.0976 14.6834 17.7071 14.2929C17.3166 13.9024 16.6834 13.9024 16.2929 14.2929L13 17.5858L11.7071 16.2929C11.3166 15.9024 10.6834 15.9024 10.2929 16.2929C9.90237 16.6834 9.90237 17.3166 10.2929 17.7071L13 20.4142L17.7071 15.7071Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 6C7.79086 6 6 7.79086 6 10V37.9992C6 40.2084 7.79086 41.9992 10 41.9992H30C32.2091 41.9992 34 40.2084 34 37.9992V10C34 7.79086 32.2091 6 30 6H10ZM8 10C8 8.89543 8.89543 8 10 8H30C31.1046 8 32 8.89543 32 10V37.9992C32 39.1038 31.1046 39.9992 30 39.9992H10C8.89543 39.9992 8 39.1038 8 37.9992V10Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M36 16C36 14.3431 37.3431 13 39 13C40.6569 13 42 14.3431 42 16V36.3028L39 40.8028L36 36.3028V16ZM39 15C38.4477 15 38 15.4477 38 16V18H40V16C40 15.4477 39.5523 15 39 15ZM39 37.1972L38 35.6972V20H40V35.6972L39 37.1972Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div>
                    <p className="text-[10px] font-semibold leading-none md:text-[14.24px] xl:text-[20px]">
                      {career.education.split(" ").slice(0, 2).join(" ")}
                      <br />
                      {career.education.split(" ").slice(2, 4).join(" ")}
                      <br />
                      {career.education.split(" ").slice(4).join(" ")}
                    </p>

                    <p className="text-[7px] text-zinc-400 md:text-[11.39px] xl:text-[16px]">
                      Education
                    </p>
                  </div>
                </div>
              </div>

              {/* item 2  */}
              <div className="flex flex-col items-center">
                <div className="flex gap-x-2">
                  <TbBulb className="h-[17.45px] w-[17.45px] text-[#2095F2] md:h-[32.74px] md:w-[32.74px]  xl:h-[45px] xl:w-[45px]" />
                  <div>
                    <p className="font-semibold">{career.skills}</p>
                    <p className="text-xs text-zinc-400">Skills</p>
                  </div>
                </div>
              </div>

              {/* item 3  */}
              <div className="flex flex-col">
                <div className="flex gap-x-2">
                  <FaHandHoldingDollar className="h-[17.45px] w-[17.45px] text-red-500 md:h-[32.74px] md:w-[32.74px]  xl:h-[45px] xl:w-[45px]" />
                  <div>
                    <p className="font-semibold">{career.package} lpa</p>
                    <p className="text-xs text-zinc-400">Avg Salary Range</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Line 4  */}
            <div className="flex gap-x-1 p-2 text-zinc-600">
              <p className="line-clamp-3 text-wrap text-[10px] leading-[15px]  [flex:11] md:text-[11.39px]  md:leading-[15.66px] xl:text-[16px] xl:leading-[22px]">
                <span className="line-clamp-2">{career.desc}</span>
                <span className="text-blue-500 hover:underline">
                  <Link href={career.readMore}>Read More</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* div 3  */}
        <div className="flex flex-wrap justify-between gap-y-2 border-t-2 border-black md:pt-5">
          {/* Navbar Items  */}
          <div className="hidden sm:block">
            <ul className=" flex flex-wrap items-center justify-center   gap-x-3 rounded-md bg-blue-100 px-4 py-1 text-sm text-blue-600">
              {career?.navbar?.map((item: string, index: number) => (
                <React.Fragment key={index}>
                  <Link href="#">
                    <li key={index} className="cursor-pointer hover:underline">
                      {item}
                    </li>
                  </Link>
                  {index !== career?.navbar.length - 1 && <li>|</li>}
                </React.Fragment>
              ))}
            </ul>
          </div>

          <div className="flex max-xl:w-full gap-2 max-xl:items-center max-xl:justify-center">
            {/* Like and bookmark */}
            <div className="flex  items-center gap-x-1 ">
              <Link href="#">
                <CiHeart className="w-fill h-fill"/>
              </Link>
              <span className="font-thin">|</span>{" "}
              <Link href="#">
                <CiMobile1 className="w-fill h-fill" />
              </Link>
            </div>

            {/* buttons  */}
            <div className="flex items-center gap-2 ">
              <Link href="#" className="">
                <button className="text-nowrap text-[8px] md:text-[11.39px] xl:text-[16px] rounded-sm md:rounded-md xl:rounded-lg border-2 border-blue-700 bg-blue-700 px-2 md:px-3 xl:px-4 py-1 xl:py-2 text-white hover:bg-white  hover:text-blue-500 max-md:w-full">
                  {career?.button1?.text}
                </button>
              </Link>
              <Link href="#" className="">
                <button className="text-nowrap text-[8px] md:text-[11.39px] xl:text-[16px] rounded-sm md:rounded-md xl:rounded-lg border-2 border-blue-700 px-2 md:px-3 xl:px-4 py-1 xl:py-2 text-blue-500 hover:bg-blue-700 hover:text-white max-md:w-full">
                  {career?.button2?.text}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCard;
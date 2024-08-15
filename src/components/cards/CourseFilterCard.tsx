import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { CiHeart, CiLocationOn, CiMobile1 } from "react-icons/ci";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { TbCoinRupee } from "react-icons/tb";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { RiTodoLine } from "react-icons/ri";
import { Work_Sans } from "next/font/google";

const work_sans = Work_Sans({
  subsets: ["latin"],
});

interface courseProps {
  img: StaticImageData,
  rating: number;
  reviews: number;
  state: string;
  city: string;
  courseType: string;
  avgFeePerYear: number;
  package: number;
  exam: string;
  desc: string;
  name: string;
  readMore: string;
  navbar: string[];
  button1: { text: string };
  button2: { text: string };
}

interface CourseCardProps {
  course: courseProps;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <section className={`${work_sans.className}`}>
      <div className="relative mb-5 w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        {/* Div 1 */}
        <div className="flex gap-y-2 p-5 max-md:flex-wrap">
          <Image
            src={course.img}
            alt="course"
            className="h-[160px] w-[200px] rounded-md max-md:w-full"
          />
          <div className="md:px-5">
            {/* Line 1  */}
            <div className="mb-1 xl:mb-2 flex flex-wrap gap-x-8 max-md:gap-1">
              <div className="flex items-center gap-x-2">
                <span className="flex items-center gap-x-1 rounded bg-green-600 px-1 text-sm font-thin text-white">
                  {course.rating} <FaStar className="mb-[1px]" />
                </span>
                <span className="text-xs text-blue-500">{`(${course.reviews} reviews)`}</span>
              </div>

              <div className="flex items-center gap-x-2">
                <CiLocationOn />
                <span className="text-xs text-blue-500">
                  {course.state && `${course.city}, ${course.state}`}
                </span>
              </div>

              <div className="flex items-center gap-x-2">
                <MdOutlineOutlinedFlag />
                <span className="text-xs text-blue-500">
                  {course.courseType} course
                </span>
              </div>
            </div>
            {/* Line 2  */}
            <Link href={course.readMore}>
              <h1 className=" mb-2 xl:mb-3 text-wrap text-[24px] font-bold hover:text-blue-500 leading-none xl:text-[26px]">
                {course.name}
              </h1>
            </Link>
            {/* Line 3 */}
            <div className="mb-2 xl:mb-3 flex flex-wrap gap-x-6">
              {/* item 1 */}
              <div className="flex flex-col">
                <div className="flex gap-x-2">
                  <TbCoinRupee className="text-3xl text-blue-500" />
                  <div>
                    <p className="font-semibold">
                      {course.avgFeePerYear} lac/sem
                    </p>
                    <p className="text-xs text-zinc-400">Fees</p>
                  </div>
                </div>
              </div>

              {/* item 2  */}
              <div className="flex flex-col">
                <div className="flex gap-x-2">
                  <FaHandHoldingDollar className="text-[20px] text-red-500" />
                  <div>
                    <p className="font-semibold">{course.package} lpa</p>
                    <p className="text-xs text-zinc-400">Avg Package</p>
                  </div>
                </div>
              </div>
              {/* item 3  */}
              <div className="flex flex-col">
                <div className="flex gap-x-2">
                  <RiTodoLine className="text-3xl text-blue-500" />
                  <div>
                    <p className="font-semibold">{course.exam}</p>
                    <p className="text-xs text-zinc-400">Exams</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Line 4  */}
            <div className="flex gap-x-1 text-zinc-600">
              <p className="line-clamp-2 text-wrap text-[11px] [flex:11]">
                <span className="line-clamp-2">{course.desc}</span>
                <span className="text-blue-500 hover:underline">
                  <Link href={course.readMore}>Read More</Link>
                </span>
              </p>
              <div className="flex items-center gap-x-1 text-3xl [flex:1]">
                <Link href="#">
                  <CiHeart />
                </Link>
                <span className="font-thin">|</span>{" "}
                <Link href="#">
                  <CiMobile1 />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* div 3  */}
        <div className="flex flex-wrap justify-between gap-y-2 border-t-2 border-black p-5">
          {/* Navbar Items  */}
          <ul className="flex flex-wrap items-center justify-center   gap-x-4 rounded-md bg-blue-100 px-4 py-1 text-sm text-blue-600">
            {course?.navbar?.map((item: string, index: number) => (
              <React.Fragment key={index}>
                <Link href="#">
                  <li key={index} className="cursor-pointer hover:underline">
                    {item}
                  </li>
                </Link>
                {index !== course?.navbar.length - 1 && <li>|</li>}
              </React.Fragment>
            ))}
          </ul>

          {/* buttons  */}
          <div className="flex  gap-2 max-md:w-full max-md:flex-col">
            <Link href="#" className="max-md:w-full">
              <button className="rounded-lg border-2 border-blue-700 bg-blue-700 px-4 py-2 text-white hover:bg-white  hover:text-blue-500 max-md:w-full">
                {course?.button1?.text}
              </button>
            </Link>
            <Link href="#" className="max-md:w-full">
              <button className="rounded-lg border-2 border-blue-700 px-2 py-2 text-blue-500 hover:bg-blue-700 hover:text-white max-md:w-full">
                {course?.button2?.text}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
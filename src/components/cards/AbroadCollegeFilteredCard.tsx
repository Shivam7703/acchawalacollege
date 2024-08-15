"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiHeart, CiLocationOn, CiMobile1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LuBadgeDollarSign } from "react-icons/lu";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";
import { TbCoinRupee, TbTransactionRupee } from "react-icons/tb";

export default function AbroadCollegeFilteredCard({ college }: any) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative mb-5 w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <Tag data={college?.tag} />
      {/* Div 1 */}
      <div className="flex gap-y-2 p-5 max-md:flex-wrap">
        {college.bgImage && (
          <Image
            src={college.bgImage?.url!}
            alt="collage"
            className="h-[180px] w-[240px] rounded-md object-cover max-md:w-full"
          />
        )}
        <div className="md:px-5">
          {/* Line 1  */}
          <div className="mb-3 flex flex-wrap gap-x-8 max-md:gap-1">
            <div className="flex items-center gap-x-2">
              {college?.reviews?.overallRating && (
                <span className="flex items-center gap-x-1 rounded bg-green-600 px-1 text-sm font-thin text-white">
                  {college?.reviews?.overallRating}{" "}
                  <FaStar className="mb-[1px]" />
                </span>
              )}
              <span className="text-xs text-blue-500">{`(${college?.reviews?.totalReviews} reviews)`}</span>
            </div>

            <div className="flex items-center gap-x-2">
              <CiLocationOn />
              <span className="text-xs text-blue-500">
                {college?.location?.city && `${college?.location?.city}, `}
                {college?.location?.state && `${college?.location?.state}, `}
                {college?.location?.country && `${college?.location?.country}`}
              </span>
            </div>

            <div className="flex items-center gap-x-2">
              <MdOutlineOutlinedFlag />
              <span className="text-xs text-blue-500">
                {college?.collegeType.slice(0, 3)}. Institution
              </span>
            </div>
          </div>
          {/* Line 2  */}
          <Link href={`/study-abroad/colleges/${college?.slug || "#"}`}>
            {college?.collegeName && (
              <h1 className="mb-3 text-wrap  font-bold hover:text-blue-950 md:text-xl">
                {college?.collegeName}
              </h1>
            )}
          </Link>
          {/* Line 3 */}
          <div className="mb-3 flex flex-wrap gap-x-6">
            {/* item 1 */}
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <LuBadgeDollarSign className="text-3xl text-blue-500" />
                <div className="gap-2 max-sm:flex">
                  <p className="font-semibold">{college.avgFeePerSem}</p>
                  <p className="text-xs text-zinc-400">Fees</p>
                </div>
              </div>
            </div>
            {/* item 2  */}
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <SlBadge className="text-3xl text-blue-500" />
                <div>
                  <p className="font-semibold">
                    {college?.affiliation &&
                      college?.affiliation?.map(
                        (item: string, index: number) => (
                          <React.Fragment key={item}>
                            {item}
                            {index !== college?.affiliation?.length - 1 &&
                              " & "}
                          </React.Fragment>
                        ),
                      )}
                  </p>
                  <p className="text-xs text-zinc-400">Accreditation</p>
                </div>
              </div>
            </div>
            {/* item 3  */}
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <FaHandHoldingDollar className="text-3xl text-red-500" />
                <div>
                  <p className="font-semibold">{college?.avgPackage}</p>
                  <p className="text-xs text-zinc-400">Avg Package</p>
                </div>
              </div>
            </div>
            {/* item 4  */}
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <RiTodoLine className="text-3xl text-blue-500" />
                <div>
                  <p className="font-semibold">
                    {college?.exam?.map((item: any, index: number) => (
                      <React.Fragment key={item}>
                        {item}
                        {index !== college?.exam?.length - 1 && ", "}
                      </React.Fragment>
                    ))}
                  </p>
                  <p className="text-xs text-zinc-400">Exams</p>
                </div>
              </div>
            </div>
          </div>
          {/* Line 4  */}
          <div className="flex gap-x-1 text-zinc-600">
            {college?.description && (
              <div className="flex flex-col">
                <p
                  className={`text-wrap text-sm [flex:11] ${isExpanded ? "" : "line-clamp-2"}`}
                >
                  {college?.description}
                </p>
                <button
                  onClick={handleReadMore}
                  className="w-min cursor-pointer text-nowrap text-sm text-blue-500 hover:underline"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            )}
            <div className="flex items-center gap-x-1 text-3xl [flex:1]">
              <CiHeart /> <span className="font-thin">|</span>{" "}
              <Link href={`/study-abroad/colleges/{college.slug || '#'}`}>
                <CiMobile1 />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* div 3  */}
      <div className="flex flex-wrap justify-between gap-y-2 border-t-2 border-blue-950 p-5">
        {/* Navbar Items  */}
        <ul className="flex flex-wrap items-center gap-x-2 rounded-md bg-blue-100 px-4 py-1 text-sm text-blue-600 sm:gap-x-4">
          {college?.collegeDetails
            ?.slice(0, 5)
            ?.map((item: any, index: number) => (
              <React.Fragment key={index}>
                <Link
                  href={`/study-abroad/colleges/${college?.slug || "#"}/#${item?.navItem}`}
                >
                  <li
                    key={index}
                    className="cursor-pointer capitalize hover:underline"
                  >
                    {item?.navItem}
                  </li>
                </Link>
                {index !== college?.collegeDetails?.length - 1 && <li>|</li>}
              </React.Fragment>
            ))}
          {college.collegeDetails?.length > 5 && (
            <Link href={`/study-abroad/colleges/${college?.slug} || '#'`}>
              <li className="cursor-pointer capitalize hover:underline">
                more
              </li>
            </Link>
          )}
        </ul>
        {/* buttons  */}
        <div className="flex gap-2 max-sm:w-full max-sm:flex-col">
          <Link href="#" className="hover:scale-95 max-sm:w-full">
            <button className="rounded-lg border-2 border-blue-950 bg-blue-950 px-4 py-2 capitalize text-white hover:bg-white hover:text-blue-950 max-md:w-full">
              Apply Now
            </button>
          </Link>
          <Link href="#" className="hover:scale-95 max-sm:w-full">
            <button className="rounded-lg border-2 border-blue-950 px-2 py-2 capitalize text-blue-950 hover:bg-blue-700 hover:text-white max-md:w-full">
              Ask Our Experts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Tag({ data }: any) {
  return (
    <div className="flex-center absolute right-5 top-0 flex-col text-center font-bold text-white">
      <p className="bg-blue-950 p-[8px]">#{data?.sequence}</p>
      <p className="z-10 rounded bg-blue-950 px-[9px]">{data?.tagName}</p>
      <div className="h-0 w-0 -translate-y-2 border-[18px] border-b-transparent border-l-blue-950 border-r-blue-950 border-t-blue-950"></div>
    </div>
  );
}

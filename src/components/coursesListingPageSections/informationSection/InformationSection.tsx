"use client";
import Wrapper from "@/components/Wrapper";
import CoursesCard1 from "@/components/cards/CoursesCard1";
import CoursesCard2 from "@/components/cards/CoursesCard2";
import useIsMobile from "@/customHooks/useIsMobile";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import Image from "next/image";
import React from "react";
import { CiClock2, CiPlay1 } from "react-icons/ci";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function InformationSection({ data }: any) {
  const isMobile = useIsMobile(640); // breakpoint
  return (
    <section className="my-16 w-full bg-white">
      <Wrapper>
        {data?.title1 && (
          <h2 className="text-sm text-blue-500 sm:ml-8">{data?.title1}</h2>
        )}
        {/* Title2  */}
        {data?.title2 && (
          <h1 className="title1 mb-5 sm:ml-8">
            {data?.title2?.t1 && (
              <span className=" text-[#012148]">{data?.title2?.t1} </span>
            )}
            {data?.title2?.t2 && (
              <span className=" text-blue-950">{data?.title2?.t2} </span>
            )}
            {data?.title2?.t3 && (
              <span className=" text-blue-500">{data?.title2?.t3}</span>
            )}
          </h1>
        )}
        {/* Videos section  */}
        {data?.thumbnails && (
          <div className="grid w-full grid-cols-1 gap-2 overflow-x-auto sm:grid-cols-3 md:mx-8 md:grid-cols-4">
            {data?.thumbnails?.map((d: any, i: number) => (
              <div key={i} className="relative overflow-hidden rounded-2xl max-sm:max-h-60">
                <Image
                  src={d?.img}
                  alt="thumbnail"
                  width={400}
                  className="h-80 object-cover"
                />
                <div
                  className="flex-center absolute left-0 top-0 h-full w-full bg-black/50 text-white
                "
                >
                  <IoPlayCircleOutline className="w-max cursor-pointer text-6xl" />
                </div>
                <div className="absolute bottom-0 left-0 h-max w-[90%] p-5 text-white">
                  {d?.title && (
                    <p className="text-sm">
                      {isMobile ? (
                        d?.title
                      ) : (
                        <TextWithLineBreak text={d?.title} />
                      )}
                    </p>
                  )}
                  <p className="flex items-center gap-x-1 text-sm">
                    {d?.timeLength && (
                      <>
                        <CiClock2 className="text-blue-500" />
                        {d?.timeLength} |
                      </>
                    )}
                    {d?.noOfViews && (
                      <>
                        <CiPlay1 className="text-blue-500" />
                        {d?.noOfViews}
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Featured Programs  */}
        {data?.card && (
          <div className="topColleges relative w-full">
            <CoursesCard1 data={data?.card} />
          </div>
        )}
        {/* Free Programs  */}
        {data?.freeProgramsCard && (
          <div className="topColleges relative w-full">
            <CoursesCard2 data={data?.freeProgramsCard} />
          </div>
        )}
      </Wrapper>
    </section>
  );
}

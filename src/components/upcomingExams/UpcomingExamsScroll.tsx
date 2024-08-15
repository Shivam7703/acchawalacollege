import React, { useRef, useState, useEffect } from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import Image from "next/image";
import { PiStudent } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { formatDate } from "@/utils/formatDate";
import { MdAutoGraph } from "react-icons/md";

export default function UpcomingExamsScroll({ data }: any) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - 300,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      handleScroll();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative mb-5 max-w-[1035px] rounded-lg bg-blue-200 pb-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {data?.title && (
        <h1 className="title1 p-6">
          {data?.title?.t1 && (
            <>
              <span className="text-blue-950">{data?.title?.t1}</span>{" "}
            </>
          )}
          {data?.title?.t2 && (
            <>
              <span className="text-blue-950">{data?.title?.t2}</span>{" "}
            </>
          )}
          {data?.title?.t3 && (
            <>
              <span className="text-blue-500">{data?.title?.t3} </span>{" "}
            </>
          )}
        </h1>
      )}
      <div
        className="flex w-full gap-6 overflow-x-hidden md:px-5"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {data?.exams?.map((exam: any, index: number) => (
          <div
            key={index}
            className="min-w-96 overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-xl max-md:min-w-[17.2rem]"
          >
            <ExamCardContent exam={exam} />
          </div>
        ))}
      </div>
      {showLeftButton && (
        <button
          className="absolute right-24 top-3 rounded-full bg-blue-500 p-3"
          onClick={handleScrollLeft}
        >
          <TiChevronLeft className="text-3xl text-white" />
        </button>
      )}
      {showRightButton && (
        <button
          className="absolute right-5 top-3 rounded-full bg-blue-500 p-3"
          onClick={handleScrollRight}
        >
          <TiChevronRight className="text-3xl text-white" />
        </button>
      )}
    </div>
  );
}

export const ExamCardContent = function ({ exam }: any) {
  return (
    <React.Fragment>
      <div className="flex-center relative w-full bg-blue-950/10 md:py-5">
        <Image src={exam?.img} alt="exam" className="h-32 object-contain" />
        {exam?.mode && (
          <div className="absolute md:right-2 md:top-2 right-1 top-1 flex flex-col gap-2 rounded-lg md:p-5 text-sm text-black">
            {exam?.mode?.map((item: any, index: number) => (
              <p
                key={index}
                className="rounded-e-full rounded-s-full border border-black px-3 py-1"
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col p-5 md:gap-3">
        {exam?.title && (
          <h4 className="mb-5 text-xl font-medium text-blue-950">
            {exam?.title}
          </h4>
        )}
        <p className="flex justify-between text-sm">
          <span className="flex-center gap-2 text-wrap">
            <PiStudent />
            Students Participating
          </span>
          <span className="flex gap-2">{exam?.studentsParticipation}</span>
        </p>
        {exam?.applicationFormDate && (
          <p className="flex justify-between text-sm">
            <span className="flex-center gap-2 text-wrap">
              <IoCalendarOutline />
              Registration Date
            </span>
            <span className="flex max-sm:flex-col">
              <span className="text-nowrap">
                {formatDate(exam?.applicationFormDate?.startDate)}
              </span>
              <span> - {formatDate(exam?.applicationFormDate?.endDate)}</span>
            </span>
          </p>
        )}
        {exam?.level && (
          <p className="flex justify-between text-sm">
            <span className="flex-center gap-2">
              <MdAutoGraph />
              Exam Level
            </span>
            <span className="flex capitalize max-sm:text-right">
              {exam?.level?.map((item: any, i: number) => (
                <React.Fragment key={i}>
                  {item}
                  {i !== exam?.level?.length - 1 ? ", " : ""}
                </React.Fragment>
              ))}
            </span>
          </p>
        )}
        <div className="mt-5 flex justify-between gap-2 md:gap-4 max-md:flex-col ">
          <button className="cardButton1">
            {exam?.button1.icon && <span>{exam?.button1?.icon}</span>}{" "}
            {exam.button1.text}
          </button>
          <button className="cardButton2">
            {exam?.button2?.icon && <span>{exam?.button2?.icon}</span>}{" "}
            {exam?.button2?.text}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

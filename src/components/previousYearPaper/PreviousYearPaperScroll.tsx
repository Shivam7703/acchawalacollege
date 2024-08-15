import React, { useRef, useState, useEffect } from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import Image from "next/image";
import { PiStudent } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { formatDate } from "@/utils/formatDate";
import { MdAutoGraph } from "react-icons/md";
import Link from "next/link";
import Navbar from "./Navbar";

export default function PreviousYearPaperScroll({ data }: any) {
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

  // Navbar
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelect = (index: any) => {
    setSelectedIndex(index);
  };

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
      {/* Navbar Filter  */}
      <Navbar
        category={data?.filterBy?.category}
        selectedNav={selectedIndex}
        onSelect={handleSelect}
      />
      <div
        className="flex w-full gap-6 overflow-x-hidden px-5"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {data?.papers?.map((paper: any, index: number) => (
          <div
            key={index}
            className="min-w-[280px] overflow-hidden rounded-xl border border-zinc-300 bg-white"
          >
            <PapersCardContent paper={paper} />
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

export const PapersCardContent = function ({ paper }: any) {
  return (
    <React.Fragment>
      <div className="flex-center relative w-full flex-col bg-blue-950/10 p-5 text-center">
        <Image src={paper?.img} alt="paper" className="h-20 object-contain" />
        {paper?.title && (
          <Link href={paper?.href || "#"}>
            <h4 className="md:text-xl text-lg font-medium text-blue-950">
              {paper?.title}
            </h4>
          </Link>
        )}
      </div>
    </React.Fragment>
  );
};

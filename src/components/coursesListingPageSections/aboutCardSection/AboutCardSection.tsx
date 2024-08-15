import Wrapper from "@/components/Wrapper";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import React from "react";
import { FaComputer, FaEarthAmericas } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { MdOutlineAutoGraph } from "react-icons/md";

export default function AboutCardSection({ data }: any) {
  const cardContentArray = [
    {
      icon: <FaComputer /> || "",
      title: data?.section1?.title || "",
      text: data?.section1?.text || "",
      isHighlights: data?.section1?.isHighlights || false,
    },
    {
      icon: <FaEarthAmericas /> || "",
      title: data?.section2.title || "",
      text: data.section2.text,
      isHighlights: data?.section2?.isHighlights || false,
    },
    {
      icon: <MdOutlineAutoGraph /> || "",
      title: data?.section3?.title || "",
      text: data?.section3?.text || "",
      isHighlights: data?.section3?.isHighlights || false,
    },
    {
      icon: <LuAlarmClock /> || "",
      title: data.section4.title || "",
      text: data.section4.text || "",
      isHighlights: data?.section4?.isHighlights || false,
    },
  ];
  return (
    <section className="my-16 w-full">
      <Wrapper className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        {cardContentArray?.map((d: any, i: number) => (
          <Card content={d} key={i} />
        ))}
      </Wrapper>
    </section>
  );
}

function Card({ content }: any) {
  return (
    <div
      className={`${!!content?.isHighlights ? "bg-blue-700 text-white " : "bg-white text-zinc-700"} flex w-full flex-wrap gap-3 rounded-lg border border-zinc-100 p-5 shadow-md md:p-10`}
    >
      <div className="w-max rounded border border-white bg-blue-700 p-3 text-4xl text-white">
        {content?.icon}
      </div>
      <h3 className="text-xl font-medium">
        <TextWithLineBreak text={content?.title} />
      </h3>
      <p className="text-sm">
        <TextWithLineBreak text={content?.text} />
      </p>
    </div>
  );
}

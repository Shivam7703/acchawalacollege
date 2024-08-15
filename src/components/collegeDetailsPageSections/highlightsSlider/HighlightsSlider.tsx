import Wrapper from "@/components/Wrapper";
import HighlightsCard from "@/components/cards/HighlightsCard";
import React from "react";

export default function HighlightsSlider({ data }: any) {
  return (
    <section className="my-16 mb-5 w-full">
      <Wrapper>
      <h2 className="title1 mb-8">
        <span className="text-blue-950/70">{data?.collegeName}</span>{" "}
        <span className="text-blue-950">Highlights</span>
      </h2>
      <div className="HighlightsSlider w-full relative">
        <HighlightsCard collegeDetails={data} />
      </div>
      </Wrapper>
    </section>
  );
}

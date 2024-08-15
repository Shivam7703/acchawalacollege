import Wrapper from "@/components/Wrapper";
import HighlightsCard from "./HighlightsCard";
import React from "react";

export default function HighlightsSlider({ data }: any) {
  return (
    <section className="my-16 mb-5 w-full">
      <Wrapper>
      <div className="HighlightsSlider w-full relative">
        <HighlightsCard data={data} />
      </div>
      </Wrapper>
    </section>
  );
}

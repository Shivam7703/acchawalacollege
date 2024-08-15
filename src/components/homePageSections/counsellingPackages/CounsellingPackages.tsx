"use client";
import Wrapper from "@/components/Wrapper";
import PackageCardSlider from "@/components/cards/PackageCard";
import React, { useState } from "react";

export default function CounsellingPackages({ data, sData }: any) {
  return (
    <section className="my-7 py-12 w-full bg-blue-200">
      <Wrapper isMaxWidthChangeRequired="max-w-[1500px]">
        {data?.title && (
          <h1 className="title1 mb-8 text-center">{data?.title}</h1>
        )}
        {data?.CounsellingPackagesCards && (
          <div className="Package relative w-full">
            <PackageCardSlider data={data?.CounsellingPackagesCards} />
          </div>
        )}
      </Wrapper>
    </section>
  );
}

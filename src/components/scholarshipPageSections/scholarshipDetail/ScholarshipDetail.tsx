"use client";
import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";

export default function ScholarshipDetail({ data }: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index: any) => {
    setSelectedIndex(index);
  };
  return (
    <section className="mb-14 w-full">
      <Wrapper>
        <Navbar
          courseDetails={data}
          onSelect={handleSelect}
          selectedIndex={selectedIndex}
        />
        <Content collegeDetails={data} selectedIndex={selectedIndex} />
      </Wrapper>
    </section>
  );
}

import React from "react";
import { examsPageData } from "@/data/examsPageData";
import HeroSection from "@/components/examDetailPageSections/heroSection/HeroSection";
import PageNavbarDetails from "@/components/pageNavbarDetails/PageNavbarDetails";
import Faqs from "@/components/faqs/Faqs";

export default function page() {
  return (
    <>
      <HeroSection data={examsPageData?.examDataArray[0]} />
      <PageNavbarDetails data={examsPageData?.examDataArray[0]?.examDetails} />
      <Faqs data={examsPageData?.examDataArray[0]?.faqs} />
    </>
  );
}

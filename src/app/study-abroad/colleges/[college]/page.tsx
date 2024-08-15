import React from "react";
import PageNavbarDetails from "@/components/pageNavbarDetails/PageNavbarDetails";
import Faqs from "@/components/faqs/Faqs";
import HeroSection from "@/components/studyAbroadDetailPageSections/HeroSection";
import { abroadColleges, studyAbroadData } from "@/data/studyAbroadPageData";
import Banner1 from "@/components/Banners/Banner1";
import AreYouConfused from "@/components/AreYouConfused";
import AbroadTopColleges from "@/components/studyAbroadPageSections/abroadTopColleges/AbroadTopColleges";
import TopScholarship from "@/components/topScholarship/TopScholarship";

export default function page() {
  return (
    <>
      <HeroSection data={abroadColleges?.[0]} />
      <PageNavbarDetails data={abroadColleges?.[0]?.collegeDetails} />
      <Banner1
        data={abroadColleges?.[0]?.banner1}
        sData={abroadColleges?.[0]?.banner1}
      />
      <AbroadTopColleges
        data={studyAbroadData?.topAbroadColleges}
        sliceValue={4}
      />
      <TopScholarship data={abroadColleges?.[0]?.scholarship} />
      <Faqs data={abroadColleges?.[0]?.faqs} />
      <AreYouConfused />
    </>
  );
}

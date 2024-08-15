import React from "react";
import BannerSection from "@/components/examsListingPageSections/heroSection/HeroSection";
import ExamListSection from "@/components/examsListingPageSections/examListSection/ExamListSection";
import { examsPageData } from "@/data/examsPageData";
import { global } from "@/data/globalData";
export default function examsPage() {
  return (
    <>
      <BannerSection data={examsPageData?.homeBanner} />
      <ExamListSection
        examDataArray={examsPageData?.examDataArray}
        filterBy={examsPageData?.filterBy}
        upcomingExams={global?.upcomingExams}
        previousYearPapers={global?.previousYearPapers}
      />
    </>
  );
}

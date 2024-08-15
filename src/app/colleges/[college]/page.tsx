import HeroSection from "@/components/collegeDetailsPageSections/heroSection/HeroSection";
// import InformationSection from "@/components/collegeDetailsPageSections/InformationSection";
import InformationSection from "@/components/coursesListingPageSections/informationSection/InformationSection";

import HighlightsSlider from "@/components/collegeDetailsPageSections/highlightsSlider/HighlightsSlider";
import Section3 from "@/components/collegeDetailsPageSections/section3/Section3";
import { collegeDetailsPage } from "@/data/collegeDetail";
import { global } from "@/data/globalData";
import React from "react";
import TopColleges from "@/components/topColleges/TopColleges";
import Section10 from "@/components/Section10";
import AreYouConfused from "@/components/AreYouConfused";
import CollegeDetail from "@/components/collegeDetailsPageSections/collegeDetail/CollegeDetail";
import Faqs from "@/components/faqs/Faqs";
import { courseListingPage } from "@/data/courseData";
import { examsPageData } from "@/data/examsPageData";
import { tabsSections } from "@/data/globalData";
import PageNavbarDetails from "@/components/pageNavbarDetails/PageNavbarDetails";
import CollegeFaculty from "@/components/collegeDetailsPageSections/collegeDetail/collegeFaculty";
import CompareCollege from "@/components/collegeDetailsPageSections/collegeDetail/compareCollege";

export default function CollegeDetails() {
  return (
    <>
      <HeroSection data={collegeDetailsPage} />
      {/* <CollegeDetail data={collegeDetailsPage?.collegeDetails} /> */}
      <PageNavbarDetails data={tabsSections} />
      {/* <Section3 data={collegeDetailsPage} />

      <HighlightsSlider data={collegeDetailsPage} />
      <InformationSection data={collegeDetailsPage?.topRecruiters} />
      <Section10 data={collegeDetailsPage?.brochureSection} />
      
      <InformationSection data={collegeDetailsPage?.reviews} />
           
      <TopColleges data={global?.topColleges} />
      <InformationSection data={collegeDetailsPage?.photoGallery} />
      <InformationSection data={collegeDetailsPage?.videoGallery} />
      <Faqs data={collegeDetailsPage?.faqs} />
      <InformationSection data={courseListingPage?.MBA?.featuredPrograms} />
      <InformationSection data={courseListingPage?.MBA?.freePrograms} /> */}
      <CollegeFaculty/>
      <CompareCollege/>
      <AreYouConfused />
    </>
  );
}

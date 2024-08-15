import React from "react";
import { courseListingPage } from "@/data/courseData";
import HeroSection from "@/components/coursesListingPageSections/heroSection/HeroSection";
import Section10 from "@/components/Section10";
import AboutCardSection from "@/components/coursesListingPageSections/aboutCardSection/AboutCardSection";
import TopCourses from "@/components/topCourses/TopCourses";
import BannerSection from "@/components/coursesListingPageSections/bannerSection/BannerSection";
import PartnersSection from "@/components/homePageSections/partnersSection/PartnersSection";
import Testimonials1 from "@/components/testimonials/Testimonials1";
import BlogAndOthersFilterSection from "@/components/homePageSections/blogAndOthersFilterSection/BlogAndOthersFilterSection";
import AreYouConfused from "@/components/AreYouConfused";
import InformationSection from "@/components/coursesListingPageSections/informationSection/InformationSection";
import { global } from "@/data/globalData";
import CourseListSection from "@/components/coursesListingPageSections/courseListSection/CourseListSection";

export default function coursesListing() {
  return (
    <>
      <HeroSection data={courseListingPage?.MBA?.homeBanner} />
      <Section10 data={courseListingPage?.MBA?.brochureSection} />
      <AboutCardSection data={courseListingPage?.MBA?.about} />
      <CourseListSection
        data={courseListingPage?.courseData}
        topColleges={global?.topColleges}
        filterBy={courseListingPage?.filterBy}
      />
      <TopCourses data={global?.topCourses} />
      <BannerSection data={courseListingPage?.MBA?.bannerSection} />
      <PartnersSection data={courseListingPage?.MBA?.partners} />
      <Testimonials1 data={courseListingPage?.MBA?.testimonial} />
      <BlogAndOthersFilterSection data={global?.BlogsAndOthers} />
      <InformationSection data={courseListingPage?.MBA?.videos} />
      <InformationSection data={courseListingPage?.MBA?.featuredPrograms} />
      <InformationSection data={courseListingPage?.MBA?.freePrograms} />
      <AreYouConfused />
    </>
  );
}

import AreYouConfused from "@/components/AreYouConfused";
import HeroSection from "@/components/courseDetailPageSections/heroSection/HeroSection";
import InformationSection from "@/components/courseDetailPageSections/informationSection/InformationSection";
import Faqs from "@/components/faqs/Faqs";
import PageNavbarDetails from "@/components/pageNavbarDetails/PageNavbarDetails";
import TopCourses from "@/components/topCourses/TopCourses";
import { courseDetailsPage } from "@/data/courseData";
import React from "react";
import { tabsSections } from "@/data/globalData";
import CareerCard from "@/components/cards/CareerFilterCard";
import { user1 } from "@/asset";
import ScholarshipCard from "@/components/cards/ScholarshipCard";
import CountryCard from "@/components/cards/StudyAbroadFilterCard";
import CourseCard from "@/components/cards/CourseFilterCard";

export default function CourseDetailPage() {


 
  
  // data for career card
  
  
  // data for country Card
 
  
  // data for scholarship card
  
  

  return (
    <>
      <HeroSection data={courseDetailsPage?.bTech?.homeBanner} />
      <PageNavbarDetails data={tabsSections} />

      {/* <PageNavbarDetails data={courseDetailsPage?.bTech?.courseDetails} /> */}
      <Faqs data={courseDetailsPage?.bTech?.faqs} />
      {/* Similar Courses  */}
      <TopCourses data={courseDetailsPage?.bTech?.similarCourses} />
      <InformationSection data={courseDetailsPage?.bTech?.moreCourses} />
     
      <AreYouConfused />
  
    
    </>
  );
}

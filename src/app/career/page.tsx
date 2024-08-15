"use client";
import React from "react";
import { global } from "@/data/globalData";
import { careerPage } from "@/data/careerpagedata";
import CareerListSection from "@/components/careerListingPageSection/CareerListSection";
import OfferingsDisplay from "@/components/cards/AcademicOfferingChart";
import PartnersSection from "@/components/homePageSections/partnersSection/PartnersSection";
import CareerForm from "@/components/career/Careerform";
import AnyQueries from "@/components/cards/AnyQueries";
import BuildBetterFuture from "@/components/cards/buildBetterFuture";
import Testimonials from "@/components/testimonials/Testimonials";
import { home } from "@/data/homePage";
import CounsellingPackages from "@/components/homePageSections/counsellingPackages/CounsellingPackages";
import BlogAndOthersFilterSection from "@/components/homePageSections/blogAndOthersFilterSection/BlogAndOthersFilterSection";
import AreYouConfused from "@/components/AreYouConfused";

export default function Colleges() {

 


  return (
    <>
      <CareerListSection
        data={ careerPage?.careerData}
        topColleges={global?.topColleges}
        filterBy={careerPage?.filterBy}
      />
      <OfferingsDisplay/>
      <PartnersSection data={global?.partners} 
      // sData={homePartnersData}
/>
      
<CareerForm/>
<AnyQueries/>   
   <BuildBetterFuture/>
   <Testimonials data={global?.testimonialsSection} />
   <CounsellingPackages
        data={home?.CounsellingPackages}
        // sData={counsellingPackagesData}
      />
            <BlogAndOthersFilterSection data={global?.BlogsAndOthers} />
            <AreYouConfused/>
    </>
  );
}

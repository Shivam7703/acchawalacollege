"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import CollegeListSection from "@/components/collegesListingPageSections/collegeListSection/CollegeListSection";
import HeroSection from "@/components/collegesListingPageSections/heroSection/HeroSection";
import Faqs from "@/components/faqs/Faqs";
import { collegePages } from "@/data/collegeData";
import { global } from "@/data/globalData";
import { getAllCollegesData } from "@/query/graphql/colleges";
import { flattenAttributes } from "@/utils/flattenAttributes";

export default function Colleges() {
  const [collegesDataArray, setCollegesDataArray] = useState<any>(null);

  const {
    data: colleges,
    loading: collegesLoader,
    error: collegesError,
  } = useQuery(getAllCollegesData);

  useEffect(() => {
    if (colleges) {
      setCollegesDataArray(flattenAttributes(colleges?.collegeDatas?.data?.[0]));
    }
  }, [colleges]);

  // useEffect(() => {
  //   if (colleges) {
  //     console.log(colleges, "colleges");
  //   }
  // }, [colleges]);


  return (
    <>
      <HeroSection data={collegePages?.bannerSection} />
      <CollegeListSection
        data={colleges?.CollegesDataArray || collegePages?.CollegesDataArray}
        topColleges={global?.topColleges}
        filterBy={collegePages?.filterBy}
      />
      {/* <Faqs data={collegePages?.faqs} /> */}
    </>
  );
}

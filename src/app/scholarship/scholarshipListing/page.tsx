"use client";

import React from "react";
import { global } from "@/data/globalData";
import { scholarshipPage } from "@/data/scholarshipData";
import ScholarshipListSection from "@/components/scholarshipListingPageSections/ScholarshipListSection";

export default function ScholarshipListPage() {
  return (
    <>
      <ScholarshipListSection 
        data={scholarshipPage?.scholarshipData} 
        topColleges={global?.topColleges} 
        filterBy={scholarshipPage?.filterBy} 
      />
    </>
  );
}
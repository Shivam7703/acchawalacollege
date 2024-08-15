"use client";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import SortButton from "@/components/sortButton/SortButton";
import { MdOutlineSort } from "react-icons/md";
import CollegeFilteredCard from "@/components/cards/CollegeFilteredCard";
import Wrapper from "@/components/Wrapper";
import ScholarshipFilters from "./ScholarshipFilter";
import TopCollegesScroll from "../topColleges/TopCollegesScroll";
import ScholarshipCard from "../cards/ScholarshipCard";
export default function ScholarshipListSection({
  data,
  topColleges,
  filterBy,
}: any) {
  const [MobileFilter, setMobileFilter] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);
  const [filteredData, setFilteredData] = useState<any>(data);
  const [SelectedFilters, setSelectedFilters] = useState({
    stream: [] as string[],
    courseDuration: 0,
    state: [] as string[],
    city: [] as string[],
    courses: [] as string[],
    programType: [] as string[],
    collegeType: [] as string[],
    avgFeePerYear: "",
    collegeCategory: [] as string[],
    affiliation: [] as string[],
    genderAccepted: "",
    ranking: "",
    examAccepted: [] as string[],
    country: [] as string[],
    scholarshipType: "",
    eligibilityCriteria: "",
    applicationStatus: "",
    provider: "",

  });
  const [StreamCheckedFilters, setStreamCheckedFilters] = useState<string[]>(
    [],
  );
  const [CourseCheckedDurationFilters, setCourseDurationFilters] =
    useState<number>(0);
  const [StateCheckedFilters, setStateCheckedFilter] = useState<string[]>([]);
  const [CityCheckedFilters, setCityCheckedFilter] = useState<string[]>([]);
  const [CoursesCheckedFilters, setCoursesCheckedFilters] = useState<string[]>(
    [],
  );
  const [ProgramTypeCheckedFilters, setProgramTypeCheckedFilters] = useState<
    string[]
  >([]);
  const [CollegeTypeCheckedFilters, setCollegeTypeCheckedFilters] = useState<
    string[]
  >([]);
  const [AvgFeePerYearCheckedFilters, setAvgFeePerYearCheckedFilters] =
    useState<string>("");
  const [CollegeCategoryCheckedFilters, setCollegeCategoryCheckedFilters] =
    useState<string[]>([]);
  const [AffiliationCheckedFilters, setAffiliationCheckedFilters] = useState<
    string[]
  >([]);
  const [GenderCheckedFilters, setGenderCheckedFilters] = useState<string>("");
  const [RankingCheckedFilters, setRankingCheckedFilters] =
    useState<string>("");
  const [ExamCheckedFilters, setExamCheckedFilters] = useState<string[]>([]);

  const [countryCheckedFilters, setCountryCheckedFilter] = useState<string[]>([]);
  const [eligibilityCriteriaFilters, setEligibilityCriteriaFilters] =
    useState<string>("");
    const [applicationStatusFilters, setApplicationStatusFilters] =
    useState<string>("");
    const [providerFilters, setProviderFilters] =
    useState<string>("");
    const [scholarshipTypeFilters, 
      setScholarshipTypeFilters] =
    useState<string>("");

  function handleSearch() {
    // search operation
  }

  const handleFilterOptionClick = (option: any) => {
    if (option === "a-z") {
      const sortedData: any = [...data].sort((a: any, b: any) => {
        return a?.name.localeCompare(b?.name);
      });
      setFilteredData(sortedData.slice(0, displayCount));
    } else if (option === "reset") {
      const resetArray: any = [...data].slice(0, displayCount);
      setFilteredData(resetArray);
    }
  };

  return (
    <section id="collegeList" className="my-5 w-full pb-5">
      <Wrapper className="flex flex-col md:flex-row">
        {/* Aside College Filter Section  */}
        <ScholarshipFilters
          filterBy={filterBy}
          SelectedFilters={SelectedFilters}
          setSelectedFilters={setSelectedFilters}
          totalResults={data?.length}
          mobileFilter={MobileFilter}
          setMobileFilter={setMobileFilter}
          // filter
          StreamCheckedFilters={StreamCheckedFilters}
          setStreamCheckedFilters={setStreamCheckedFilters}
          StateCheckedFilters={StateCheckedFilters}
          setStateCheckedFilter={setStateCheckedFilter}
          setCourseDurationFilters={setCourseDurationFilters}
          setAvgFeePerYearCheckedFilters={setAvgFeePerYearCheckedFilters}
          CityCheckedFilters={CityCheckedFilters}
          setCityCheckedFilter={setCityCheckedFilter}
          CoursesCheckedFilters={CoursesCheckedFilters}
          CourseCheckedDurationFilters={CourseCheckedDurationFilters}
          AvgFeePerYearCheckedFilters={AvgFeePerYearCheckedFilters}
          setCoursesCheckedFilters={setCoursesCheckedFilters}
          ProgramTypeCheckedFilters={ProgramTypeCheckedFilters}
          setCollegeCategoryCheckedFilters={setCollegeCategoryCheckedFilters}
          CollegeCategoryCheckedFilters={CollegeCategoryCheckedFilters}
          setProgramTypeCheckedFilters={setProgramTypeCheckedFilters}
          CollegeTypeCheckedFilters={CollegeTypeCheckedFilters}
          setCollegeTypeCheckedFilters={setCollegeTypeCheckedFilters}
          AffiliationCheckedFilters={AffiliationCheckedFilters}
          setAffiliationCheckedFilters={setAffiliationCheckedFilters}
          GenderCheckedFilters={GenderCheckedFilters}
          setGenderCheckedFilters={setGenderCheckedFilters}
          RankingCheckedFilters={RankingCheckedFilters}
          setRankingCheckedFilters={setRankingCheckedFilters}
          ExamCheckedFilters={ExamCheckedFilters}
          setExamCheckedFilters={setExamCheckedFilters}  
          
          countryCheckedFilters={countryCheckedFilters}
           setCountryCheckedFilter={setCountryCheckedFilter}
           eligibilityCriteriaFilters={eligibilityCriteriaFilters}
            setEligibilityCriteriaFilters={setEligibilityCriteriaFilters}
            applicationStatusFilters={applicationStatusFilters}
             setApplicationStatusFilters={setApplicationStatusFilters}
             providerFilters={providerFilters} setProviderFilters={setProviderFilters}
             scholarshipTypeFilters={scholarshipTypeFilters} 
             setScholarshipTypeFilters={setScholarshipTypeFilters}

             />
        {/* main College Search and List Section  */}
        <main className="flex w-full flex-col p-5 pt-0  md:min-w-[550px] md:[flex:8]">
          {/* Search and Sort Section  */}
          <div className="relative mb-4 flex items-stretch gap-4 max-md:flex-col">
            <div className="text-primary-text focus-within:border-secondary-text flex h-12 flex-1 items-center rounded-md border-2 border-zinc-300 bg-white px-2 shadow-md max-md:mt-5">
              <RiSearchLine className="text-blue-500" />
              <input
                className="w-full pl-5 focus:outline-none max-md:p-3"
                type="text"
                placeholder="Search Colleges Name"
                onChange={handleSearch}
              />
            </div>
            <div className="flex gap-4">
              {/* sort button  */}
              <SortButton handleFilterOptionClick={handleFilterOptionClick} />
              {/* Filter Button  */}
              <div
                className="hidden max-md:block"
                onClick={() => setMobileFilter((prev) => !prev)}
              >
                <div className="group flex h-12 cursor-pointer items-center gap-2 rounded-md border-2 border-blue-500 bg-blue-500 px-2 text-white">
                  <span>Filter</span>
                  <MdOutlineSort />
                </div>
              </div>
            </div>
          </div>
          {/* College List Section  */}
          <div className="flex flex-wrap justify-between">
          {filteredData.slice(0, 3).map((college: any) => (
          <ScholarshipCard data={college} />
          ))}</div>
          {/* Top Colleges Section  */}
          <TopCollegesScroll data={topColleges} />
          {/* Next College List Section  */}
          <div className="flex flex-wrap justify-between">
          {filteredData.slice(3).map((college: any) => (
            <ScholarshipCard data={college} />
           ))} </div>
        </main>
      </Wrapper>
    </section>
  );
}

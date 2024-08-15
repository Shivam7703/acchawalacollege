"use client";
import React, { useState } from "react";
import CareerFilters from "./CareerFilters";
import { RiSearchLine } from "react-icons/ri";
import SortButton from "@/components/sortButton/SortButton";
import { MdOutlineSort } from "react-icons/md";
import CollegeFilteredCard from "@/components/cards/CollegeFilteredCard";
import Wrapper from "@/components/Wrapper";
import TopCollegesScroll from "../topColleges/TopCollegesScroll";
import CareerCard from "../cards/CareerFilterCard";
export default function CollegeListSection({
  data,
  topColleges,
  filterBy,
}: any) {
  const [MobileFilter, setMobileFilter] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);
  const [filteredData, setFilteredData] = useState<any>(data);
  const [SelectedFilters, setSelectedFilters] = useState({
    stream: [] as string[],
    courses: [] as string[],
    salaryRange: "",
    experience: [] as string[],
    value: [] as string[],
    skill: [] as string[],
    education: [] as string[],
    location: "",
  });
  const [StreamCheckedFilters, setStreamCheckedFilters] = useState<string[]>(
    [],
  );
  const [CoursesCheckedFilters, setCoursesCheckedFilters] = useState<string[]>(
    [],
  );
  const [ExperienceCheckedFilters, setExperienceCheckedFilters] = useState<
    string[]
  >([]);
  const [ValueCheckedFilters, setValueCheckedFilters] = useState<
    string[]
  >([]);
 const [SkillCheckedFilters, setSkillCheckedFilters] = useState<
  string[]
>([]);const [EducationCheckedFilters, setEducationCheckedFilters] = useState<
string[]
>([]);
  const [SalaryRangeCheckedFilters, setSalaryRangeCheckedFilters] =
    useState<string>("");
 
  const [LocationCheckedFilters, setLocationCheckedFilters] =
    useState<string>("");
  
  // const [searchValue, setSearchValue] = useState("");
  // const [pageNo, setPageNo] = useState(1);
  // const [sortingParameterName, setSortingParameterName] = useState(
  //   "collegeSequence"
  // );

  


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
        <CareerFilters
          filterBy={filterBy}
          SelectedFilters={SelectedFilters}
          setSelectedFilters={setSelectedFilters}
          totalResults={data?.length}
          mobileFilter={MobileFilter}
          setMobileFilter={setMobileFilter}
          // filter
          StreamCheckedFilters={StreamCheckedFilters}
          setStreamCheckedFilters={setStreamCheckedFilters}
          setSalaryRangeCheckedFilters={setSalaryRangeCheckedFilters}
          CoursesCheckedFilters={CoursesCheckedFilters}
          SalaryRangeCheckedFilters={SalaryRangeCheckedFilters}
          setCoursesCheckedFilters={setCoursesCheckedFilters}
          ExperienceCheckedFilters={ExperienceCheckedFilters}
          setExperienceCheckedFilters={setExperienceCheckedFilters}
          LocationCheckedFilters={LocationCheckedFilters}
          setLocationCheckedFilters={setLocationCheckedFilters}
       ValueCheckedFilters ={ValueCheckedFilters} 
        setValueCheckedFilters ={setValueCheckedFilters}
         SkillCheckedFilters={SkillCheckedFilters}
          setSkillCheckedFilters={setSkillCheckedFilters}
         EducationCheckedFilters={EducationCheckedFilters}
          setEducationCheckedFilters={setEducationCheckedFilters}
         
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
          {filteredData.slice(0, 3).map((college: any) => (
            <CareerCard key={college.id} career={college} />
          ))}
          {/* Top Colleges Section  */}
          <TopCollegesScroll data={topColleges} />
          {/* Next College List Section  */}
          {filteredData.slice(3).map((college: any) => (
            <CareerCard key={college.id} career={college} />
          ))}
        </main>
      </Wrapper>
    </section>
  );
}

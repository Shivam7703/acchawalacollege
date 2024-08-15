"use client";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import SortButton from "@/components/sortButton/SortButton";
import { MdOutlineSort } from "react-icons/md";
import Wrapper from "@/components/Wrapper";
import Navbar from "./Navbar";
import AbroadCollegeFilteredCard from "@/components/cards/AbroadCollegeFilteredCard";
import CollegeFilters from "./CollegeFilters";
import CountryCard from "@/components/cards/StudyAbroadFilterCard";
export default function AbroadCollegeListSection({
  collegeDataArray,
  filterBy,
}: any) {
  const [MobileFilter, setMobileFilter] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);
  const [filteredData, setFilteredData] = useState<any>(collegeDataArray);
  const [SelectedFilters, setSelectedFilters] = useState({
       continent: [] as string[],
    language: [] as string[],
    region: [] as string[],
    programType: [] as string[],
    experience: [] as string[],
    value: [] as string[],
    skill: [] as string[],
    location: [] as string[],
  });
  const [ContinentFilters, setContinentFilters] = useState<string[]>([]);
  const [LanguageFilters, setLanguageFilters] =
    useState<string[]>([]);
  const [RegionFilters, setRegionFilter] = useState<string[]>([]);
  const [ExperienceFilters, setExperienceFilter] = useState<string[]>([]);
  const [ValueFilters, setValueFilters] = useState<string[]>(
    []
  );
  const [SkillFilters, setSkillFilters] = useState<string[]>(
    []
  );
  const [LocationFilters, setLocationFilters] = useState<string[]>(
    []
  );
  const [ProgramTypeCheckedFilters, setProgramTypeCheckedFilters] = useState<
    string[]
  >([]);



  function handleSearch() {
    // search operation
  }

  const handleMobileFilter = () => {
    setMobileFilter((pre) => !pre);
  };

  const handleFilterOptionClick = (option: any) => {
    if (option === "a-z") {
      const sortedData: any = [...collegeDataArray].sort((a: any, b: any) => {
        return a?.name?.localeCompare(b?.name);
      });
      setFilteredData(sortedData.slice(0, displayCount));
    } else if (option === "reset") {
      const resetArray: any = [...collegeDataArray]?.slice(0, displayCount);
      setFilteredData(resetArray);
    }
  };

  return (
    <section id="collegeList" className="my-5 w-full pb-5">
      <Wrapper className="flex flex-col md:flex-row">
        {/* Aside College Filter Section  */}
        <CollegeFilters
          filterBy={filterBy}
          SelectedFilters={SelectedFilters}
          setSelectedFilters={setSelectedFilters}
          totalResults={collegeDataArray?.length}
          mobileFilter={MobileFilter}
          setMobileFilter={setMobileFilter}

          ContinentFilters={ContinentFilters} setContinentFilters={setContinentFilters}
          LanguageFilters={LanguageFilters} setLanguageFilters={setLanguageFilters}
          RegionFilters={RegionFilters} setRegionFilter={setRegionFilter}
    ExperienceFilters={ExperienceFilters} setExperienceFilter={setExperienceFilter}
    ValueFilters={ValueFilters} setValueFilters={setValueFilters}
    SkillFilters={SkillFilters} setSkillFilters={setSkillFilters}
    LocationFilters={LocationFilters} setLocationFilters={setLocationFilters} 
    ProgramTypeCheckedFilters={ProgramTypeCheckedFilters} setProgramTypeCheckedFilters={setProgramTypeCheckedFilters}
        />
        {/* main Exam Search and List Section  */}
        <main className="flex w-full flex-col p-5 pt-0  md:min-w-[550px] md:[flex:8]">
          {/* Search and Sort Section  */}
          <div className="relative mb-4 flex items-stretch gap-4 max-md:flex-col">
            <div className="text-primary-text focus-within:border-secondary-text flex h-12 flex-1 items-center rounded-md border-2 border-zinc-300 bg-white px-2 shadow-md max-md:mt-5">
              <RiSearchLine className="text-blue-500" />
              <input
                className="w-full pl-5 focus:outline-none max-md:p-3"
                type="text"
                placeholder="Search Exam Name"
                onChange={handleSearch}
              />
            </div>
            <div className="flex gap-4">
              {/* sort button  */}
              <SortButton handleFilterOptionClick={handleFilterOptionClick} />
              {/* Filter Button  */}
              <div className="hidden max-md:block">
                <div className="group flex h-12 cursor-pointer items-center gap-2 rounded-md border-2 border-blue-500 bg-blue-500 px-2 text-white">
                  <span onClick={handleMobileFilter}>Filter</span>
                  <MdOutlineSort />
                </div>
              </div>
            </div>
          </div>
          {/* College List Section  */}
          {filteredData.slice(0, 2).map((college: any) => (
            <CountryCard key={college.id} country={college} />
          ))}
          {/* College List Section  */}
          {/* {filteredData.slice(3, 4).map((exam: any) => (
            <ExamFilteredCard key={exam.id} exam={exam} />
          ))} */}
          {/* College List Section  */}
          {/* {filteredData.slice(6).map((exam: any) => (
            <ExamFilteredCard key={exam.id} exam={exam} />
          ))} */}
        </main>
      </Wrapper>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import SortButton from "@/components/sortButton/SortButton";
import { MdOutlineSort } from "react-icons/md";
import ExamFilteredCard from "@/components/cards/ExamFilteredCard";
import Wrapper from "@/components/Wrapper";
import ExamFilters from "./ExamFilters";
import Navbar from "./Navbar";
import UpcomingExamsScroll from "@/components/upcomingExams/UpcomingExamsScroll";
import PreviousYearPaperScroll from "@/components/previousYearPaper/PreviousYearPaperScroll";
export default function ExamListSection({ examDataArray, filterBy, upcomingExams, previousYearPapers, }: any) {
  const [MobileFilter, setMobileFilter] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);
  const [filteredData, setFilteredData] = useState<any>(examDataArray);
  const [SelectedFilters, setSelectedFilters] = useState({
    stream: [] as string[],
    mode: [] as string[],
    level: [] as string[],
  });

  // Filter Checked
  const [StreamCheckedFilters, setStreamCheckedFilters] = useState<string[]>(
    [],
  );
  const [ModeCheckedFilters, setModeCheckedFilters] = useState<string[]>([]);
  const [LevelCheckedFilters, setLevelCheckedFilters] = useState<string[]>([]);

  function handleSearch() {
    // search operation
  }

  const handleMobileFilter = () => {
    setMobileFilter((pre) => !pre);
  };

  const handleFilterOptionClick = (option: any) => {
    if (option === "a-z") {
      const sortedData: any = [...examDataArray].sort((a: any, b: any) => {
        return a?.name?.localeCompare(b?.name);
      });
      setFilteredData(sortedData.slice(0, displayCount));
    } else if (option === "reset") {
      const resetArray: any = [...examDataArray]?.slice(0, displayCount);
      setFilteredData(resetArray);
    }
  };

  // Navbar 
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelect = (index: any) => {
    setSelectedIndex(index);
  };

  return (
    <section id="collegeList" className="my-5 w-full pb-5">
      <Wrapper className="flex flex-col md:flex-row">
        {/* Aside College Filter Section  */}
        <ExamFilters
          filterBy={filterBy}
          SelectedFilters={SelectedFilters}
          setSelectedFilters={setSelectedFilters}
          totalResults={examDataArray?.length}
          mobileFilter={MobileFilter}
          setMobileFilter={setMobileFilter}
          // filter
          StreamCheckedFilters={StreamCheckedFilters}
          setStreamCheckedFilters={setStreamCheckedFilters}
          ModeCheckedFilters={ModeCheckedFilters}
          setModeCheckedFilters={setModeCheckedFilters}
          LevelCheckedFilters={LevelCheckedFilters}
          setLevelCheckedFilters={setLevelCheckedFilters}
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
          {/* Navbar Filter  */}
          <Navbar
            category={filterBy?.category}
            selectedNav={selectedIndex}
            onSelect={handleSelect}
          />
          {/* College List Section  */}
          {filteredData.slice(0, 2).map((exam: any) => (
            <ExamFilteredCard key={exam.id} exam={exam} />
          ))}
          {/* Upcoming Exams Section  */}
          <UpcomingExamsScroll data={upcomingExams} />
          {/* College List Section  */}
          {filteredData.slice(3, 4).map((exam: any) => (
            <ExamFilteredCard key={exam.id} exam={exam} />
          ))}
          {/* Previous Year Paper  */}
          <PreviousYearPaperScroll data={previousYearPapers} />
          {/* College List Section  */}
          {filteredData.slice(6).map((exam: any) => (
            <ExamFilteredCard key={exam.id} exam={exam} />
          ))}
        </main>
      </Wrapper>
    </section>
  );
}

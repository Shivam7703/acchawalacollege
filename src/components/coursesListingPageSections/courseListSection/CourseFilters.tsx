"use client";
import Filter from "@/components/filters/filter1";
import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";

export default function CourseFilters({
  filterBy,
  SelectedFilters,
  setSelectedFilters,
  totalResults,
  mobileFilter,
  setMobileFilter,
  StreamCheckedFilters,
  setStreamCheckedFilters,
 
  CoursesCheckedFilters,
  setAvgFeePerYearCheckedFilters,
  setCoursesCheckedFilters,
  CourseCheckedDurationFilters,
  setProgramTypeCheckedFilters,
  AvgFeePerYearCheckedFilters,
  ProgramTypeCheckedFilters,
 
  setCourseDurationFilters,
  
}: any) {
  // Filter Checked
  // const [StreamCheckedFilters, setStreamCheckedFilters] = useState<string[]>(
  //   [],
  // );
  // const [CourseCheckedDurationFilters, setCourseDurationFilters] =
  //   useState<number>(0);
  // const [StateCheckedFilters, setStateCheckedFilter] = useState<string[]>([]);
  // const [CityCheckedFilters, setCityCheckedFilter] = useState<string[]>([]);
  // const [CoursesCheckedFilters, setCoursesCheckedFilters] = useState<string[]>(
  //   [],
  // );
  // const [ProgramTypeCheckedFilters, setProgramTypeCheckedFilters] = useState<
  //   string[]
  // >([]);
  // const [CollegeTypeCheckedFilters, setCollegeTypeCheckedFilters] = useState<
  //   string[]
  // >([]);
  // const [AvgFeePerYearCheckedFilters, setAvgFeePerYearCheckedFilters] =
  //   useState<string>("");
  // const [CollegeCategoryCheckedFilters, setCollegeCategoryCheckedFilters] =
  //   useState<string[]>([]);
  // const [AffiliationCheckedFilters, setAffiliationCheckedFilters] = useState<
  //   string[]
  // >([]);
  // const [GenderCheckedFilters, setGenderCheckedFilters] = useState<string>("");
  // const [RankingCheckedFilters, setRankingCheckedFilters] =
  //   useState<string>("");
  // const [ExamCheckedFilters, setExamCheckedFilters] = useState<string[]>([]);

  // handleFilter functions
  const handleStreamFilter = (data: string) => {
    // Toggle the selection
    const updatedSelection = StreamCheckedFilters.includes(data)
      ? StreamCheckedFilters.filter((item: string) => item !== data)
      : [...StreamCheckedFilters, data];
    setStreamCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      stream: updatedSelection,
    }));
  };

  const handleCourseDurationFilter = (data: any) => {
    setCourseDurationFilters(data);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      courseDuration: data,
    }));
  };

  const handleAvgFeePerYearFilter = (data: any) => {
    setAvgFeePerYearCheckedFilters(data);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      avgFeePerYear: data,
    }));
  };

  



  const handleCourseFilter = (data: any) => {
    // Toggle the selection
    const updatedSelection = CoursesCheckedFilters.includes(data)
      ? CoursesCheckedFilters.filter((item: any) => item !== data)
      : [...CoursesCheckedFilters, data];
    setCoursesCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      course: updatedSelection,
    }));
  };

  const handleProgramTypeFilter = (data: any) => {
    // Toggle the selection
    const updatedSelection = ProgramTypeCheckedFilters.includes(data)
      ? ProgramTypeCheckedFilters.filter((item: any) => item !== data)
      : [...ProgramTypeCheckedFilters, data];
    setProgramTypeCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      programType: updatedSelection,
    }));
  };

 

 

  // function to remove filters from selected filter
  const handleUnselectFilter = (filter?: string, name?: string) => {
    if (filter === "stream") {
      setStreamCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        stream: [],
      }));
    
    } else if (filter === "courses") {
      setCoursesCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        courses: [],
      }));
    } else if (filter === "programType") {
      setProgramTypeCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        programType: [],
      }));
    }  else if (filter === "courseDuration") {
      setCourseDurationFilters(0);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        courseDuration: 0,
      }));
    } else if (filter === "avgFeePerYear") {
      setAvgFeePerYearCheckedFilters("");
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        avgFeePerYear: "",
      }));
    } 
  };

  return (
    <aside
      className={`min-w-[300px] px-3 [flex:2] max-md:bg-black max-md:bg-opacity-80  ${mobileFilter ? "fixed left-0 top-0 z-40 h-screen w-full overflow-y-scroll pr-[20%]" : "max-md:hidden"}`}
    >
      <button
        className="fixed right-5 top-24 text-3xl text-white md:hidden"
        onClick={() => setMobileFilter(false)}
      >
        <IoIosCloseCircleOutline />
      </button>
      <h1 className="mb-10 font-medium max-md:mt-0">
        Showing {totalResults} Colleges
      </h1>
      <div className="w-full rounded border-2 border-zinc-300 bg-white p-5 pb-0 max-md:bg-opacity-95">
        <h2 className="mb-5 font-medium">Find colleges</h2>
        {/* Selected filters display */}
        <div className="flex flex-wrap items-center gap-1">
          {Object.values(SelectedFilters).some(
            (value) =>
              value !== "" &&
              value !== 0 &&
              (!Array.isArray(value) || value.length !== 0),
          ) && <span className="text-xs font-bold">Filters Applied : </span>}
          {Object.entries(SelectedFilters).map(([key, value]: any) => {
            if (Array.isArray(value)) {
              // If the value is an array, join its elements with commas
              value = value.join(" , ");
            } else if (key === "courseDuration") {
              const duration: any =
                typeof value === "string" ? parseInt(value) : value;
              return (
                value !== "" &&
                value !== 0 && (
                  <div
                    key={key}
                    className="flex w-max items-center gap-1 rounded-md border border-blue-500 px-2 py-1 text-xs"
                  >
                    <span>
                      {Math.floor(duration / 12)} years {duration % 12} months
                    </span>
                    <button
                      onClick={() => handleUnselectFilter(key, value as string)}
                    >
                      <MdClose />
                    </button>
                  </div>
                )
              );
            }
            return (
              value !== "" &&
              (!Array.isArray(value) || value.length !== 0) && (
                <div
                  key={key}
                  className="flex w-max items-center gap-1 rounded-md border border-blue-500 px-2 py-1 text-xs"
                >
                  <span className="max-w-[150px] text-wrap">{value}</span>
                  <button onClick={() => handleUnselectFilter(key, value)}>
                    <MdClose />
                  </button>
                </div>
              )
            );
          })}
        </div>
        {/*END  shows filter by options  */}

        {/* Filters  */}
        <Filter
          title="STREAM"
          filterList={filterBy?.stream}
          handleFilter={handleStreamFilter}
          checked={StreamCheckedFilters}
        />
        <Filter
          title="COURSE DURATION"
          filterList={filterBy?.courseDuration}
          handleFilter={handleCourseDurationFilter}
          checked={CourseCheckedDurationFilters}
        />
        <Filter
          title="AVG FEE PER YEAR"
          filterList={filterBy?.avgFeePerYear}
          handleFilter={handleAvgFeePerYearFilter}
          checked={AvgFeePerYearCheckedFilters}
        />
       
        <Filter
          title="COURSE"
          filterList={filterBy?.course}
          handleFilter={handleCourseFilter}
          checked={CoursesCheckedFilters}
        />
        <Filter
          title="PROGRAM TYPE"
          filterList={filterBy?.programType}
          handleFilter={handleProgramTypeFilter}
          checked={ProgramTypeCheckedFilters}
        />
        
      </div>
    </aside>
  );
}

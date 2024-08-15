"use client";
import Filter from "@/components/filters/filter1";
import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";

export default function CareerFilters({
  filterBy,
  SelectedFilters,
  setSelectedFilters,
  totalResults,
  mobileFilter,
  setMobileFilter,
  StreamCheckedFilters,
  setStreamCheckedFilters,
  setSalaryRangeCheckedFilters,
  CoursesCheckedFilters,
  SalaryRangeCheckedFilters,
  setCoursesCheckedFilters,
  ExperienceCheckedFilters,
  setExperienceCheckedFilters,
  LocationCheckedFilters,
  setLocationCheckedFilters,
ValueCheckedFilters,
setValueCheckedFilters,
 SkillCheckedFilters,
  setSkillCheckedFilters,
 EducationCheckedFilters,
  setEducationCheckedFilters
}: any) {
  

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

  const handleSalaryRangeFilter = (data: any) => {
    setSalaryRangeCheckedFilters(data);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      salaryRange: data,
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

  const handleEducationFilter = (data: any) => {
    // Toggle the selection
    const updatedSelection = EducationCheckedFilters.includes(data)
      ? EducationCheckedFilters.filter((item: any) => item !== data)
      : [...EducationCheckedFilters, data];
    setEducationCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      course: updatedSelection,
    }));
  };

  const handleExperienceFilter = (data: any) => {
    // Toggle the selection
    const updatedSelection = ExperienceCheckedFilters.includes(data)
      ? ExperienceCheckedFilters.filter((item: any) => item !== data)
      : [...ExperienceCheckedFilters, data];
    setExperienceCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      experience: updatedSelection,
    }));
  };

  const handleValueFilter = (data: any) => {
    // Toggle the selection
    const updatedSelection = ValueCheckedFilters.includes(data)
      ? ValueCheckedFilters.filter((item: any) => item !== data)
      : [...ValueCheckedFilters, data];
    setValueCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      value: updatedSelection,
    }));
  };
  const handleSkillFilter = (data: any) => {
    // Toggle the selection
    const updatedSelection = SkillCheckedFilters.includes(data)
      ? SkillCheckedFilters.filter((item: any) => item !== data)
      : [...SkillCheckedFilters, data];
    setSkillCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      skill: updatedSelection,
    }));
  };
 const handleLocationFilter = (data: any) => {
    setLocationCheckedFilters(data);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      location: data,
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
    }
    else if (filter === "experience") {
        setCoursesCheckedFilters([]);
        setSelectedFilters((prevData: any) => ({
          ...prevData,
          experience: [],
        }));
      }
      else if (filter === "value") {
        setCoursesCheckedFilters([]);
        setSelectedFilters((prevData: any) => ({
          ...prevData,
          value: [],
        }));
      }
      else if (filter === "skill") {
        setCoursesCheckedFilters([]);
        setSelectedFilters((prevData: any) => ({
          ...prevData,
          skill: [],
        }));
      }
      else if (filter === "education") {
        setEducationCheckedFilters([]);
        setSelectedFilters((prevData: any) => ({
          ...prevData,
          education: [],
        }));
      }
       else if (filter === "SalaryRange") {
      setSalaryRangeCheckedFilters("");
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        salaryRange: "",
      }));
    }else if (filter === "Location") {
      setLocationCheckedFilters("");
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        location: "",
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
          title="COURSE"
          filterList={filterBy?.course}
          handleFilter={handleCourseFilter}
          checked={CoursesCheckedFilters}
        />
        <Filter
          title="SALARY RANGE"
          filterList={filterBy?.salaryRange}
          handleFilter={handleSalaryRangeFilter}
          checked={SalaryRangeCheckedFilters}
        />
          <Filter
          title="EXPERIENCE"
          filterList={filterBy?.experience}
          handleFilter={handleExperienceFilter}
          checked={ExperienceCheckedFilters}
        />
         <Filter
          title="VALUES"
          filterList={filterBy?.value}
          handleFilter={handleValueFilter}
          checked={ValueCheckedFilters}
        />
         <Filter
          title="SKILLS"
          filterList={filterBy?.skill}
          handleFilter={handleSkillFilter}
          checked={SkillCheckedFilters}
        />
          <Filter
          title="EDUCATION"
          filterList={filterBy?.education}
          handleFilter={handleEducationFilter}
          checked={EducationCheckedFilters}
        />
        <Filter
        title="LOCATION"
        filterList={filterBy?.location}
        handleFilter={handleLocationFilter}
        checked={LocationCheckedFilters}
      />
      </div>
    </aside>
  );
}

"use client";
import Filter from "@/components/filters/filter1";
import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";

export default function CollegeFilters({
  filterBy,
  SelectedFilters,
  setSelectedFilters,
  totalResults,
  mobileFilter,
  setMobileFilter,

  ContinentFilters, setContinentFilters,
  LanguageFilters, setLanguageFilters,
  RegionFilters, setRegionFilter,
ExperienceFilters, setExperienceFilter,
ValueFilters, setValueFilters,
SkillFilters, setSkillFilters,
LocationFilters, setLocationFilters, 
ProgramTypeCheckedFilters, setProgramTypeCheckedFilters
}: any) {
  // Filter Checked


  // handleFilter functions
  const handleContinentFilter = (data: string) => {
    // Toggle the selection
    const updatedSelection = ContinentFilters.includes(data)
      ? ContinentFilters.filter((item: string) => item !== data)
      : [...ContinentFilters, data];
      setContinentFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      continent: updatedSelection,
    }));
  }; const handleLanguageFilter = (data: string) => {
    // Toggle the selection
    const updatedSelection = LanguageFilters.includes(data)
      ? LanguageFilters.filter((item: string) => item !== data)
      : [...LanguageFilters, data];
    setLanguageFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      language: updatedSelection,
    }));
  }; const handleRegionFilter = (data: string) => {
    // Toggle the selection
    const updatedSelection = RegionFilters.includes(data)
      ? RegionFilters.filter((item: string) => item !== data)
      : [...RegionFilters, data];
    setRegionFilter(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      region: updatedSelection,
    }));
  };
  const handleExperienceFilter = (data: string) => {
    // Toggle the selection
    const updatedSelection = ExperienceFilters.includes(data)
      ? ExperienceFilters.filter((item: string) => item !== data)
      : [...ExperienceFilters, data];
    setExperienceFilter(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      experience: updatedSelection,
    }));
  }; const handleValueFilter = (data: string) => {
    // Toggle the selection
    const updatedSelection = ValueFilters.includes(data)
      ? ValueFilters.filter((item: string) => item !== data)
      : [...ValueFilters, data];
    setValueFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      value: updatedSelection,
    }));
  }; const handleSkillFilter = (data: string) => {
    // Toggle the selection
    const updatedSelection = SkillFilters.includes(data)
      ? SkillFilters.filter((item: string) => item !== data)
      : [...SkillFilters, data];
    setSkillFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      skill: updatedSelection,
    }));
  };
  const handleLocationFilter = (data: any) => {
    setLocationFilters(data);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      location: data,
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
    if (filter === "continent") {
      setContinentFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        continent: [],
      }));
    } else if (filter === "language") {
      setLanguageFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        language: [],
      }));
    } else if (filter === "region") {
      setRegionFilter([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        region: [],
      }));
    } else if (filter === "experience") {
      setExperienceFilter([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        experience: [],
      }));
    } else if (filter === "programType") {
      setProgramTypeCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        programType: [],
      }));
    } else if (filter === "value") {
      setValueFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        value: [],
      }));
    } else if (filter === "skill") {
      setSkillFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        skill: [],
      }));
    } else if (filter === "location") {
      setLocationFilters("");
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        location: '',
      }));
    }
  }
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
          title="CONTINENTS"
          filterList={filterBy?.continent}
          handleFilter={handleContinentFilter}
          checked={ContinentFilters}
        />
        <Filter
          title="LANGUAGE"
          filterList={filterBy?.language}
          handleFilter={handleLanguageFilter}
          checked={LanguageFilters}
        />
        <Filter
          title="REGION"
          filterList={filterBy?.region}
          handleFilter={handleRegionFilter}
          checked={RegionFilters}
        />
          <Filter
          title="PROGRAM TYPE"
          filterList={filterBy?.programType}
          handleFilter={handleProgramTypeFilter}
          checked={ProgramTypeCheckedFilters}
        />
        <Filter
          title="EXPERIENCE"
          filterList={filterBy?.experience}
          handleFilter={handleExperienceFilter}
          checked={ExperienceFilters}
        />
        <Filter
          title="VALUES"
          filterList={filterBy?.value}
          handleFilter={handleValueFilter}
          checked={ValueFilters}
        />
        <Filter
          title="SKILLS"
          filterList={filterBy?.skill}
          handleFilter={handleSkillFilter}
          checked={SkillFilters}
        />
        <Filter
          title="LOCATION"
          filterList={filterBy?.location}
          handleFilter={handleLocationFilter}
          checked={LocationFilters}
        />
        
      </div>
    </aside>
  );
}

"use client";
import Filter from "@/components/filters/filter1";
import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";

export default function ScholarshipFilters({
  filterBy,
  SelectedFilters,
  setSelectedFilters,
  totalResults,
  mobileFilter,
  setMobileFilter,



  countryCheckedFilters,
  setCountryCheckedFilter,
  eligibilityCriteriaFilters,
   setEligibilityCriteriaFilters,
   applicationStatusFilters,
    setApplicationStatusFilters,
    providerFilters, 
    setProviderFilters,
    scholarshipTypeFilters,
    setScholarshipTypeFilters
}: any) {
  
  // handleFilter functions
 



  const handleCountryFilter = (data: string) => {
    // Toggle the selection
    const updatedSelection = countryCheckedFilters.includes(data)
      ? countryCheckedFilters.filter((item: string) => item !== data)
      : [...countryCheckedFilters, data];
    setCountryCheckedFilter(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      country: updatedSelection,
    }));
  };

  const handleEligibilityFilter = (data: any) => {
    setEligibilityCriteriaFilters(data);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      eligibilityCriteria: data,
    }));
  };
  const handleApplicationStatusFilter = (data: any) => {
    setApplicationStatusFilters(data);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      applicationStatus: data,
    }));
  };
  const handleScholarshipTypeFilter = (data: any) => {
    setScholarshipTypeFilters(data);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      scholarshipType: data,
    }));
  };
  const handleProviderFilter = (data: any) => {
    setProviderFilters(data);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      provider: data,
    }));
  };



 
  // function to remove filters from selected filter
  const handleUnselectFilter = (filter?: string, name?: string) => {
    if (filter === "country") {
      setCountryCheckedFilter([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        country: [],
      }));
    } else if (filter === "applicationStatus") {
      setApplicationStatusFilters("");
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        applicationStatus: "",
      }));
    }
    else if (filter === "scholarshipType") {
      setScholarshipTypeFilters("");
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        scholarshipType: "",
      }));
    }
    else if (filter === "provider") {
      setProviderFilters("");
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        provider: "",
      }));
    }else if (filter === "eligibilityCriteria") {
      setEligibilityCriteriaFilters("");
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        eligibilityCriteria: "",
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
          title="COUNTRY"
          filterList={filterBy?.country}
          handleFilter={handleCountryFilter}
          checked={countryCheckedFilters}
        />
        <Filter
          title="SCHOLARSHIP TYPE"
          filterList={filterBy?.scholarshipType}
          handleFilter={handleScholarshipTypeFilter}
          checked={scholarshipTypeFilters}
        />
        <Filter
          title="ELIGIBILITY CRITERIA"
          filterList={filterBy?.eligibilityCriteria}
          handleFilter={handleEligibilityFilter}
          checked={eligibilityCriteriaFilters}
        />
        <Filter
          title="APPLICATION STATUS"
          filterList={filterBy?.applicationStatus}
          handleFilter={handleApplicationStatusFilter}
          checked={applicationStatusFilters}
        />
        <Filter
          title="PROVIDER"
          filterList={filterBy?.provider}
          handleFilter={handleProviderFilter}
          checked={providerFilters}
        />
        
      </div>
    </aside>
  );
}

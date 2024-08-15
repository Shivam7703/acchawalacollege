"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";

export default function Filter({
  title,
  filteredDataArray,
  handleFilter,
  checked,
}: any) {
  const [open, setOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpen = () => setOpen(!open);
  const handleViewMore = () => setShowAll(!showAll);

  // console.log(filteredDataArray, "ppp");

  function handleSortAvgFeePerYear(data: any) {
    // sort operation
  }

  // Function to handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      className={`w-full ${title === "EXAM ACCEPTED" ? "" : "border-b"}  mb-5 border-zinc-500 pb-5`}
    >
      {/* Title with open/close list button  */}
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={handleOpen}
      >
        <span className="font-bold uppercase text-blue-500">{title}</span>{" "}
        <span className="font-light">
          {open ? (
            <IoIosArrowDown className="transition-all duration-300" />
          ) : (
            <IoIosArrowDown className="-rotate-180 transition-all duration-300" />
          )}
        </span>
      </div>
      {/* list  */}
      {open && (
        <div>
          {/* Search Bar  */}
          {title !== "COURSE DURATION" &&
            title !== "AVG FEE PER YEAR" &&
            title !== "PROGRAM TYPE" &&
            title !== "COLLEGE TYPE" &&
            title !== "GENDER ACCEPTED" && (
              <div className="searchBar relative">
                <input
                  type="text"
                  className="my-2 w-full rounded border border-zinc-500 p-2 pl-4 text-sm shadow-md outline-none"
                  placeholder={`Search ${title.toLowerCase()}`}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <IoIosSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            )}
          {/* END Search Bar  */}
          <div className="h-full max-h-48 overflow-y-auto">
            {/* Stream  */}
            {title === "STREAM" && (
              <>
                {filteredDataArray
                  ?.reduce((uniqueStreams: string[], filter: any) => {
                    if (!uniqueStreams.includes(filter.stream)) {
                      uniqueStreams.push(filter.stream);
                    }
                    return uniqueStreams;
                  }, [])
                  .slice(0, showAll ? filteredDataArray?.length : 2)
                  .map((stream: string) => (
                    <div
                      key={stream}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        id={stream}
                        name={stream}
                        checked={checked.includes(stream)}
                        className="cursor-pointer"
                        onChange={() => handleFilter(stream)}
                      />
                      <label
                        htmlFor={stream}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {stream}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* COURSE DURATION */}
            {title === "COURSE DURATION" && (
              <div className="flex flex-col gap-4 p-5">
                <p className="text-center text-xs">
                  {Math.floor(checked / 12)} years {checked % 12} months
                </p>
                <input
                  type="range"
                  min="1"
                  max="96" // 8 years * 12 months/year = 96 months
                  value={checked}
                  onChange={(e) => handleFilter(parseInt(e.target.value))}
                  className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 outline-none"
                  style={{
                    cursor: "pointer",
                    background: `linear-gradient(to right, rgb(59 130 246) ${checked}%, rgb(229 231 235) ${checked}%)`,
                  }}
                />
                <div className="flex justify-between">
                  <span>1 month</span>
                  <span>8 years</span>
                </div>
              </div>
            )}
            {/* AVG FEE PER YEAR */}
            {title === "AVG FEE PER YEAR" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.avgFeePerYear}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="radio"
                        id={filter.id}
                        name={filter.avgFeePerYear}
                        checked={checked === filter.avgFeePerYear}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.avgFeePerYear)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {filter.avgFeePerYear}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
                {/* MIN / Max Button  */}
                <div className="mt-2 flex flex-wrap gap-1">
                  <button
                    className="rounded  border border-blue-500 px-3 py-2 text-blue-500 [flex:1] hover:bg-blue-500 hover:text-white"
                    onClick={() => handleSortAvgFeePerYear("min")}
                  >
                    ₹ Min
                  </button>
                  <button
                    className="rounded border border-blue-500 px-3 py-2 text-blue-500 [flex:1] hover:bg-blue-500 hover:text-white"
                    onClick={() => handleSortAvgFeePerYear("max")}
                  >
                    ₹ Max
                  </button>
                  <button
                    className="rounded bg-blue-500 px-4 py-2 text-white"
                    onClick={() => handleSortAvgFeePerYear("go")}
                  >
                    Go
                  </button>
                </div>
              </>
            )}
            {/* STATE */}
            {title === "STATE" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.state}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="radio"
                        id={filter.id}
                        name={filter.state}
                        checked={checked === filter.state}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.state)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {filter.state}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* CITY */}
            {title === "CITY" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.city}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="radio"
                        id={filter.id}
                        name={filter.city}
                        checked={checked === filter.city}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.city)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {filter.city}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* COURSE */}
            {title === "COURSE" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.course}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        id={filter.id}
                        name={filter.course}
                        checked={checked === filter.course}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.course)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {filter.course}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* PROGRAM TYPE */}
            {title === "PROGRAM TYPE" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.programType}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="radio"
                        id={filter.id}
                        name={filter.programType}
                        checked={checked === filter.programType}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.programType)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {filter.programType}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* COLLEGE TYPE */}
            {title === "COLLEGE TYPE" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.collegeType}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        id={filter.id}
                        name={filter.collegeType}
                        checked={checked === filter.collegeType}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.collegeType)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {filter.collegeType}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* COLLEGE CATEGORY */}
            {title === "COLLEGE CATEGORY" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.collegeCategory}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        id={filter.id}
                        name={filter.collegeCategory}
                        checked={checked === filter.collegeCategory}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.collegeCategory)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {filter.collegeCategory}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* AFFILIATION */}
            {title === "AFFILIATION" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.affiliation}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        id={filter.id}
                        name={filter.affiliation}
                        checked={checked === filter.affiliation}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.affiliation)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {filter.affiliation}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* GENDER ACCEPTED */}
            {title === "GENDER ACCEPTED" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.gender}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        id={filter.id}
                        name={filter.gender}
                        checked={checked === filter.gender}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.gender)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {filter.gender}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* RANKING */}
            {title === "RANKING" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.ranking}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="radio"
                        id={filter.id}
                        name={filter.ranking}
                        checked={checked === filter.ranking}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.ranking)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {filter.ranking}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* EXAM ACCEPTED */}
            {title === "EXAM ACCEPTED" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.exam}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        id={filter.id}
                        name={filter.exam}
                        checked={checked === filter.exam}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.exam)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {filter.exam}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}

            {/* Exams Filters */}
            {/* MODE  */}
            {title === "MODE" && (
              <>
                {filteredDataArray
                  .reduce((uniqueStreams: string[], filter: any) => {
                    if (!uniqueStreams.includes(filter.mode)) {
                      uniqueStreams.push(filter.mode);
                    }
                    return uniqueStreams;
                  }, [])
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((mode: string) => (
                    <div
                      key={mode}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        id={mode}
                        name={mode}
                        checked={checked.includes(mode)}
                        className="cursor-pointer"
                        onChange={() => handleFilter(mode)}
                      />
                      <label
                        htmlFor={mode}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {mode}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* LEVEL  */}
            {title === "LEVEL" && (
              <>
                {filteredDataArray
                  .reduce((uniqueStreams: string[], filter: any) => {
                    if (!uniqueStreams.includes(filter.level)) {
                      uniqueStreams.push(filter.level);
                    }
                    return uniqueStreams;
                  }, [])
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((level: string) => (
                    <div
                      key={level}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        id={level}
                        name={level}
                        checked={checked.includes(level)}
                        className="cursor-pointer"
                        onChange={() => handleFilter(level)}
                      />
                      <label
                        htmlFor={level}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {level}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

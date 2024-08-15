// Assuming this component is located in pages/components/AbroadCollege.js

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../dashboardSections/Button'; // Adjust path as per your project structure
import { FaEdit } from 'react-icons/fa';
import { Input } from '../FormInput'; // Adjust path as per your project structure

export default function AbroadCollege() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      preferedLocation:'',
      preferedCourses:'',
      startDate: '',
      hasPassport: '',
      englishProficiencyTest: '',
      englishExamType: '',
      englishProficiencyScore: '',
      entranceExam: '',
      entranceExamType: '',
      entranceExamScore: '',
    },
  });

  const [error, setError] = useState('');

  const handleFormSubmit = async (data: any) => {
    try {
      console.log(data); // You can handle form submission logic here
    } catch (err) {
      console.error(err);
      setError('An error occurred while submitting the form.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="grid grid-cols-1 gap-5">
        <h2 className="text-xl font-bold">
          Abroad Colleges You Applied/Applying To:
        </h2>

        <div className="space-y-2">
          <Input
            label="Preferred Courses"
            type="text"
            icon={<FaEdit />}
            {...register("preferedCourses")}
          />
        </div>

        <div className="space-y-2">
          <Input
            label="Preferred Location"
            type="text"
            icon={<FaEdit />}
            {...register("preferedLocation")}
          />
        </div>

        <div className="flex justify-between gap-5 max-sm:gap-3 max-[874px]:flex-col sm:items-center">
          <Input
            label="When Did you Plan to Start Your Studies?"
            type="date"
            {...register("startDate", { required: "Start date is required" })}
          />
          <div className="w-[98%] space-y-2">
            <div className="flex items-center justify-around md:mt-5">
              <label className="block font-semibold text-gray-700">
                Do You have a Passport?
              </label>
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="yes"
                    {...register("hasPassport")}
                    className="form-radio"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="no"
                    {...register("hasPassport")}
                    className="form-radio"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 mt-5">
          <label className="block font-semibold text-gray-700">
            English Proficiency Test
          </label>
          <div className="flex items-center space-x-4">
            {["yes", "no", "booked"].map((value) => (
              <label key={value} className="inline-flex items-center">
                <input
                  type="radio"
                  value={value}
                  {...register("englishProficiencyTest")}
                  className="form-radio"
                />
                <span className="ml-2 capitalize">{value}</span>
              </label>
            ))}
          </div>
          {errors.englishProficiencyTest && (
            <p className="text-xs text-red-600">
              {errors.englishProficiencyTest.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {(watch("englishProficiencyTest") === "yes" ||
            watch("englishProficiencyTest") === "booked") && (
              <div className="space-y-2">
                <select
                  className="mt-5 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-blue-500"
                  {...register("englishExamType", { required: "Select exam is required" })}
                >
                  <option value="">Select exam</option>
                  {["IELTS", "TOEFL", "PTE", "DET"].map((item) => (
                    <option key={item} value={item} className="capitalize">
                      {item}
                    </option>
                  ))}
                </select>
                {errors.englishExamType && (
                  <p className="text-xs text-red-600">
                    {errors.englishExamType.message}
                  </p>
                )}
              </div>
            )}
          {watch("englishProficiencyTest") === "yes" && (
            <div className="space-y-2">
              <Input
                label="English Proficiency Score"
                type="text"
                {...register("englishProficiencyScore", {
                  required: "English Proficiency Score is required",
                })}
              />
              {errors.englishProficiencyScore && (
                <p className="text-xs text-red-600">
                  {errors.englishProficiencyScore.message}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="space-y-2 mt-7">
          <label className="block font-semibold text-gray-700">
            Entrance Exam
          </label>
          <div className="flex items-center space-x-4">
            {["yes", "no", "booked"].map((value) => (
              <label key={value} className="inline-flex items-center">
                <input
                  type="radio"
                  value={value}
                  {...register("entranceExam")}
                  className="form-radio"
                />
                <span className="ml-2 capitalize">{value}</span>
              </label>
            ))}
          </div>
          {errors.entranceExam && (
            <p className="text-xs text-red-600">
              {errors.entranceExam.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {(watch("entranceExam") === "yes" ||
            watch("entranceExam") === "booked") && (
              <div className="space-y-2">
                <select
                  className="mt-5 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-blue-500"
                  {...register("entranceExamType", { required: "Select exam is required" })}
                >
                  <option value="">Select exam</option>
                  {["GMAT", "GRE", "SAT", "LSAT"].map((item) => (
                    <option key={item} value={item} className="capitalize">
                      {item}
                    </option>
                  ))}
                </select>
                {errors.entranceExamType && (
                  <p className="text-xs text-red-600">
                    {errors.entranceExamType.message}
                  </p>
                )}
              </div>
            )}
          {watch("entranceExam") === "yes" && (
            <div className="space-y-2">
              <Input
                label="Entrance Exam Score"
                type="text"
                {...register("entranceExamScore", {
                  required: "Entrance Exam Score is required",
                })}
              />
              {errors.entranceExamScore && (
                <p className="text-xs text-red-600">
                  {errors.entranceExamScore.message}
                </p>
              )}
            </div>
          )}
        </div>

        <Button variant="blueMain" type="submit">
          Save
        </Button>
      </form>
      {error && <p className="mt-5 text-center text-red-600">{error}</p>}
    </div>
  );
}

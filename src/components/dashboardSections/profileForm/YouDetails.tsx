"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/dashboardSections/FormInput";
import { FaEdit } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import { LiaCitySolid } from "react-icons/lia";
import { Button } from "@/components/dashboardSections/Button";

export function YourDetails({ setNextButtonState }:any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Ansh Mehera",
      email: "",
      number: "",
      course: "",
      city: "",
      gender: "male",
      interestedAbroad: "",
      bestDescription: "",
    },
  });
  const [error, setError] = useState("");

  const handleFormSubmit = async (data: any) => {
    setNextButtonState(true);
    try {
      console.log(data);
      setNextButtonState(false);
    } catch (err) {
      console.log(err);
      setNextButtonState(false);
    }
  };

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {/* Interested in abroad colleges */}
        <div className="space-y-2">
          <select
            className="mt-5 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-blue-500"
            {...register("interestedAbroad")}
          >
            <option value="" className="capitalize">
              Interested In Abroad Colleges
            </option>
            {["In Japan", "In London", "other"].map((item) => (
              <option key={item} value={item} className="capitalize">
                {item}
              </option>
            ))}
          </select>
          {errors.interestedAbroad && (
            <p className="text-xs text-red-600">{errors.interestedAbroad.message}</p>
          )}
        </div>

        {/* What describes you best */}
        <div className="space-y-2">
          <select
            className="mt-5 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-blue-500"
            {...register("bestDescription")}
          >
            <option value="" className="capitalize">
              What Describes You Best
            </option>
            {["Developer", "HR", "other"].map((item) => (
              <option key={item} value={item} className="capitalize">
                {item}
              </option>
            ))}
          </select>
          {errors.bestDescription && (
            <p className="text-xs text-red-600">{errors.bestDescription.message}</p>
          )}
        </div>

        {/* Full Name  */}
        <div className="space-y-2">
          <Input
            label="Full Name"
            type="text"
            readOnly={true}
            icon={<FaEdit />}
            {...register("name", {
              disabled: true,
              required: "Name is required",
            })}
          />
          {errors.name && (
            <p className="text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email  */}
        <div className="space-y-2">
          <Input
            label="Email ID"
            type="email"
            icon={<MdOutlineAttachEmail />}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: emailRegex,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Mobile No.  */}
        <div className="space-y-2">
          <Input
            label="Mobile Number"
            type="tel"
            icon={<CiMobile4 />}
            {...register("number", {
              required: "Mobile No. is required",
              pattern: {
                value: mobileRegex,
                message: "Please enter a valid 10-digit mobile number",
              },
            })}
          />
          {errors.number && (
            <p className="text-xs text-red-600">{errors.number.message}</p>
          )}
        </div>

        {/* Gender  */}
        <div className="space-y-2">
          <select
            className="mt-5 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-blue-500"
            {...register("gender")}
          >
            {["female", "male", "other"].map((item) => (
              <option key={item} value={item} className="capitalize">
                {item}
              </option>
            ))}
          </select>
          {errors.gender && (
            <p className="text-xs text-red-600">{errors.gender.message}</p>
          )}
        </div>

        {/* Course  */}
        <div className="space-y-2">
          <Input
            label="Course Interested"
            type="text"
            icon={<FiBook />}
            readOnly={true}
            {...register("course")}
          />
          {errors.course && (
            <p className="text-xs text-red-600">{errors.course.message}</p>
          )}
        </div>

        {/* City  */}
        <div className="space-y-2">
          <Input
            label="City You Live in"
            type="text"
            icon={<LiaCitySolid />}
            readOnly={true}
            {...register("city")}
          />
          {errors.city && (
            <p className="text-xs text-red-600">{errors.city.message}</p>
          )}
        </div>
       
        <Button variant="blueMain" type="submit">
          Save
        </Button>
      </form>
      {/* Error Message */}
      {error && <p className="mt-5 text-center text-red-600">{error}</p>}
    </div>
  );
}
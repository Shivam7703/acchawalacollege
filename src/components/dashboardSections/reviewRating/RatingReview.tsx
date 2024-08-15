"use client";
import { useState } from "react";
import Image from "next/image";
import { FaRegEdit, FaStar } from "react-icons/fa";
import { Button } from "../Button";
import { review } from "@/asset"; // Adjust the import path for your review image
import { useForm } from "react-hook-form";
import { Input } from "../FormInput";

interface CollegeData {
  college: string;
  status: string;
  enrollmentYear: string;
  degreeType: string;
  curriculumReview: string;
  facultyRating: number;
  placementsReview: string;
  placementsRating: number;
  campusReview: string;
  campusRating: number;
  overallReview: string;
  overallRating: number;
}

export function RatingReview() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmitReview = (data: CollegeData) => {
    console.log("Submitted review:", data);
    setShowForm(false);
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-3">
        Manage Your Reviews
        <span className="float-right text-2xl text-zinc-600">
          <FaRegEdit />
        </span>
      </h2>

      {!showForm ? (
        <div className="bg-blue-200 p-5 flex rounded-xl items-center flex-col justify-between gap-2 my-2">
          <h3 className="text-blue-600 font-medium text-2xl text-center">
            Nothing to show yet. You haven't written any reviews yet.
          </h3>
          <div className="w-full max-w-xs">
            <Image
              src={review}
              alt="College Review"
              width={300}
              height={200}
              className="rounded-xl"
            />
          </div>
          <Button
            type="button"
            variant="blue"
            className="min-w-max"
            onClick={() => setShowForm(true)}
          >
            Write A Review Now
          </Button>
        </div>
      ) : (
        <ReviewForm onSubmit={handleSubmitReview} />
      )}
    </div>
  );
}

interface ReviewFormProps {
  onSubmit: (data: CollegeData) => void;
}

function ReviewForm({ onSubmit }: ReviewFormProps) {
  const { register, handleSubmit, setValue, watch } = useForm<CollegeData>({
    defaultValues: {
      college: "Achcha waala college", 
      status: "B.Sc.",
      enrollmentYear: "",
      degreeType: "",
      curriculumReview: "",
      facultyRating: 0,
      placementsReview: "",
      placementsRating: 0,
      campusReview: "",
      campusRating: 0,
      overallReview: "",
      overallRating: 0
    },
  });

  const facultyRating = watch("facultyRating");
  const placementsRating = watch("placementsRating");
  const campusRating = watch("campusRating");
  const overallRating = watch("overallRating");

  const onSubmitForm = (data: CollegeData) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="bg-blue-200 p-5 rounded-xl">
      <h2 className="text-xl font-bold">College Details</h2>

      <div className="flex items-center gap-2 flex-wrap mt-3">
        <div className="my-2 w-full">
          <h4>Select College Name</h4>
          <select
            className="mt-2 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-blue-500"
            {...register("college")}
          >
            {[
              "medium Achcha waala college",
              "Achcha waala college",
              "thoda achcha waala college",
              "Sabse achcha wala college",
              "other",
            ].map((item) => (
              <option key={item} value={item} className="capitalize">
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="my-2 w-full">
          <h4>Select Course Name</h4>
          <select
            className="mt-2 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-blue-500"
            {...register("status")}
          >
            {["B.Sc.", "CUET", "Other"].map((item) => (
              <option key={item} value={item} className="capitalize">
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between max-sm:flex-col w-full">
          <div className="my-2 sm:w-[49%]">
            <h3 className="-mb-3">Select Enrollment Year</h3>
            <Input 
              type="date"
              {...register("enrollmentYear")}
            />
          </div>

          <div className="my-2 sm:w-[49%]">
            <h3>Type of Degree</h3>
            <select
              className="mt-2 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-blue-500"
              {...register("degreeType")}
            >
              {["Intermediate", "Graduate", "MBBS", "Ph.D.", "Others"].map((item) => (
                <option key={item} value={item} className="capitalize">
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Curriculum and Faculty */}
      <ReviewSection
        title="Course Curriculum and Faculty Info"
        description="Share your Opinion about Course, Curriculum, Academics, Faculties, Scholarship, Fees"
        bulletPoints={[
          "Mention Why did you choose this course.",
          "Qualification of the Faculty and Review of teaching method.",
          "How Timely were Term exams and what was the difficulty level."
        ]}
        textareaRegister={register("curriculumReview")}
        ratingLabel="How Would You Rate Your College Faculty Experience?"
        ratingValue={facultyRating}
        setRating={(value) => setValue("facultyRating", value)}
      />

      {/* Placements and Internships */}
      <ReviewSection
        title="Placements and Internships"
        description="How is life at the campus? Discuss social life, clubs & infrastructure. If you have opted for Hostel, give the details provided in the hostel."
        bulletPoints={[
          "Mention the eligibility criteria for placement.",
          "Name a few visited recruiters and no. of offers made.",
          "Mention the highest and average package as per the company and profiles offered"
        ]}
        textareaRegister={register("placementsReview")}
        ratingLabel="How Would You Rate Your College Placement Experience?"
        ratingValue={placementsRating}
        setRating={(value) => setValue("placementsRating", value)}
      />

      {/* Campus & Social Life */}
      <ReviewSection
        title="Campus & Social Life Info"
        description="How is life at the campus? Discuss social life, clubs & infrastructure. If you have opted for Hostel, give the details provided in the hostel."
        bulletPoints={[
          "Name the fest and month in which they are conducted.",
          "Availability of books & journals in the library. Amenities in classrooms.",
          "Brief of sports & extracurricular activities on the campus."
        ]}
        textareaRegister={register("campusReview")}
        ratingLabel="How Would You Rate Your College Campus Experience?"
        ratingValue={campusRating}
        setRating={(value) => setValue("campusRating", value)}
      />

      {/* Overall */}
      <ReviewSection
        title="Overall"
        description="How Was Your overall college experience."
        bulletPoints={[]}
        textareaRegister={register("overallReview")}
        ratingLabel="How Would You Rate Your Overall College Experience?"
        ratingValue={overallRating}
        setRating={(value) => setValue("overallRating", value)}
      />

      <Button type="submit" variant="blue" className="min-w-max mt-4">
        Submit Review
      </Button>
    </form>
  );
}

interface ReviewSectionProps {
  title: string;
  description: string;
  bulletPoints: string[];
  textareaRegister: any;
  ratingLabel: string;
  ratingValue: number;
  setRating: (value: number) => void;
}

function ReviewSection({
  title,
  description,
  bulletPoints,
  textareaRegister,
  ratingLabel,
  ratingValue,
  setRating
}: ReviewSectionProps) {
  return (
    <div className="my-4 border-t-2 py-4 w-full">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="lg">{description}</p>
      {bulletPoints.length > 0 && (
        <ul className="list-disc text-zinc-600 px-4">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
      <textarea
        placeholder="Describe your experience"
        className="w-full p-2 rounded-lg mt-5"
        rows={3}
        
        minLength={100}
        {...textareaRegister}
      />
      <div className="mt-4 w-full flex flex-col items-center">
        <label className="block text-xl font-bold">{ratingLabel}</label>
        <div className="flex gap-4 text-2xl my-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`cursor-pointer ${star <= ratingValue ? "text-blue-700" : "text-blue-400"}`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
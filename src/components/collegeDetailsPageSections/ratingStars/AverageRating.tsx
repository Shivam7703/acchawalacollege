"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { StarRating } from "./StarRating";

interface RatingData {
  star: number;
  percentage: number;
}

interface ReviewsAndRatingsSectionProps {
  data?: RatingData[];
}

export function ReviewsAndRatingsSection({
  data = [],
}: ReviewsAndRatingsSectionProps) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No rating data available</div>;
  }

  const overallRating = calculateOverallRating(data);

  return (
    <div className="space-y-5">
      <div className="my-5 flex items-center !h-auto md:items-stretch justify-around gap-16 max-md:mt-9 max-md:flex-col max-md:gap-5">
        {/* Overall Rating Section */}
        <div className="flex-center md:max-w-[38%] max-w-max items-center flex-col rounded-2xl bg-blue-100 p-5 sm:p-12">
          <h3>
            <span className="font-bold text-xl">Overall Rating</span> (Out of 5)
          </h3>
          <h2 className="text-7xl font-semibold my-3">{overallRating}</h2>
          <div className="flex-center">
            <StarRating
              rating={parseFloat(overallRating)}
              className="gap-2 text-lg text-orange-400"
            />
          </div>
          <p className="text-sm my-2">
            Based on {data.length} Verified Reviews
          </p>
          <Link
            href={"#"}
            className="text-blue-800 font-semibold hover:underline"
          >
            Write your review here {">"}
          </Link>
        </div>
        {/* Rating according to number */}
        <div className="!h-auto w-[60%] space-y-2 md:flex max-sm:p-3 flex-col justify-between max-sm:mb-3 max-sm:w-full">
          {[5, 4, 3, 2, 1].map((star) => (
            <RatingRow
              key={star}
              star={star}
              value={getPercentage(star, data)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // ... rest of the code remains the same
}

interface RatingRowProps {
  star: number;
  value: number;
}

function RatingRow({ star, value }: RatingRowProps) {
  return (
    <div className="!my-3 flex items-center gap-3">
      <div className="mr-2 sm:flex items-center sm:min-w-max gap-2 sm:text-xl font-semibold">
        <StarRating rating={star} className="gap-1 text-lg text-orange-400" />
        {star} star rating
      </div>
      <ProgressBar value={value} />
      <p className="ml-2 sm:text-xl">({value}%)</p>
    </div>
  );
}

interface ProgressBarProps {
  value: number;
}

function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="h-3 w-full min-w-20 rounded-full bg-zinc-200">
      <div
        className="h-3 rounded-full bg-blue-500"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

function getPercentage(star: number, data: RatingData[]): number {
  const found = data.find((item) => item.star === star);
  return found ? found.percentage : 0;
}

function calculateOverallRating(percentages: RatingData[]): string {
  const totalPercentage = percentages.reduce(
    (sum, item) => sum + item.percentage,
    0
  );
  const weightedSum = percentages.reduce(
    (sum, item) => sum + item.star * item.percentage,
    0
  );
  return (weightedSum / totalPercentage).toFixed(1);
}

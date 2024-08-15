"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LiaStarSolid } from "react-icons/lia";
import {user1 as profile} from "@/asset"; // Correct the path to your image

interface ReviewContent {
  overall: string;
  placement: string;
  infrastructure: string;
  faculty: string;
  hostel: string;
}

interface ReviewRatings {
  placement: number;
  infrastructure: number;
  faculty: number;
  hostel: number;
}

interface Review {
  id: number;
  title: string;
  author: string;
  date: string;
  overallRating: number;
  content: ReviewContent;
  ratings: ReviewRatings;
}

interface ReviewProps {
  reviews: Review[];
}

export default function Review({ reviews }: ReviewProps) {
  const [expandedReviews, setExpandedReviews] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (id: number) => {
    setExpandedReviews(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, index) => (
      <LiaStarSolid key={index} className="h-6 w-6 text-[#f2a742] lg:h-8 lg:w-8" />
    ));
  };

  return (
    <>
      {reviews.map((review) => (
        <div key={review.id} className="my-6 rounded-xl bg-blue-200 p-6">
          <div className="flex justify-between">
            <div className="flex gap-6">
              <Image
                src={profile}
                alt="profile"
                width={50}
                height={50}
                className="sm:rounded-full max-sm:w-14 h-auto object-cover rounded-2xl"
              />
              <div>
                <p className="font-semibold md:text-lg">{review.title}</p>
                <p className="text-xs md:text-sm">
                  Asked by {review.author} | {review.date}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="md:text-xl md:font-medium">{review.overallRating}</p>
              <LiaStarSolid className="text-[#f2a742] md:h-8 md:w-8" />
              <button className="hidden rounded-xl bg-[#012148] px-10 py-1 text-lg text-white md:block">
                Helpful
              </button>
            </div>
          </div>

          <div className="my-10 rounded-xl border-2 border-gray-400 p-6">
            <div>
              <p>
                <span className="text-lg font-bold">Overall:</span> {review.content.overall}
              </p>
              <div className="mt-2 md:hidden">
                <div className="flex gap-1">
                  {renderStars(review.overallRating)}
                </div>
              </div>
            </div>

            <div>
              <p className="mt-6">
                <span className="text-lg font-bold">Placement:</span> {review.content.placement}
              </p>
              <div className="mt-2 md:hidden">
                <div className="flex gap-1">
                  {renderStars(review.ratings.placement)}
                </div>
              </div>
            </div>

            {expandedReviews[review.id] && (
              <>
                <div>
                  <p className="mt-6">
                    <span className="text-lg font-bold">Infrastructure:</span> {review.content.infrastructure}
                  </p>
                  <div className="mt-2 md:hidden">
                    <div className="flex gap-1">
                      {renderStars(review.ratings.infrastructure)}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mt-6">
                    <span className="text-lg font-bold">Faculty:</span> {review.content.faculty}
                  </p>
                  <div className="mt-2 md:hidden">
                    <div className="flex gap-1">
                      {renderStars(review.ratings.faculty)}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mt-6">
                    <span className="text-lg font-bold">Hostel:</span> {review.content.hostel}
                  </p>
                  <div className="mt-2 md:hidden">
                    <div className="flex gap-1">
                      {renderStars(review.ratings.hostel)}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-row-reverse items-center justify-between">
            <div
              onClick={() => toggleExpand(review.id)}
              className="ml-3 cursor-pointer"
            >
              <p className="text-lg text-blue-500">
                {expandedReviews[review.id] ? "Show Less" : "Show More"}
              </p>
            </div>

            <button className="md:hidden rounded-xl bg-[#012148] px-10 py-1 text-lg text-white">
              Helpful
            </button>

            {expandedReviews[review.id] && (
              <div className="hidden md:block">
                <div className="flex items-center md:gap-6 lg:gap-12">
                  {Object.entries(review.ratings).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-lg font-bold">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                      <div className="flex gap-1">
                        {renderStars(value)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

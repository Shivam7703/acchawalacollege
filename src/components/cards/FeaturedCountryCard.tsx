"use client";
import React from "react";
import Image from "next/image";
import { abroadBanner } from "@/asset";
import { Button } from "../dashboardSections/Button";

export default function FeaturedCountry(data: any) {
  return (
    <>
      <div className="md:w-[31%] max-sm:gap-5 sm:w-[49%] max-sm:w-full h-auto shadow-lg border-1 relative rounded-lg overflow-hidden">
        <Image
          src={abroadBanner}
          alt="banner"
          className="h-40 w-full object-cover"
        />
        <Image
          src={abroadBanner}
          alt="banner"
          className="h-10 w-14 absolute top-3 left-3 border-8 rounded-lg border-white object-cover"
        />

        <div className="py-6 px-4">
          <p>
            Explore new horizons with a study abroad experience. Immerse
            yourself in a different culture, broaden your perspective, and gain
            valuable skills for your future
          </p>
          <h4 className="font-bold text-xl my-5">Top Schools</h4>
          <div className="flex justify-between items-center mb-6">
            <Image
              src={abroadBanner}
              alt="banner"
              className="w-[18%]  object-cover"
            />
            <Image
              src={abroadBanner}
              alt="banner"
              className="w-[18%]  object-cover"
            />
            <Image
              src={abroadBanner}
              alt="banner"
              className="w-[18%]  object-cover"
            />
            <Image
              src={abroadBanner}
              alt="banner"
              className="w-[18%]  object-cover"
            />
            <Image
              src={abroadBanner}
              alt="banner"
              className="w-[18%]  object-cover"
            />
          </div>
          <Button variant="blue" className="!w-full">
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
}

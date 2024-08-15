import React from "react";
import AbroadCollegeListSection from "@/components/studyAbroadListingPageSections/abroadCollegeListSection/abroadCollegeListSection";
import Image from "next/image";
import {
  countryData,
  studyAbroadData,
  studyAbroadListingPage,
} from "@/data/studyAbroadPageData";
import HeroSection from "@/components/studyAbroadListingPageSections/heroSection/HeroSection";
import { abroadBanner, user1 } from "@/asset";
import { PiClockCountdownFill } from "react-icons/pi";
import { IoHeartCircle } from "react-icons/io5";
import { BsQuestionCircleFill } from "react-icons/bs";
import { Button } from "@/components/dashboardSections/Button";
import { courseListingPage } from "@/data/courseData";
import AbroadCourseCard from "@/components/cards/StudyAbroadScholarshipCard";
import FeaturedCountry from "@/components/cards/FeaturedCountryCard";
export default function examsPage() {
  return (
    <>
      <ExamListingBanner data={studyAbroadData.listingBanner} />
      <HeroSection data={studyAbroadListingPage?.bannerSection} />
      <AbroadCollegeListSection
        collegeDataArray={countryData}
        filterBy={studyAbroadListingPage?.filterBy}
      />
      {courseListingPage?.courseData?.map((college: any) => (
            <AbroadCourseCard key={college.id} course={college} />
          ))}
      <FeaturedCountry />
    </>
  );
}

function ExamListingBanner({ data }: any) {
  return (
    <section className="relative overflow-hidden md:!px-0  ">
      {/* Bg Image  */}
      <Image
        src={data?.bgImage}
        alt="banner"
        width={1200}
        height={500}
        className="h-[410px] max-sm:w-[500px] w-full object-cover"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-60 !py-14 px-10">
        <div className="h-auto w-full items-center justify-between flex">
          {/* Left Side  */}
          <div className="flex flex-col justify-center text-white">
            <h2 className="mb-4 text-3xl font-bold lg:text-6xl max-sm:text-center">
              {data?.title}
            </h2>
          </div>
          {/* Right Side  */}
          <div className="flex justify-end gap-4 max-md:hidden">
            <div className="w-max rounded-2xl bg-white bg-opacity-30 bg-clip-padding p-3 backdrop-blur-sm backdrop-filter">
              <Image
                src={data?.img1}
                alt="banner"
                width={1200}
                height={500}
                className="h-56 w-56 rounded-2xl object-cover"
              />
            </div>
            <div className="w-max rounded-2xl bg-white bg-opacity-30 bg-clip-padding p-3 backdrop-blur-sm backdrop-filter">
              <Image
                src={data?.img2}
                alt="banner"
                width={1200}
                height={500}
                className="h-56 w-56 rounded-2xl object-cover"
              />
            </div>
            <div className=" w-max rounded-2xl bg-white bg-opacity-30 bg-clip-padding p-3 backdrop-blur-sm backdrop-filter hidden">
              <Image
                src={data?.img3}
                alt="banner"
                width={1200}
                height={500}
                className="h-56 w-56 rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-3 sm:py-5 border-t-2 border-white gap-5 max-md:flex-col text-white sm:mt-6 mt-0">
          <div className="flex flex-wrap items-center gap-3">
            {data?.text?.map((item: any) => (
              <p key={item.id} className="flex items-center mr-4">
                <item.icon className="mr-2 text-xl" />
                <span>{item.text}</span>
              </p>
            ))}
          </div>
          <div className="flex gap-3 max-sm:flex-col items-center">
            {data?.buttons?.map((button: any, index: number) => (
              <Button
                key={index}
                variant={button.variant}
                className="min-w-max"
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// function FeaturedCountry(data: any) {
//   return (
//     <>
//       <div className="sm:w-[380px] w-full h-auto shadow-lg border-1 relative rounded-lg overflow-hidden">
// <Image src={abroadBanner}
// alt="banner" className="h-40 w-full object-cover"/>
// <Image src={abroadBanner}
// alt="banner" className="h-10 w-14 absolute top-3 left-3 border-8 rounded-lg border-white object-cover"/>

// <div className="py-6 px-4">
//   <p>Explore new horizons with a study abroad experience. Immerse yourself in a different culture, broaden your perspective, and gain valuable skills for your future</p>
//   <h4 className="font-bold text-xl my-5">Top Schools</h4>
//   <div className="flex justify-between items-center mb-6">
//   <Image src={abroadBanner}
// alt="banner" className="w-[18%]  object-cover"/>
// <Image src={abroadBanner}
// alt="banner" className="w-[18%]  object-cover"/><Image src={abroadBanner}
// alt="banner" className="w-[18%]  object-cover"/><Image src={abroadBanner}
// alt="banner" className="w-[18%]  object-cover"/><Image src={abroadBanner}
// alt="banner" className="w-[18%]  object-cover"/>
//   </div>
//   <Button
//                 variant="blue"
//                 className="!w-full"
//               >
//                Learn More
//               </Button>
// </div>
//       </div>
//     </>
//   );
// }

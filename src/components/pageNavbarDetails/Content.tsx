"use client";
import TimelineList from "@/components/TimelineList";
import CollegeDetailsCardSlider from "@/components/cards/CollegeDetailsCardSlider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";
import useIsMobile from "@/customHooks/useIsMobile";
import ThreeCardSection from "./components/ThreeCardSection";
import HighlightsSlider from "./components/highlightsSlider/HighlightsSlider";
import CompaniesScrollSlideShow from "./components/CompaniesScrollSlideShow";
import BrochureSection from "./components/BrochureSection";
import YoutubeVideo from "../youtubeVideo";
import ReviewsSlider from "../cards/ReviewsSlider";
import { ReviewsAndRatingsSection } from "../collegeDetailsPageSections/ratingStars/AverageRating";
import TopCourses from "../topCourses/TopCourses";
import Faqs from "../faqs/Faqs";
import Review from "../collegeDetailsPageSections/ratingStars/CollegeReview";
import Charts from "../collegeDetailsPageSections/graphandCharts";
import CollegeFilteredCard from "../cards/CollegeFilteredCard";
import TopColleges from "../topColleges/TopColleges";

export default function Content({ selectedContent }: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile(1030); // breakpoint

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      {selectedContent &&
        selectedContent?.sections?.length > 0 &&
        selectedContent?.sections?.map((section: any, index: any) => {
          const articleLength = section.article?.length || 0;
          return (
            <div
              key={index}
              className="mt-5 w-full border-b border-zinc-300 pb-5"
            >
              {/* Title */}
              {section?.title && (
                <h1 className="title1 mb-8">
                  {section.title.t1 && (
                    <span className="text-blue-950/70">{section.title.t1}</span>
                  )}{" "}
                  {section.title.t2 && (
                    <span className="text-blue-950">{section.title.t2}</span>
                  )}{" "}
                  {section.title.t3 && (
                    <span className="text-sky-500">{section.title.t3}</span>
                  )}{" "}
                </h1>
              )}
              {/* Author */}
              {section?.author && (
                <div className="mb-8 flex items-center gap-x-2">
                  {section.author.avatar && (
                    <Image
                      src={section.author.avatar}
                      alt="avatar"
                      className="h-12 w-12 rounded-full"
                      width={48}
                      height={48}
                    />
                  )}
                  <div>
                    {section.author.name && (
                      <p className="font-bold">{section.author.name}</p>
                    )}
                    {section.author.lastUpdated && (
                      <p className="font-medium">
                        Last Updated: {section.author.lastUpdated}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {/* Article */}
              {section?.article && (
                <>
                  <div
                    className={`dangerouslySetInnerHTMLStyle mb-5 text-justify ${
                      isExpanded ? "" : "line-clamp-4"
                    }`}
                    dangerouslySetInnerHTML={{ __html: section.article }}
                  />
                  {(articleLength > 665 || isMobile) && (
                    <button
                      onClick={toggleReadMore}
                      className="relative right-0 mb-5 block w-full text-right font-medium hover:text-blue-500"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  )}
                </>
              )}
              {/* List */}
              {section?.list && (
                <ul className="flex flex-wrap gap-x-5">
                  {section.list.map((item: any, index: any) => (
                    <li key={index} className="mb-2 flex items-center gap-x-2">
                      <SiTicktick className="text-xl text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {/* Buttons */}
              {section?.button && (
                <div className="flex gap-x-4 md:max-w-xl">
                  {section.button.button1?.text && (
                    <Link
                      className="button6 flex-[1]"
                      href={section.button.button1.link || "#"}
                    >
                      {section.button.button1.text}
                    </Link>
                  )}
                  {section.button.button2?.text && (
                    <Link
                      className="button7 flex-[1]"
                      href={section.button.button2.link || "#"}
                    >
                      {section.button.button2.text}
                    </Link>
                  )}
                </div>
              )}
              {/* Three Card Section  */}
              {section?.cardsSection && (
                <ThreeCardSection data={section?.cardsSection} />
              )}
              {/* Highlights Slider  */}
              {section?.highlights && (
                <HighlightsSlider data={section?.highlights} />
              )}
              {/* Article1 */}
              {section?.article1 && (
                <>
                  <div
                    className={`dangerouslySetInnerHTMLStyle mb-5 text-justify ${
                      isExpanded ? "" : "line-clamp-4"
                    }`}
                    dangerouslySetInnerHTML={{ __html: section.article1 }}
                  />
                  {(articleLength > 665 || isMobile) && (
                    <button
                      onClick={toggleReadMore}
                      className="relative right-0 mb-5 block w-full text-right font-medium hover:text-blue-500"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  )}
                </>
              )}
              {/* Top Recruiters  */}
              {section?.topRecruitersLogos && (
                <CompaniesScrollSlideShow image={section?.topRecruitersLogos} />
              )}
              {/* Courses */}
              {section?.courses && (
                <div className="md:grid-col-2 my-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {section.courses.length > 0 &&
                    section.courses.map((course: any, i: number) => (
                      <React.Fragment key={i}>
                        <CollegeDetailsCardSlider course={course} />
                      </React.Fragment>
                    ))}
                </div>
              )}
              {/* Important Links  */}
              {section?.importantLinks && (
                <ul className="my-5">
                  {section?.importantLinks?.map((link: any, i: number) => (
                    <li key={i} className="mb-2 flex font-bold">
                      <h6 className="text-blue-950">{link.title}:</h6>
                      <span className="ml-1">
                        <Link
                          className="text-blue-950/50 underline hover:text-blue-500"
                          href={link?.href || "#"}
                        >
                          {link?.text}
                        </Link>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {/* banner  */}
              {section?.banner && (
                <div className="relative my-5">
                  <Image
                    src={section?.banner?.img}
                    alt="banner"
                    width={1700}
                    height={480}
                    className="h-96 w-full object-cover object-center"
                  />
                  <p className="absolute bottom-0 left-0 w-full text-wrap bg-blue-950 bg-opacity-60 px-5 py-3 text-white">
                    <Link href={section?.banner?.href || "#"}>
                      {section?.banner?.text}
                    </Link>
                  </p>
                </div>
              )}
              {/* Table  */}
              {section?.table && (
                <div
                  className="dangerouslySetInnerHTMLStyle mb-8 w-full overflow-x-auto text-justify"
                  dangerouslySetInnerHTML={{ __html: section?.table }}
                />
              )}{" "}
              {/* Semester  */}
              {section?.semesters && <TimelineList data={section?.semesters} />}
              {/* Brochure Section  */}
              {section?.brochureSection && (
                <BrochureSection data={section?.brochureSection} />
              )}

           {/* review stars */}
              {section?.starRating && (
                
                <div className="mt-9">
                  <ReviewsAndRatingsSection data={section?.starRating} />
                </div>
              )}
              {/* Reviews  */}
              {section?.reviews?.individualReviews && (
                <div className="HighlightsSlider relative w-full my-12">
                  <ReviewsSlider
                    reviews={section?.reviews?.individualReviews || []}
                  />{" "}
                </div>
              )}
              {section?.topCourses2 && (
      <TopColleges data={section?.topCourses2} />
    )}
              {/* Article2 */}
              {section?.article2 && (
                <>
                  <div
                    className={`dangerouslySetInnerHTMLStyle mb-5 text-justify ${
                      isExpanded ? "" : "line-clamp-4"
                    }`}
                    dangerouslySetInnerHTML={{ __html: section.article2 }}
                  />
                  {(articleLength > 665 || isMobile) && (
                    <button
                      onClick={toggleReadMore}
                      className="relative right-0 mb-5 block w-full text-right font-medium hover:text-blue-500"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  )}
                </>
              )}
              {/* facilities  */}
              {section?.facilities && (
                <div className="mb-8 flex flex-wrap gap-5 rounded-lg bg-blue-100 p-5">
                  {section?.facilities?.map((d: any, i: number) => (
                    <div
                      key={i}
                      className="flex-center gap-1 rounded-e-3xl rounded-s-3xl border-2 border-zinc-300 bg-white p-3 shadow"
                    >
                      <Image
                        src={d?.icon}
                        alt="icon"
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                      <p className="font-medium text-blue-950">{d?.name}</p>
                    </div>
                  ))}
                </div>
              )}
              {/* Photo Gallery  */}
              {section?.photoGallery && (
                <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {section?.photoGallery?.map((d: any, i: number) => (
                    <Image
                      key={i}
                      src={d.url}
                      alt="gallery"
                      className="h-full max-h-[200px] w-full flex-wrap rounded-lg object-cover"
                    />
                  ))}
                </div>
              )}
              {/* Video Gallery  */}
              {section?.videoGallery && (
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 mt-5">
                  {section?.videoGallery?.map((d: any, i: number) => (
                    <YoutubeVideo
                      videoId={d?.videoId}
                      width={"100%"}
                      height={"200"}
                      key={i}
                    />
                  ))}
                </div>
              )}

              {/* faqs */}
              {section?.faqs && 
              <Faqs data={section?.faqs} />}
{section?.collegereviews && 
              <Review reviews={section?.collegereviews}/>}

<Charts 
      placementData={section?.chartData?.placementData}
      packageData={section?.chartData?.packageData}
      companyDistribution={section?.chartData?.companyDistribution}
    />

{section?.CollegesDataArray && section?.CollegesDataArray.slice(0, 3).map((college: any) => (
            <CollegeFilteredCard key={college.id} college={college} />
          ))}
            </div>
          );
        })}
    </>
  );
}

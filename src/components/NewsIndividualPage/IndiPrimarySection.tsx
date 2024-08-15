import Image from "next/image";
import React from "react";
import MainImage from "@/asset/news/card3.png";
import NewsArticle from "./NewsArticle";
import AdditionalInfo from "./AdditionalInfo";
import NewsRight from "./NewsRight";
import NewsLeft from "./NewsLeft";
import NewsCard from "./NewsCard";

function IndiPrimarySection() {
  const articleData = {
    title:
      "UN chief calls for 'dramatic shift' to transform education worldwide",
    date: "11 July 2024",
    category: "Culture and Education",
    content:
      "The global crisis in education needs a dramatic shift to shape a more peaceful, sustainable and just world, the UN Secretary-General said on Thursday.",
    additionalContent:
      "The application correction window for GATE 2024 at IISc Bangalore is set to commence on November 18, 2023. Applicants can make corrections to their GATE forms until November 24, 2023. Moreover, the GATE 2024 examination is scheduled to be held on February 3, 4, 10, and 11, 2024.",
  };

  const additionalTopics = [
    "Overview",
    "Education System in Germany",
    "Admission Requirements",
    "Average Cost of Living",
    "Visa & Immigrations",
    "FAQs about Studying in Germany",
  ];

  const newsItems = [
    {
      id: 1,
      date: "June 24, 2024 5:40 PM",
      title:
        "UN chief calls for 'dramatic shift' to transform education worldwide",
      image: MainImage,
    },
    {
      id: 2,
      date: "June 24, 2024 5:40 PM",
      title:
        "UN chief calls for 'dramatic shift' to transform education worldwide",
      image: MainImage,
    },
    {
      id: 3,
      date: "June 24, 2024 5:40 PM",
      title:
        "UN chief calls for 'dramatic shift' to transform education worldwide",
      image: MainImage,
    },
    {
      id: 4,
      date: "June 24, 2024 5:40 PM",
      title:
        "UN chief calls for 'dramatic shift' to transform education worldwide",
      image: MainImage,
    },
  ];

  return (
    <div className="">
      <div className="w-full">
        <Image
          src={MainImage}
          alt=""
          width={600}
          height={400}
          className="w-full"
        />
      </div>
      <div className="container mx-auto px-4">
        <main className="py-8">
          <NewsArticle article={articleData} />
          <AdditionalInfo topics={additionalTopics} />
        </main>
      </div>

      <div className="flex items-start justify-between gap-5">
        <div className="lg:w-[70%]">
          <NewsLeft />
        </div>
        <div className="hidden rounded-2xl border border-gray-400 lg:block lg:w-[30%]">
          <NewsRight />
        </div>
      </div>
      <div>
        <NewsCard items={newsItems} />
      </div>
    </div>
  );
}

export default IndiPrimarySection;

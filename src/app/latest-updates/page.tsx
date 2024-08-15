import React from "react";
import HeroSection from "@/components/latest-updates/HeroSection";
import AreYouConfused from "@/components/AreYouConfused";
import ScheduleSection from "@/components/latest-updates/ScheduleSection";
import TopScholarship from "@/components/topScholarship/TopScholarship";
import { abroadColleges } from "@/data/studyAbroadPageData";
import NewsUpdates from "@/components/latest-updates/NewsUpdates";
import LatestNews from "@/components/latest-updates/latestNews/LatestNews";
import FeaturedNews from "@/components/latest-updates/featured-news/FeaturedNews";
import SneakPeek from "@/components/latest-updates/SneakPeek";
import RecentNews from "@/components/latest-updates/recentNews/RecentNews";


export default function page() {


  
  return (
    <div className="bg-white">
        <HeroSection/>
        <NewsUpdates/>
        <LatestNews/>
        <FeaturedNews/>
        <SneakPeek/>
        <RecentNews/>
        <ScheduleSection/>
        <TopScholarship data={abroadColleges?.[0]?.scholarship}/>
        <AreYouConfused />
    </div>
  );
}
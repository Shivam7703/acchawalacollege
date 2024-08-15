import AreYouConfused from "@/components/AreYouConfused";
import Section2 from "@/components/section2/Section2";
import BannerSection from "@/components/studyAbroadPageSections/bannerSection/BannerSection";
import Section6 from "@/components/studyAbroadPageSections/section6/Section6";
import TopCourses from "@/components/topCourses/TopCourses";
import { studyAbroadData } from "@/data/studyAbroadPageData";
import { global } from "@/data/globalData";
import BlogAndOthersFilterSection from "@/components/homePageSections/blogAndOthersFilterSection/BlogAndOthersFilterSection";
import CounsellingPackages from "@/components/homePageSections/counsellingPackages/CounsellingPackages";
import Section10 from "@/components/Section10";
import UpcomingExams from "@/components/upcomingExams/UpcomingExams";
import AbroadTopColleges from "@/components/studyAbroadPageSections/abroadTopColleges/AbroadTopColleges";
import Banner3Section from "@/components/studyAbroadPageSections/bannerSection/Banner3Section";
import Banner2Section from "@/components/studyAbroadPageSections/bannerSection/Banner2Section";
import CountryPreference from "@/components/studyAbroadPageSections/countryPreference";
export default function StudyAbroad() {
  return (
    <>
      <BannerSection data={studyAbroadData?.homeBanner} />
      <Section2 data={studyAbroadData?.section2} sData={studyAbroadData?.section2} />
      <CountryPreference/>
      <AbroadTopColleges data={studyAbroadData.topAbroadColleges} />
      <Section6 data={studyAbroadData?.banner1} />
      <TopCourses data={global?.topCourses} />
      <UpcomingExams data={studyAbroadData?.upcomingExams} />
      <Banner2Section data={studyAbroadData?.banner2} />
      <Section10 data={studyAbroadData?.brochureSection} />
      <BlogAndOthersFilterSection data={global?.BlogsAndOthers} />
      <Banner3Section data={studyAbroadData?.banner3} />
      {/* <CounsellingPackages data={studyAbroadData?.counsellingPackages} /> */}
      <AreYouConfused />
    </>
  );
}

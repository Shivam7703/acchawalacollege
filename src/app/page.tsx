"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import CounsellingPackages from "@/components/homePageSections/counsellingPackages/CounsellingPackages";
import TopColleges from "@/components/topColleges/TopColleges";
import BlogAndOthersFilterSection from "@/components/homePageSections/blogAndOthersFilterSection/BlogAndOthersFilterSection";
import PartnersSection from "@/components/homePageSections/partnersSection/PartnersSection";
import Section2 from "@/components/section2/Section2";
import Section6 from "@/components/homePageSections/section6/Section6";
import TopCourses from "@/components/topCourses/TopCourses";
import Testimonials from "@/components/testimonials/Testimonials";
import { home } from "@/data/homePage";
import { global } from "@/data/globalData";
import BannerSection from "@/components/homePageSections/bannerSection/BannerSection";
import BannerSection1 from "@/components/homePageSections/bannerSection/BannerSection1";
import {
  GET_HOME_PAGE,
  GET_COUNSELLING_PACKAGES,
  GET_PARTNERS,
} from "@/query/schema";
import { flattenAttributes } from "@/utils/flattenAttributes";
import CountryPreference from "@/components/studyAbroadPageSections/countryPreference";

export default function Home() {
  // HOME DATA FETCHING
  const [homeData, setHomeData] = useState<any>(null);
  const [homePartnersData, setHomePartnersData] = useState<any>(null);
  const [counsellingPackagesData, setCounsellingPackagesData] = useState<any>();

  const {
    data: homePageData,
    loading: HomePageLoader,
    error: homePageError,
  } = useQuery(GET_HOME_PAGE);

  useEffect(() => {
    if (homePageData) {
      setHomeData(flattenAttributes(homePageData?.homepages?.data?.[0]));
    }
  }, [homePageData]);

  // END HOME DATA FETCHING

  // SPONSORS DATA FETCHING
  const {
    data: partnersData,
    loading: PartnersLoader,
    error: partnersError,
  } = useQuery(GET_PARTNERS);

  useEffect(() => {
    if (partnersData) {
      setHomePartnersData(
        flattenAttributes(
          partnersData?.heroSections?.data[0]?.attributes?.partners,
        ),
      );
    }
  }, [partnersData]);

  // END SPONSORS DATA FETCHING

  // COUNSELLING PACKAGES DATA FETCHING
  const {
    data: counsellingPackages,
    loading: CounsellingPackagesLoader,
    error: CounsellingPackagesError,
  } = useQuery(GET_COUNSELLING_PACKAGES);

  useEffect(() => {
    if (counsellingPackages) {
      setCounsellingPackagesData(
        flattenAttributes(
          counsellingPackages?.homepages?.data[0]?.attributes
            ?.counsellingPackages,
        ),
      );
    }
  }, [counsellingPackages]);
  // END COUNSELLING PACKAGES DATA FETCHING

  // useEffect(() => {
  //   console.log(counsellingPackagesData, "home");
  // }, [counsellingPackagesData]);

  return (
    <>
          

      <BannerSection data={home?.homeBanner} sData={homeData?.homebanner} />
      <Section2 data={home?.section2} sData={homeData?.section2} />
      <PartnersSection data={global?.partners} sData={homePartnersData} />
      <BannerSection1 data={home?.banner2} sData={homeData?.banner2} />
      <Section6 data={home?.banner1} sData={homeData?.banner1} />

      <TopColleges data={global?.topColleges} />
      <TopCourses data={global?.topCourses} />
      <CounsellingPackages
        data={home?.CounsellingPackages}
        sData={counsellingPackagesData}
      />
      <CountryPreference/>
      <BlogAndOthersFilterSection data={global?.BlogsAndOthers} />
      <Testimonials data={global?.testimonialsSection} />
    </>
  );
}

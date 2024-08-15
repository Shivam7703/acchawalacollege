"use client";
import { au2 } from "@/asset";
import Tab from "@/components/dashboardSections/Tab";
import TabContent from "@/components/dashboardSections/TabContent";
import { dashboard } from "@/data/ProfileDashboard";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import Wrapper from "@/components/Wrapper";
function Profile() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(tab || "Profile");

  useEffect(() => {
    if (
      tab &&
      tab !== activeTab &&
      dashboard.tabs.some((t) => t.label === tab)
    ) {
      setActiveTab(tab);
    }
  }, [tab, activeTab]);

  const handleTabClick = (tabLabel: string) => {
    const selectedTab = dashboard.tabs.find((t) => t.label === tabLabel);
    if (selectedTab) {
      setActiveTab(tabLabel);
      router.push(`?tab=${encodeURIComponent(tabLabel)}`);
    }
  };

  return (
    <section className="backgroundGradient max-md:mp-28 w-full pt-11 mb-16">
     
      <Wrapper
        as="div"
        containerClassName="mt-8 pb-8"
        className="relative grid grid-cols-12 gap-5"
      >
        <aside
          className={`z-30 col-span-3 rounded-2xl bg-white py-5 shadow-2xl max-lg:col-span-4 md:sticky top-16 left-0 md:max-h-[80vh] md:overflow-y-auto ${
            mobileMenu
              ? "max-sm:fixed max-sm:left-0 max-sm:top-0 max-sm:bg-white"
              : "max-sm:hidden"
          }`}
        >
          <ul className="mx-5 flex flex-col justify-between gap-5 text-lg">
            {/* Tabs */}
            <Tab
              tabs={dashboard?.tabs}
              activeTab={activeTab}
              setActiveTab={handleTabClick}
            />
            <li className="flex cursor-pointer items-center gap-2 px-5 py-1.5">
              <CiLogout className="text-2xl" /> Log Out
            </li>
          </ul>
        </aside>      

        <main className="col-span-9  overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl max-lg:col-span-8 max-sm:col-span-12 sm:p-10">
        <ProfileBanner userName={"Ansh Mehera"} userEmail={"ansh110@gmail.com"} avatar={au2} />

          <div className="flex justify-center mt-7">
          <TabContent
            activeTab={dashboard?.tabs?.find((tab) => tab?.label === activeTab)}
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
          /></div>
        </main>
      </Wrapper>
    </section>
  );
}

function ProfileBanner({ userName, avatar, userEmail }: any) {
  return (
    <Wrapper
      as="div"
      className="flex-center rounded-2xl bg-gradient-to-b from-blue-300 to-blue-200 bg-opacity-50 p-3"
    >
      <div className="redOrangeGradient flex h-full w-full items-center gap-5 rounded-2xl p-5 max-sm:flex-col">
        {/* Avatar  */}
        <div className="h-32 w-32 rounded-full bg-white bg-opacity-50 p-2 shadow-2xl">
          <Image
            src={avatar}
            alt="avatar"
            width={100}
            height={100}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-bold md:text-5xl">
            {userName}
          </h1>
          <p className="flex text-xl items-center gap-2 text-nowrap text-zinc-800">
            {/* <FaEdit className="text-xl" /> */}
            <span>{userEmail}</span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Profile />
    </Suspense>
  );
}

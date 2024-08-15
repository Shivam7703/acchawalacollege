import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { CiLocationOn } from "react-icons/ci";
// import { US } from "country-flag-icons/react/3x2";
import { TbCurrencyDollar, TbWorld } from "react-icons/tb";
import { PiRankingBold, PiRankingLight } from "react-icons/pi";
import { FaFlagUsa } from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
});

interface University {
  img: StaticImageData;
  title: string;
}

interface countryProps {
  img: StaticImageData;
  flag: StaticImageData;
  location: string;
  name: string;
  desc: string;
  lang: string;
  avgLivingCost: number[];
  rank: string;
  viewAll: string;
  topUniversities: University[];
  button: { text: string };
}

interface CountryCardProps {
  country: countryProps;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <section className={`${inter.className} mb-5`}>
      <div className="sm:grid w-full sm:grid-cols-3 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        {/* div 1 */}
        <div className="sm:col-span-1 p-2">
  <div className="relative overflow-hidden rounded-t-sm sm:rounded-md" style={{ height: '100%', width: '100%' }}>
    <Image
      src={country.img}
      alt="country"
      className="w-full h-60 sm:h-full object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-55"></div>
    <div className="absolute left-0 top-0 sm:ml-3 sm:mt-3 w-[80px] rounded-br-xl md:rounded-xl bg-white p-2 xl:w-[90px]">
      {/* <US title="United States" className="rounded-lg" /> */}
      <FaFlagUsa />

    </div>
  </div>
</div>


        {/* Div 2*/}
        <div className="sm:col-span-2 flex flex-col p-2">
          {/* line 1 */}
          <div>
            {/* title */}
            <div>
              <Link href={country.viewAll}>
                <h1 className="text-wrap text-[20px] font-bold hover:text-blue-500 md:text-[24px] xl:text-[28px]">
                  {country.name}
                </h1>
              </Link>
            </div>
            {/* location  */}
            <div className="m-3 flex w-fit items-center gap-x-3">
              <CiLocationOn className="text-blue-500" />
              <span className="text-xs hover:cursor-pointer hover:text-blue-500">
                Country in {country.location}
              </span>
            </div>
          </div>

          {/* Line 2 */}

          <div className="mb-3 flex flex-wrap justify-between px-3">
            {/* item 1 */}
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <div>
                  <p className="text-[11px] font-semibold md:text-[11.82px] xl:text-[16px]">
                    National Language
                  </p>
                  <div className="flex flex-wrap items-center gap-x-1">
                    <TbWorld className="text-[20px] text-[#2095F2]" />
                    <p className="text-[9px] text-[#1A1718] md:text-[10.39px] xl:text-[14px]">
                      {country.lang}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* item 2  */}
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <div>
                  <p className="text-[11px] font-semibold md:text-[11.82px] xl:text-[16px]">
                    Avg Living Cost
                  </p>
                  <div className="flex flex-wrap items-center gap-x-1">
                    <TbCurrencyDollar className="text-[20px] text-[#2095F2]" />
                    <p className="text-[9px] text-[#1A1718] md:text-[10.39px] xl:text-[14px]">
                      ${country.avgLivingCost[0]}
                    </p>
                    <span className="font-thin">-</span>{" "}
                    <p className="text-[9px] text-[#1A1718] md:text-[10.39px] xl:text-[14px]">
                      ${country.avgLivingCost[1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* item 3  */}
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <div>
                  <p className="text-[11px] font-semibold md:text-[11.82px] xl:text-[16px]">
                    Ranking
                  </p>
                  <div className="flex flex-wrap items-center gap-x-1">
                    <PiRankingBold className="text-[20px] text-[#2095F2]" />
                    <p className="text-[9px] text-[#1A1718] md:text-[10.39px] xl:text-[14px]">
                      {country.rank}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Line 3 */}
          <div className="p-2">
            <p className="mb-3 font-bold text-[12px] md:text-[12.82px] xl:text-[15px]">Top Universities</p>
            <ul className="flex-col">
              {country?.topUniversities?.map((item, index) => (
                <React.Fragment key={index}>
                  <Link href="#">
                    <li key={index} className="mb-2 flex items-center gap-x-6">
                      <Image
                        src={item.img.src}
                        alt={item.title}
                        width={40}
                        height={40}
                        className=""
                      />
                      <span className="font-bold text-[12px] md:text-[12.82px] xl:text-[15px]">
                        {item.title}
                      </span>
                    </li>
                  </Link>
                </React.Fragment>
              ))}
            </ul>
            <Link
              href={country.viewAll}
              className="text-[#428BC1] text-[7px] md:text-[10px]  xl:text-[13] hover:cursor-pointer hover:underline"
            >
              View All
            </Link>
          </div>

          {/* Line 4 Desc */}
          <div className="my-2 px-4 text-zinc-600">
            <p className="text-wrap text-[10px] xl:text-[14px]">
              <span>{country.desc}</span>
            </p>
          </div>

          {/* button */}
          <div className="mt-auto  hidden items-center justify-center sm:flex">
            <Link href="#" className="">
              <button className="w-full text-nowrap rounded-sm bg-[#012148] px-12 py-[2px] text-[12.24px] font-normal text-white hover:bg-white hover:text-[#012148]  xl:px-14 xl:text-[20px]">
                {country?.button?.text}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryCard;
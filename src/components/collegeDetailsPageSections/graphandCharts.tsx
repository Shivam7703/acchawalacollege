"use client"
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import { ChartsProps } from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function Charts({ placementData, packageData, companyDistribution }: any) {
  const chartData = {
    labels: placementData?.labels,
    datasets: [
      {
        label: 'Number of PPOs',
        data: placementData?.data,
        backgroundColor: 'rgba(255, 165, 0, 0.8)',
        borderColor: 'rgba(255, 165, 0, 1)',
        borderWidth: 1,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            weight: 'bold' as const,
          },
        },
      },
      title: {
        display: true,
        text: 'Placement Year vs Number of PPOs',
        font: {
          weight: 'bold' as const,
          size: 16,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Placement Year',
          font: {
            weight: 'bold' as const,
          },
        },
        ticks: {
          font: {
            weight: 'bold' as const,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of PPOs',
          font: {
            weight: 'bold' as const,
          },
        },
        ticks: {
          font: {
            weight: 'bold' as const,
          },
        },
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <>
      <div className="m-8 border-2 border-gray-300 p-4">
        <p className="text-2xl font-bold text-[#5C5B8F]">
          IIT Madras{" "}
          <span className="text-[#012148]">Highest and Average Package</span>
        </p>
        <div className="mt-12">
          <div className="md:grid grid-cols-5">
            <div className="col-span-1">
              <p className="text-lg font-bold my-3 md:my-0  text-[#012148]">
                Highest Package
              </p>
            </div>
            <div className="col-span-4">
              <div className="h-10 rounded-xl bg-blue-100">
                <div className={`h-full  rounded-l-xl bg-green-600 px-10 py-2 md:text-lg font-bold text-white`}  
                                        style={{ width: `${packageData?.highestPackagePercentage}%` }}
                >
                  {packageData?.highestPackage}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:grid grid-cols-5">
            <div className="col-span-1">
              <p className="text-lg font-bold my-3 md:my-0 text-[#012148]">
                Average Package
              </p>
            </div>
            <div className="col-span-4">
              <div className="h-10 rounded-xl bg-blue-100">
                <div className={`h-full  rounded-l-xl bg-orange-500 px-4 md:px-8 py-2 md:text-lg  font-bold text-white`}        
                       style={{ width: `${packageData?.averagePackagePercentage}%` }}
                >
                  {packageData?.averagePackage}
                </div>
              </div>
            </div>
          </div>

          <div className="xl:mx-4 lg:mt-6 mt-4 flex flex-row-reverse xl:gap-36 lg:gap-20 md:gap-10 gap-3 ">
            <p className="font-medium md:text-base text-xs text-gray-700">2.0 crore</p>
            <p className="font-medium md:text-base text-xs text-gray-700">1.6 crore</p>
            <p className="font-medium md:text-base text-xs text-gray-700">1.2 crore</p>
            <p className="font-medium md:text-base text-xs text-gray-700">80.0 lakhs</p>
            <p className="font-medium md:text-base text-xs text-gray-700">40.0 lakhs</p>
            <p className="font-medium md:text-base text-xs text-gray-700">0</p>
          </div>
        </div>
      </div>

      <div className="m-8  p-4">
        <p className="text-2xl font-bold text-[#5C5B8F]">
          IIT Madras{" "}
          <span className="text-[#012148]">
            Alumni Distribution by Companies
          </span>
        </p>

        <div className="mt-4 flex gap-4">
          <button className="rounded-full border-2 border-blue-700 bg-blue-100 px-8 py-1 text-blue-700">
            Companies
          </button>
          <button className="rounded-full border-2 border-blue-700 bg-blue-100 px-8 py-1 text-blue-700">
            Sector
          </button>
        </div>

        <div className="mt-10">
          {companyDistribution?.map((company :any, index :any) => (
           <div key={index} className="my-2 h-10 rounded-xl bg-blue-100 w-full">
           <div 
             className={`h-full rounded-l-xl ${company?.color} lg:px-5 px-2 py-2 lg:text-lg md:text-base text-[10px] font-bold text-white`}
             style={{ width: `${company?.percentage}%` }}
           >
             {company?.name} {company?.percentage}%
           </div>
         </div>
          ))}
        </div>
      </div>

      <div className="m-8  p-4">
        <p className="text-2xl font-bold text-[#5C5B8F]">
          IIT Madras{" "}
          <span className="text-[#012148]">Placements Year - Wise Trends</span>
        </p>
        <p>
          During IIT Madras Placements 2023, {placementData?.data[0]} pre placement offers were
          received. The number of PPOs increased from {placementData?.data[1]} in 2022 to {placementData?.data[0]} in
          2023.
        </p>
        <div className="flex items-center justify-center mt-10">
          <div className="mx-auto w-full max-w-4xl px-4">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[32rem]">
              <Bar data={chartData} options={options} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
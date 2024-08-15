import TextWithLineBreak from "@/utils/TextWithLineBreak";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ExamFilteredCard({ exam }: any) {
  return (
    <div className="relative mb-5 w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {/* Div 1 */}
      <div className="w-full grid-cols-12 flex-col gap-4 gap-y-2 p-5 max-md:flex md:grid">
        {/* left Side */}
        {exam?.logo && (
          <div className="col-span-2 ">
            <Image
              src={exam?.logo}
              alt="collage"
              className="w-full rounded-md object-contain max-md:max-h-24"
              loading = 'lazy' 
            />
          </div>
        )}
        {/* mid Side */}
        <div className="col-span-7 flex flex-col justify-between">
          {exam?.title && (
            <Link href={`/exams/${exam?.slug || "#"}`}>
              <h1 className=" mb-3 text-wrap text-xl font-medium hover:text-blue-500 md:text-2xl">
                <TextWithLineBreak text={exam?.title} />
              </h1>
            </Link>
          )}
          <div>
            {exam?.examDate && (
              <p className="flex justify-between gap-x-2 border-b border-zinc-300 max-md:text-sm">
                <span>Exam Date</span>
                <span>{formatDate(exam?.examDate)}</span>
              </p>
            )}
            {exam?.applicationFormDate && (
              <p className="flex justify-between gap-x-2 border-b border-zinc-300 max-md:text-sm">
                <span>Application Form</span>
                <span className="flex max-sm:flex-col">
                <span>
                  {formatDate(exam?.applicationFormDate?.startDate)} -{" "}
                </span>
                <span>{formatDate(exam?.applicationFormDate?.endDate)}</span>
                </span>
              </p>
            )}
            {exam?.resultAnnounceDate && (
              <p className="flex justify-between gap-x-2 border-b border-zinc-300 max-md:text-sm">
                <span>Result Announce</span>
                <span>{formatDate(exam?.resultAnnounceDate)}</span>
              </p>
            )}
          </div>
        </div>
        {/* Right Side  */}
        <div className="col-span-3 flex flex-col gap-2 md:justify-between">
          <Link href="#">
            <button className="w-full rounded-lg border-2 border-blue-950 bg-blue-950 px-4 py-2 text-white  hover:bg-blue-900 ">
              {exam.button1.text}
            </button>
          </Link>
          <Link href="#">
            <button className="w-full rounded-lg border-2 border-blue-700 bg-blue-700 px-4 py-2 text-white  hover:bg-blue-900">
              {exam.button2.text}
            </button>
          </Link>
          <Link href="#">
            <button className="w-full rounded-lg border-2 border-blue-700 px-1 py-2 text-blue-500 hover:bg-zinc-100 ">
              {exam.button3.text}
            </button>
          </Link>
        </div>
      </div>
      {/* Div 2  */}
      <div className="flex flex-wrap justify-between gap-y-2 border-t-2 border-blue-900 p-3">
        <ul className="flex flex-wrap items-center gap-x-4 rounded-md bg-blue-100 px-4 py-1 text-sm text-blue-600">
          {exam?.examDetails?.slice(0, 5)?.map((item: any, index: number) => (
            <React.Fragment key={index}>
              <Link href={`/exams/${exam?.slug || "#"}/#${item?.navItem}`}>
                <li
                  key={index}
                  className="cursor-pointer capitalize hover:underline"
                >
                  {item?.navItem}
                </li>
              </Link>
              {index !== exam?.examDetails?.length - 1 && <li>|</li>}
            </React.Fragment>
          ))}
          {exam.examDetails?.length > 5 && (
            <Link href={`/exams/${exam?.slug}` || '#'}>
              <li className="cursor-pointer capitalize hover:underline">
                more
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}

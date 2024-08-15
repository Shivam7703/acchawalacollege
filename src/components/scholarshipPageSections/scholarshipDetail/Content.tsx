import TimelineList from "@/components/TimelineList";
import CollegeDetailsCardSlider from "@/components/cards/CollegeDetailsCardSlider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiTicktick } from "react-icons/si";

export default function Content({ collegeDetails, selectedIndex }: any) {
  const selectedDetail = collegeDetails[selectedIndex];

  return (
    <div className="mt-5 w-full border-b border-zinc-300 pb-5">
      {/* Title  */}
      {selectedDetail?.title && (
        <h1 className="title1 mb-8">
          {selectedDetail?.title?.t1 && (
            <span className="text-blue-950/70">
              {selectedDetail?.title?.t1}
            </span>
          )}{" "}
          {selectedDetail?.title?.t2 && (
            <span className="text-blue-950">{selectedDetail?.title?.t2}</span>
          )}{" "}
          {selectedDetail?.title?.t3 && (
            <span className="text-sky-500">{selectedDetail?.title?.t3}</span>
          )}{" "}
        </h1>
      )}
      {/* Author  */}
      {selectedDetail?.author && (
        <div className="mb-8 flex items-center gap-x-2">
          {selectedDetail?.author?.avatar && (
            <Image
              src={selectedDetail?.author?.avatar}
              alt="avatar"
              className="h-12 w-12 rounded-full"
            />
          )}
          <div>
            {selectedDetail?.author?.name && (
              <p className="font-bold">{selectedDetail?.author?.name}</p>
            )}
            {selectedDetail?.author?.lastUpdated && (
              <p className="font-medium">
                Last Updated: {selectedDetail?.author?.lastUpdated}
              </p>
            )}
          </div>
        </div>
      )}
      {/* Article  */}
      {selectedDetail?.article && (
        <div
          className="dangerouslySetInnerHTMLStyle mb-8 text-justify"
          dangerouslySetInnerHTML={{ __html: selectedDetail?.article }}
        />
      )}
      {/* Read More  */}
      {selectedDetail?.readMoreLink && (
        <p className="mb-5 w-full text-right">
          <Link
            href={selectedDetail?.readMoreLink}
            className="w-min text-nowrap font-medium hover:text-blue-500 hover:underline"
          >
            Read More
          </Link>
        </p>
      )}
      {/* Image  */}
      {selectedDetail?.image && (
        <div className="w-full">
          {selectedDetail?.image?.map((i: any, index: any) => (
            <div className="relative mb-5 w-full" key={index}>
              <Image
                src={i?.img}
                alt="image"
                className="h-80 w-full object-cover"
              />
              <p className="absolute bottom-0 left-0 w-full bg-blue-950 p-2 pl-5 text-white opacity-80">
                {i?.text}
              </p>
            </div>
          ))}
        </div>
      )}
      {/* facilities  */}
      {selectedDetail?.facilities && (
        <div className="mb-8 flex flex-wrap gap-5 rounded-lg bg-blue-100 p-5">
          {selectedDetail?.facilities?.map((d: any, i: number) => (
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
      {/* List  */}
      {selectedDetail?.list && (
        <ul className="flex flex-wrap gap-x-5">
          {selectedDetail?.list.map((item: any, index: any) => (
            <li key={index} className="mb-2 flex items-center gap-x-2">
              <SiTicktick className="text-xl text-blue-500" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {/* buttons  */}
      {selectedDetail?.button && (
        <div className="flex gap-x-4 md:max-w-xl">
          {selectedDetail?.button?.button1?.text && (
            <Link
              className="button6 flex-[1]"
              href={selectedDetail?.button?.button1?.link}
            >
              {selectedDetail?.button?.button1?.text}
            </Link>
          )}
          {selectedDetail?.button?.button2?.text && (
            <Link
              className="button7 flex-[1]"
              href={selectedDetail?.button?.button2?.link}
            >
              {selectedDetail?.button?.button2?.text}
            </Link>
          )}
        </div>
      )}
      {/* Courses  */}
      {selectedDetail?.courses && (
        <div className="md:grid-col-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {selectedDetail?.courses.length > 0 &&
            selectedDetail?.courses?.map((course: any, i: number) => (
              <React.Fragment key={i}>
                <CollegeDetailsCardSlider course={course} />
              </React.Fragment>
            ))}
        </div>
      )}
      {/* Table  */}
      {selectedDetail?.table && (
        <div
          className="dangerouslySetInnerHTMLStyle mb-8 text-justify"
          dangerouslySetInnerHTML={{ __html: selectedDetail?.table }}
        />
      )}
    </div>
  );
}

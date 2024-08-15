import React from "react";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import Link from "next/link";

export default function Banner3Section({ data }: any) {
  return (
    <section className="my-5 w-full md:my-16">
      <Wrapper>
        {data?.title && (
          <h1 className="title1 mb-2">
            {data?.title?.t1 && (
              <span className="text-blue-950/70">{data?.title?.t1}</span>
            )}{" "}
            {data?.title?.t2 && (
              <span className="text-blue-950">{data?.title?.t2}</span>
            )}{" "}
            {data?.title?.t3 && (
              <span className=" text-blue-500">{data?.title?.t3}</span>
            )}
          </h1>
        )}
        {data?.text && <p className="mb-5">{data?.text}</p>}
        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
          <Image
            src={data?.img}
            alt="assistanceFrom"
            width={800}
            height={800}
            className="col-span-1 min-h-[400px] w-full rounded-2xl object-cover max-md:hidden"
          />
          <div className="col-span-1 flex flex-col justify-between">
            <ul className="flex flex-col gap-2 md:gap-4">
              {data?.steps?.map((item: any, index: any) => (
                <li key={index} className="flex items-center gap-5">
                  <span className="rounded-xl bg-blue-500 p-2 text-2xl text-white">
                    <IoMdCheckmark />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href={data?.button?.href || "#"} className="w-min">
            <button className="max-md:mt-5 flex-center active:scale-906 w-min text-nowrap rounded-e-full rounded-s-full bg-blue-950 px-8 py-3 text-white transition-all duration-300 hover:bg-blue-900">
              {data?.button?.text}
            </button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

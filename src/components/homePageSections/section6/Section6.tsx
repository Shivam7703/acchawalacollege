"use client";
import useIsMobile from "@/customHooks/useIsMobile";
import {
  textWithLineBreak,
  textWithoutLineBreak,
} from "@/utils/TextWithLineBreak";
import Image from "next/image";
import Link from "next/link";

export default function Section6({ data, sData }: any) {
  const isMobile = useIsMobile(450);
  return (
    <section className="my-5 w-full">
      <div className="relative mx-auto w-full">
        {data?.bgImg?.url && (
          <Image
            src={data?.bgImg?.url}
            alt="bg"
            width={2880}
            height={768}
            className="max-h-[368px] w-full object-cover max-md:h-[480px]"
          />
        )}
        <div className="flex-center absolute left-0 top-0 h-full w-full flex-col gap-5 bg-blue-950/70 px-5">
          {data?.title && (
            <h1 className="text-wrap text-center font-medium text-white max-md:text-lg md:text-4xl">
              {isMobile
                ? textWithoutLineBreak(data?.title)
                : textWithLineBreak(data?.title)}
            </h1>
          )}
          {data?.text1 && (
            <p className="text-wrap text-center text-white max-md:text-sm">
              {isMobile
                ? textWithoutLineBreak(data?.text1)
                : textWithLineBreak(data?.text1)}
            </p>
          )}
          {data?.button && (
            <Link
              href={data?.button?.href || "#"}
              className="button4 rounded-lg"
            >
              <button>{data?.button?.text}</button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

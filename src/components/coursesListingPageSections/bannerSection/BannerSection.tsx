"use client";
import useIsMobile from "@/customHooks/useIsMobile";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import Image from "next/image";
import Link from "next/link";

export default function BannerSection({ data }: any) {
  const isMobile = useIsMobile(768); // breakpoint
  return (
    <section className="my-5 w-full">
      <div className="relative mx-auto max-w-screen-2xl overflow-hidden">
        {data?.bg1 && <div className="w-full">
          <Image
            src={data?.bg1}
            alt="bg"
            width={2880}
            height={768}
            className="max-h-[368px] w-full object-cover max-md:h-[568px]"
          />
        </div>}
        <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-center gap-8 bg-blue-950/70 px-5 md:pl-14">
          {data?.title && (
            <h1 className="text-wrap  font-medium text-white max-md:text-lg md:text-4xl">
              {isMobile ? data?.title : <TextWithLineBreak text={data?.title} />}
            </h1>
          )}
          {data?.text && (
            <p className="text-wrap text-white max-md:text-sm">
              {isMobile ? data?.text : <TextWithLineBreak text={data?.text} />}
            </p>
          )}
          {data?.button && <Link
            href={data?.button?.href || "#"}
            className="button4 w-max rounded-lg"
          >
            <button>{data?.button?.text}</button>
          </Link>}
        </div>
        <div className="absolute -right-[10%] top-1/2 flex h-[200%] -translate-y-1/2 items-center rounded-full bg-white/50 p-40 max-lg:hidden ">
          <Image
            src={data?.bg2}
            alt="bg"
            className="max-h-[368px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

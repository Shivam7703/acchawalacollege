import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import TextWithLineBreak from "@/utils/TextWithLineBreak";

export default function Section10({ data }: any) {
  return (
    <section className="my-5 w-full bg-blue-950">
      <Wrapper isMaxWidthChangeRequired="max-w-screen-2xl" className="flex items-center justify-between  py-10 text-white max-md:flex-col max-md:text-center">
        {data?.text && (
          <h2 className="text-lg font-medium">
            <TextWithLineBreak text={data?.text} />
          </h2>
        )}
        {data?.buttons && data?.buttons?.button1 && (
          <Link
            className="flex-center rounded border  border-blue-950 bg-white px-5 py-3 text-sm font-bold text-blue-950 transition-all duration-300 hover:bg-gray-100 active:scale-90 max-md:mt-3"
            href={data?.buttons?.button1?.href || "#"}
            target="_blank"
            rel="noreferrer"
            download={true}
          >
            {data?.buttons?.button1?.text}
          </Link>
        )}
      </Wrapper>
    </section>
  );
}

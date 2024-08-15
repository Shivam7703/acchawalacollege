import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";
import { questionImg } from "@/asset";

export default function AreYouConfused() {
  return (
    <section className="my-5 w-full md:p-5">
      <Wrapper className="flex max-md:flex-col max-md:text-center justify-between md:rounded-xl bg-gradient-to-r from-sky-800 to-sky-500 p-5 text-white">
        <div className="flex flex-col max-md:items-center justify-center gap-y-5 md:pl-10">
          <h1 className="title1">Are you Confused?</h1>
          <p>Ask anything and get your answer in 48 hours</p>
          <Link href="/contact-us" className="button7 max-w-48">
            Ask a Question
          </Link>
        </div>
        <Image
          src={questionImg}
          alt=""
          width={300}
          className="h-full w-full md:max-w-[200px] object-contain max-md:mt-3"
        />
      </Wrapper>
    </section>
  );
}

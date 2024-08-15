import Image from "next/image";
import React from "react";

export default function ThreeCardSection({ data }: any) {
  return (
    <section className="my-16 w-full">
      <div className="flex w-full  max-md:flex-col">
        <Card
          bgColor="bg-blue-950"
          title={data?.card1?.title}
          text={data?.card1?.text}
          icon={data?.card1?.icon}
        />
        <Card
          bgColor="bg-[#165bae]"
          title={data?.card2?.title}
          text={data?.card2?.text}
          icon={data?.card2?.icon}
        />
        <Card
          bgColor="bg-sky-500"
          title={data?.card3?.title}
          text={data?.card3?.text}
          icon={data?.card3?.icon}
        />
      </div>
    </section>
  );
}

function Card({ bgColor, title, text, icon }: any) {
  return (
    <div className={`flex-center flex-col [flex:1] ${bgColor} p-5 text-white`}>
      <Image src={icon} alt="icon" className="mb-2" />
      <h3 className="text-3xl font-medium">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

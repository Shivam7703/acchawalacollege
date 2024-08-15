import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface scholarshipProps {
  img: StaticImageData;
  uccImg: StaticImageData;
  imgText: string;
  title: string;
  eligiblity: string;
  type: string;
  numberOfSchol: number;
  ammount: number;
  degree: string;
  button1: { text: string };
  button2: { text: string };
}

interface scholarshipCardProps {
  data: scholarshipProps;
}

const ScholarshipCard: React.FC<scholarshipCardProps> = ({ data }) => {
  return (
    <section>
      <div className="max-w-[300px]">
        {/* div 1 */}
        <div className="relative">
          <Image src={data.img} alt="img" className="object-cover" />
          <div className="absolute inset-0 bg-black opacity-55"></div>
          <div className="absolute bottom-1/3  ml-3 overflow-hidden rounded-sm">
            <Image src={data.uccImg} alt="img" />
            <div className="absolute bottom-0 flex w-full items-center justify-center py-2">
            <h1 className="text-nowrap text-[14px] leading-[19px]  text-white">
              {data.imgText}
            </h1>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ScholarshipCard;
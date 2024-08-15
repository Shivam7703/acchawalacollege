"use client";
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/dashboardSections/Button";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";
import { exam1 } from "@/asset";
export function AppliedCollege({ }: any) {
 
  const appliedCollegeData = [{id:1,
    img:exam1,
    collegeName:"Maharaja Agrasen College - [MAC], New Delhi",
    applyDate:"26 May 24",
    collegeAddress:"New Delhi, Delhi NCR"
  },{id:2,
    img:exam1,
    collegeName:"Maharaja Agrasen College - [MAC], New Delhi",
    applyDate:"26 May 24",
    collegeAddress:"New Delhi, Delhi NCR"
  },{id:3,
    img:exam1,
    collegeName:"Maharaja Agrasen College - [MAC], New Delhi",
    applyDate:"26 May 24",
    collegeAddress:"New Delhi, Delhi NCR"
  }]

  return (
    <div className="w-full">
          <h2 className="text-xl font-bold">Your Applied Colleges</h2>
<div className="space-y-2 m-5">
  {appliedCollegeData?.map((item)=>(
    <div key={item.id} className="!my-5 flex p-5 gap-2 bg-blue-50 rounded-xl justify-between items-center max-md:flex-col">
<Image src={item.img} className="sm:h-28 w-auto rounded-xl h-20"
alt="college img"/> <div className="md:w-[65%] max-md:text-center"><h3 className="lg:text-3xl font-bold text-2xl">{item.collegeName}</h3><p>{item.collegeAddress}</p></div>
<div className="ml-9 p-4 border-2 border-zinc-400 rounded-lg max-md:ml-0 max-md:flex gap-5"><p className="font-medium">{item.applyDate}</p><p className="text-zinc-500">Apply Date</p></div>
    </div>
  ))}
</div>
    </div>
  );
}

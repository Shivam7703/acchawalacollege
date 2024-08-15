"use client";
import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import Stepper from "../../stepper/Stepper";
import { Button } from "../../dashboardSections/Button";
import { LiaUserSecretSolid } from "react-icons/lia";
import { SiGitbook } from "react-icons/si";
import { HiBuildingLibrary } from "react-icons/hi2";
import { FaPlaneDeparture, FaUserNinja } from "react-icons/fa";
import { YourDetails } from "./YouDetails";
import { EducationDetails } from "./EducationDetail";
import { DesiredCollege } from "./DesiredCollege";
import { ProfessionalExp } from "./ProfessionalExp";
import AbroadCollege from "./StudyAbroad";

export default function Profile({}: any) {
  const stepItems = [
    <span key="1" role="img" aria-label="step-1" className=" text-2xl font-bold m-2 leading-none h-5 text-center w-5">
1    </span>,
    <span key="2" role="img" aria-label="step-2" className=" text-2xl font-bold m-2 leading-none h-5 text-center w-5">
2    </span>,
    <span key="3" role="img" aria-label="step-3" className=" text-2xl font-bold m-2 leading-none h-5 text-center w-5">
3    </span>,
    <span key="4" role="img" aria-label="step-4" className=" text-2xl font-bold m-2 leading-none h-5 text-center w-5">
4    </span>,
    <span key="5" role="img" aria-label="step-4" className=" text-2xl font-bold m-2 leading-none h-5 text-center w-5">
5    </span>,
  ];

  const stepItemsContent = [
    "Your Details",
    "Eduction Details",
    "Desired Colleges",
    "Professional Experience",
    "Study Abroad",
  ];
  const [nextButtonState, setNextButtonState] = useState<boolean>(false);

  // const { handleSubmit } = useForm();

  // const handleFormSubmit = async (data: any) => {
  //   setNextButtonState(true);
  //   alert("Form submitted");
  //   console.log("Form data:", data);
  //   setNextButtonState(false);
  // };
  return (
    <div className="w-full">
      <Stepper
        stroke={3}
        strokeColor="#96C6FD"
        fillStroke="#040487"
        // bullet bg-color
        activeColor="#BFDBFE"
        // bullet border
        activeProgressBorder="2px double #040487"
        submitBtn={" "}
        continueBtn={
          <Button
            variant="blue"
            className="text-nowrap"
            disabled={nextButtonState}
            type="submit"
          >
            Next
          </Button>
        }
        backBtn={<Button variant="lightBlue">Previous</Button>}
        stepItem={stepItems}
        stepItemsContent={stepItemsContent}
        // onContinue={(step) => handleFormSubmit(step)}
        // onSubmit={(step) => alert(`Thank you!!! Final Step -> ${step}`)}
        nextButtonState={nextButtonState}
      >
        <div className="pt-10">
          <YourDetails setNextButtonState={setNextButtonState} />
        </div>
        <div className="pt-10">
          <EducationDetails setNextButtonState={setNextButtonState} />
        </div>
        <div className="pt-10">
        <DesiredCollege setNextButtonState={setNextButtonState} />
        </div>
        <div className="pt-10">
        <ProfessionalExp setNextButtonState={setNextButtonState} />
        </div>
        <div className="pt-10">
        <AbroadCollege  />
        </div>
      </Stepper>
    </div>
  );
}

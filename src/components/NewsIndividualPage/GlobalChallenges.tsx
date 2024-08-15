// components/GlobalChallenges.tsx
import React from "react";
import Image from "next/image";
import ChallengeSection from "./ChallengeSection";
import EducationLevel from "./EducationLevel";

interface GlobalChallengesProps {
  challenges: any;
  educationLevels: any;
  speakerImage: any;
}

const GlobalChallenges: React.FC<GlobalChallengesProps> = ({
  challenges,
  educationLevels,
  speakerImage,
}) => {
  return (
    <div className="p-4">
      {challenges.map((challenge: any, index: any) => (
        <ChallengeSection key={index} {...challenge} />
      ))}

      <div className="mb-8 w-full">
        <Image
          src={speakerImage}
          alt="Speaker"
          width={400}
          height={200}
          className="w-full rounded-lg"
        />
      </div>

      {educationLevels.map((level: any, index: any) => (
        <EducationLevel key={index} {...level} />
      ))}
    </div>
  );
};

export default GlobalChallenges;
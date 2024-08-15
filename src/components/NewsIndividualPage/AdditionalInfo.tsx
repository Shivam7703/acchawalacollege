// components/AdditionalInfo.tsx
import React from "react";

interface AdditionalInfoProps {
  topics: string[];
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ topics }) => {
  return (
    <div className="rounded bg-blue-100 p-4">
      <h2 className="mb-4 text-xl font-semibold">This Story also Contains</h2>
      <ul>
        {topics.map((topic, index) => (
          <li key={index} className="mb-2">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdditionalInfo;
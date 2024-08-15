// components/ChallengeSection.tsx
import React from "react";

const ChallengeSection = ({ title, content }: any) => (
  <div className="mb-8">
    <h2 className="mb-4 border-l-2 border-blue-600 p-2 text-2xl font-bold text-blue-600">
      {title}
    </h2>
    {content.map((paragraph: any, index: any) => (
      <p key={index} className="mb-4">
        {paragraph}
      </p>
    ))}
  </div>
);

export default ChallengeSection;
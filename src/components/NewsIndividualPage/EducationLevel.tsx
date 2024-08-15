// components/EducationLevel.tsx
import React from "react";

const EducationLevel = ({ title, description }: any) => (
  <div className="mb-6">
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p>{description}</p>
  </div>
);

export default EducationLevel;
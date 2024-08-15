import React from "react";

const ChoicesCard: React.FC = () => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-blue-100 p-4">
      <div>
        <h2 className="text-xl font-semibold">
          Overwhelmed by College Choices?
        </h2>
        <p className="mt-2">Let us guide you.</p>
      </div>
      <button className="rounded bg-blue-500 px-4 py-2 text-white">
        Explore Now
      </button>
    </div>
  );
};

export default ChoicesCard;
import React from "react";
import UpdateCard from "./UpdateCard";
import ChoicesCard from "./ChoicesCard";

function NewsRight() {
  const updates = [
    {
      date: "June 24, 2024 5:30 PM",
      title: "Scholarship: Check Closing Ranks",
      description:
        "IIT Madras JEE Advanced Cutoff 2024: The Joint Seat Allocation Authority (JoSAA) is releasing the JEE Advanced Cutoff 2024 for IIT Madras on ...",
      link: "#",
    },
    // Add more update objects as needed
  ];
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">Important Updates</h1>
        <hr className="mb-4" />
        <div className="space-y-4">
          {updates.map((update, index) => (
            <UpdateCard key={index} {...update} />
          ))}
          <ChoicesCard />
        </div>
      </div>
    </div>
  );
}

export default NewsRight;
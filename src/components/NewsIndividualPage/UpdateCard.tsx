import React from "react";

interface UpdateCardProps {
  date: string;
  title: string;
  description: string;
  link: string;
}

const UpdateCard: React.FC<UpdateCardProps> = ({
  date,
  title,
  description,
  link,
}) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <p className="text-sm text-gray-500">{date}</p>
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>
      <p className="mt-2">{description}</p>
      <a
        href={link}
        className="mt-2 inline-block text-blue-500 hover:underline"
      >
        Read More
      </a>
    </div>
  );
};

export default UpdateCard;
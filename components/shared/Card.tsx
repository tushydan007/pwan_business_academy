import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <div className="max-w-sm w-full rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-5">
        <h2 className="md:text-xl text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;

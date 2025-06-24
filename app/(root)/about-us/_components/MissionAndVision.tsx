import React from "react";

type MissionAndVisionProps = {
  text: string;
  bgColor?: string;
  textColor?: string;
  subTitle: string;
};

const MissionAndVision = ({
  text,
  bgColor = "bg-white",
  textColor = "text-black",
  subTitle,
}: MissionAndVisionProps) => {
  return (
    <div
      className={`w-full max-w-[22rem] sm:max-w-sm md:max-w-md lg:w-96 h-auto rounded-2xl overflow-hidden shadow-xl p-4 sm:p-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl flex flex-col items-center text-center cursor-pointer ${bgColor}`}
    >
      <h2>{subTitle}</h2>
      <p className={`text-sm sm:text-base md:text-lg mt-4 ${textColor}`}>
        {text}
      </p>
    </div>
  );
};

export default MissionAndVision;

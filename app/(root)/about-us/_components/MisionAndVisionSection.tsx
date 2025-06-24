import React from "react";
import MissionAndVision from "./MissionAndVision";

const MisionAndVisionSection = () => {
  return (
    <section>
      <div className="px-4 md:px-8 lg:px-12 flex gap-x-16">
        <MissionAndVision
          subTitle="Our Mision"
          text="Hello World"
          bgColor="bg-white"
          textColor="text-black"
        />
        <MissionAndVision
          subTitle="Our Vision"
          text="Hello World"
          bgColor="bg-[#AD1419]"
          textColor="text-white"
        />
      </div>
    </section>
  );
};

export default MisionAndVisionSection;

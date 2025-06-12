import React from "react";
import WhyUsCard from "../WhyUsCard";

const WhyUs = () => {
  return (
    <section className="mt-16">
      <h2 className="text-red-600 font-semibold text-2xl lg:text-4xl md:text-3xl md:mb-10 my-4 text-center">
        Why Us
      </h2>
      <div className="flex flex-col md:flex-row gap-10 py-14 items-center justify-center space-y-10 md:space-y-0 px-10 md:px-0">
        <WhyUsCard
          icon="/assets/aid.png"
          text="The academy provides training in digital marketing, emotional intelligence, team building, public speaking, cold outreach, and sales closing techniques"
        />
        <WhyUsCard
          icon="/assets/checkMark.png"
          text="It helps individuals develop personal and professional abilities to become better business owners PWAN Business Academy is a premier institution."
          bgColor="bg-red-700"
          textColor="text-white"
        />
        <WhyUsCard
          icon="/assets/analytics.png"
          text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. "
        />
      </div>
    </section>
  );
};

export default WhyUs;

import HeroSection from "@/app/_components/Hero";
import React from "react";
import Overview from "./_components/Overview";
import WhyUs from "./_components/WhyUs";
import FaqSection from "./_components/Faqs";
// import MisionAndVisionSection from "./_components/MisionAndVisionSection";

const AboutUs = () => {
  return (
    <div>
      <HeroSection
        image="/assets/aboutjpg.png"
        introText="About"
        btnText="Take a tour"
      />
      <Overview />
      <WhyUs />
      {/* <MisionAndVisionSection /> */}
      <FaqSection />
    </div>
  );
};

export default AboutUs;

import HeroSection from "@/app/_components/Hero";
import React from "react";
import Overview from "./_components/Overview";
import WhyUs from "./_components/WhyUs";
import FaqSection from "./_components/Faqs";

const AboutUs = () => {
  return (
    <div>
      <HeroSection image="/assets/aboutjpg.png" introText="About" />
      <Overview />
      <WhyUs />
      <FaqSection />
    </div>
  );
};

export default AboutUs;

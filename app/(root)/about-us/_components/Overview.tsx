import Image from "next/image";
import React from "react";
import abt from "@/public/assets/abt.png";

const Overview = () => {
  return (
    <section className="py-24 px-10">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex-1 mx-auto flex justify-center relative">
          <Image
            src={abt}
            alt="about PBA"
            width={400}
            height={300}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
        <div className="md:px-10 flex-1">
          <h2 className="text-[#AD1419] font-semibold text-2xl lg:text-4xl md:text-3xl md:mb-10 my-4">
            Overview
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            PWAN Business Academy is a forward-thinking educational hub
            dedicated to empowering individuals with the skills, mindset, and
            mentorship needed to succeed in today&apos;s business and
            professional world. As part of the broader PWAN initiative, our
            mission is to bridge the gap between academic knowledge and
            practical, real-world experience.
          </p>
          <br />
          <p className="text-sm sm:text-base md:text-lg">
            We specialize in delivering hands-on, transformational training
            programs that focus on personal development, career readiness,
            business growth, and leadership mastery. Our goal is to raise a new
            generation of high-performing individuals who are not just
            competent, but confident, proactive, and purpose-driven. At PWAN
            Business Academy, we believe that everyone has the potential to
            grow, lead, and win — with the right guidance. That&apos;s why
            we&apos;re committed to not just teaching, but transforming lives.
            Let us help you unlock your full potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;

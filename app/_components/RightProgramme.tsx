import { Card } from "@/components/ui/card";
import React from "react";
import CustomCard from "./HomeCard";

const RightProgramme = () => {
  return (
    <section className="py-10 px-6 md:px-8 mt-14">
      <div>
        <h4 className="text-center font-bold lg:text-4xl md:text-3xl text-2xl text-red-600">
          Find The Right Programme For You
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12 py-10 place-items-center">
          <CustomCard
            description="Our Affiliate Mentorship Program is a structured coaching or training initiative designed to help individuals succeed in affiliate marketing. It typically includes education, guidance, and real-world strategies to promote products or services and earn commissions.:"
            imageUrl="/assets/amp.png"
            title="Affiliate Mentorship Program (AMP)"
          />
          <CustomCard
            description="An Employability and Workplace Readiness Program equips individuals with essential soft skills, professional behavior, communication abilities, and job search strategies needed to succeed in the workplace."
            imageUrl="/assets/ewrp.jpg"
            title="Employability and Workplace Readiness Program (EWRP)"
          />
          <CustomCard
            description="Our Culture and Accountability Immersion Program is designed to align employees with an organization’s core values, mission, and expected behaviors through interactive learning and real-world scenarios. It emphasizes personal responsibility, ethical decision-making, and fostering a high-performance culture where individuals are accountable for their actions and contributions."
            imageUrl="/assets/caip2.jpg"
            title="Culture and Accountability Immersion Program  (CAIP)"
          />
          <CustomCard
            description="Our High Performance Team Player Program focuses on developing collaborative skills, emotional intelligence, and a results-driven mindset to thrive in dynamic team environments. It empowers individuals to communicate effectively, resolve conflicts, and contribute meaningfully to team goals while embracing shared accountability and continuous improvement."
            imageUrl="/assets/http.png"
            title="High Performance Team Player Program (HTPP)"
          />
        </div>
      </div>
    </section>
  );
};

export default RightProgramme;

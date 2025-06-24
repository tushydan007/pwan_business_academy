import React from "react";
import CustomCard from "./HomeCard";
import Link from "next/link";

const cards = [
  {
    description:
      "Our Affiliate Mentorship Program is a structured coaching or training initiative designed to help individuals succeed in affiliate marketing. It typically includes education, guidance, and real-world strategies to promote products or services and earn commissions.:",
    imageUrl: "/assets/amp.png",
    title: "Affiliate Mentorship Program (AMP)",
    href: "/programs",
  },
  {
    description:
      "An Employability and Workplace Readiness Program equips individuals with essential soft skills, professional behavior, communication abilities, and job search strategies needed to succeed in the workplace.",
    imageUrl: "/assets/caip.jpg",
    title: "Employability and Workplace Readiness Program (EWRP)",
    href: "/programs",
  },
  {
    description:
      "Our Culture and Accountability Immersion Program is designed to align employees with an organization’s core values, mission, and expected behaviors through interactive learning and real-world scenarios.",
    imageUrl: "/assets/caip2.jpg",
    title: "Culture and Accountability Immersion Program  (CAIP)",
    href: "/programs",
  },
  {
    description:
      "Today’s economy is powered by teams that collaborate, innovate, and deliver. This program transforms you into a high-impact contributor by refining your emotional intelligence, teamwork ability, communication skills, and leadership potential.",
    imageUrl: "/assets/http.png",
    title: "High Performance Team Player Program (HTPP)",
    href: "/programs",
  },
  {
    description:
      "An Employability and Workplace Readiness Program equips individuals with essential soft skills, professional behavior, communication abilities, and job search strategies needed to succeed in the workplace.",
    imageUrl: "/assets/caip.jpg",
    title: "Employability and Workplace Readiness Program (EWRP)",
    href: "/programs",
  },
];

const RightProgramme = () => {
  return (
    <section className="py-2 px-6 md:px-8 mt-14">
      <div>
        <h4 className="text-center font-bold lg:text-4xl md:text-3xl text-2xl text-[#AD1419] mb-12">
          Find The Right Programme For You
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-12 py-10 place-items-center">
          {cards.map((card) => (
            <Link href={card.href} key={card.imageUrl}>
              <CustomCard
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightProgramme;

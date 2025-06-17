"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  feedback: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Cornelius Ezeh",
    role: "Software Engineer",
    image: "/assets/chyma.jpg",
    feedback:
      "The instructors are incredibly knowledgeable and supportive, the curriculum is well-structured, and the hands-on experience truly prepared me for real-world challenges.",
  },
  {
    id: 2,
    name: "Jude Jonathan",
    role: "Big Data Scientist",
    image: "/assets/jude.jpg",
    feedback:
      "This platform has transformed how I manage my real estate business. The interface is clean, fast, and intuitive.",
  },
  {
    id: 3,
    name: "Nonso Igwe",
    role: "Investor",
    image: "/assets/nonso.jpg",
    feedback:
      "From listing to closing deals, this app has been a game changer. Truly professional design and features.",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-8 bg-transparent">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-36">
          Genuine feedback from our learners
        </h2>
      </div>

      <div className="relative max-w-md mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[current].id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Card className="relative bg-white pt-16 pb-10 px-6 rounded-2xl shadow-lg text-center">
              {/* Profile Image */}
              <div className="absolute -top-[100px] md:-top-[110px] left-1/2 transform -translate-x-1/2">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  width={200}
                  height={200}
                  priority
                  className="rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>

              {/* Quote Icon */}
              <div className="text-4xl mb-3">“</div>

              {/* Name & Role */}
              <h3 className="uppercase font-semibold text-lg">
                {testimonials[current].name}
              </h3>
              <p className="italic text-gray-500 text-sm mb-4">
                {testimonials[current].role}
              </p>

              {/* Feedback */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonials[current].feedback}
              </p>

              {/* Stars */}
              {/* <div className="flex justify-center gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div> */}
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={clsx(
                "w-3 h-3 rounded-full transition",
                i === current ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

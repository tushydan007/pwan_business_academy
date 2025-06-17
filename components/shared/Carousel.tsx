"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const carouselImages = [
  { src: "/assets/carousel1.jpg", alt: "Slide 1" },
  { src: "/assets/carousel2.jpg", alt: "Slide 2" },
  { src: "/assets/carousel3.jpg", alt: "Slide 3" },
  { src: "/assets/carousel5.jpg", alt: "Slide 4" },
];

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden mt-16">
      <AnimatePresence initial={false}>
        <motion.div
          key={carouselImages[index].src}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src={carouselImages[index].src}
            alt={carouselImages[index].alt}
            fill
            objectFit="cover"
            className="rounded-none"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Optional: Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {carouselImages.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;

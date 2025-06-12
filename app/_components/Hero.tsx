"use client";

import Image from "next/image";
import heroImg from "@/public/assets/heroImg.jpg";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

type HeroProps = {
  image: string
  introText: string
}

export default function HeroSection({image, introText}: HeroProps) {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={image}
        alt="Hero Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-start px-6 lg:px-12 z-10 mt-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="text-white max-w-2xl"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={textVariants}
            custom={0}
          >
            {introText}
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={textVariants}
            custom={1}
          >
            PWAN Business Academy
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6"
            variants={textVariants}
            custom={2}
          >
            <i>...empowering greatness.</i>
          </motion.p>
          <motion.button
            className="px-6 py-3 bg-red-700 hover:bg-red-800 transition rounded-xl text-white font-medium"
            variants={textVariants}
            custom={3}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

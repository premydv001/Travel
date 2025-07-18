"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

const slides = [
  { id: 1, url: "/images/usa.jpg", alt: "Paris" },
  { id: 2, url: "/images/mountain.webp", alt: "Mountains" },
  { id: 3, url: "/images/beach.jpg", alt: "Beach" },
];

const HeroSection = () => {
  return (
    <div className="relative w-full h-[70vh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-[70vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-screen object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore the World with Us
        </motion.h1>

        <motion.div
          className="flex space-x-4 mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-full hover:bg-blue-100 transition">
            Start Journey
          </button>
          <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-blue-900 transition">
            Read Blog
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

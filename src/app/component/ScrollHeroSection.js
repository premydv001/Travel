"use client"

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollHeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-100 py-12 px-4 space-y-20">
      {/* Main Heading */}
      <div className="text-center" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700">
          🌍 Discover the World with Wanderlust
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Explore hand-picked destinations, stories, and unforgettable travel
          experiences.
        </p>
      </div>

      {/* Section 1: Mountains */}
      <div
        className="flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-10"
        data-aos="fade-right"
      >
        <img
          src="/images/mountain.webp"
          alt="Mountains"
          className="rounded-lg w-full md:w-1/2 shadow-xl"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            🏔 Mountain Adventures
          </h2>
          <p className="text-gray-600">
            Discover peace and thrill in the world's most stunning mountain
            ranges. Perfect for hiking, skiing, or just breathing fresh air.
          </p>
        </div>
      </div>

      {/* Section 2: Beach */}
      <div
        className="flex flex-col md:flex-row-reverse items-center max-w-5xl mx-auto gap-10"
        data-aos="fade-left"
      >
        <img
          src="/images/beach.jpg"
          alt="Beach"
          className="rounded-lg w-full md:w-1/2 shadow-xl"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            🏖 Sunny Beaches
          </h2>
          <p className="text-gray-600">
            Relax on golden sands, dive into crystal-clear waters, and soak in
            the serenity of the sea breeze.
          </p>
        </div>
      </div>

      {/* Parallax Style Call to Action */}
      <div
        className="h-[300px] md:h-[400px] bg-fixed bg-center bg-cover flex items-center justify-center text-white rounded-lg shadow-lg"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x900/?travel,adventure')`,
        }}
        data-aos="zoom-in"
      >
        <div className="bg-black/60 p-8 rounded text-center">
          <h2 className="text-3xl font-bold mb-2">✨ Adventure Awaits</h2>
          <p className="text-lg">
            Start your journey today. Explore, dream, discover.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScrollHeroSection;

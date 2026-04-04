"use client";
import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    id: 2,
    text: "Their strategic approach to SEO and content marketing has transformed our online presence. We highly recommend their services to any company looking to grow in a competitive market.",
    name: "Jane Doe",
    role: "COO at TechFlow",
  },
  {
    id: 3,
    text: "Professionalism and results are what you get with this team. Our conversion rate improved by 40% within the first six months of collaboration.",
    name: "Michael Chen",
    role: "Founder of StartupHub",
  },
  {
    id: 4,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    id: 5,
    text: "Their strategic approach to SEO and content marketing has transformed our online presence. We highly recommend their services to any company looking to grow in a competitive market.",
    name: "Jane Doe",
    role: "COO at TechFlow",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="max-w-6xl mx-auto mb-10 md:mb-30 md:p-0 p-4 ">
      <div className=" flex md:flex-row flex-col gap-5 md:gap-10 mb-8 md:mb-16 ">
        <h1 className="text-2xl md:text-[40px] font-medium rounded-lg bg-main-color px-2 border border-main-color text-center ">
          Testimonials
        </h1>
        <p className="max-w-lg text-xs md:text-lg text-center ">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <div className="bg-secondary-color py-4 md:py-8 md:px-0 px-4 rounded-[45px] text-white overflow-hidden">
        {/* Testimonial Cards Container */}
        <div className="relative h-90 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center text-center max-w-4xl"
            >
              {/* Bubble Card */}
              <div className="relative border border-main-color rounded-[45px] p-6 md:p-10 mb-8">
                <p className="text-md md:text-xl font-light leading-relaxed">
                  {testimonials[currentIndex].text}
                </p>
                {/* Speech Bubble Arrow */}
                <div className="absolute -bottom-4 left-12 w-8 h-8 bg-secondary-color border-b border-r border-main-color rotate-45"></div>
              </div>

              {/* Author Info */}
              <div className="text-left w-full pl-16">
                <h4 className="text-main-color font-bold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 md:gap-20 mt-6 md:mt-10">
          <button
            onClick={handlePrev}
            className="text-white hover:text-main-color transition-colors cursor-pointer"
          >
            <ArrowLeft size={28} />
          </button>

          {/* Indicators */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`cursor-pointer transition-all duration-300 transform ${
                  currentIndex === index
                    ? "w-4 h-4 bg-main-color rotate-45"
                    : "w-3 h-3 bg-white rotate-45 hover:bg-grey-color"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-white hover:text-main-color transition-colors cursor-pointer"
          >
            <ArrowRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

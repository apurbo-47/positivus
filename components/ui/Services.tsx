"use client";
import React from "react";
import Image from "next/image";

const cards = [
  {
    title: "Search Engine Optimization",
    bg: "bg-[#F3F3F3]",
    text: "text-black",
    img: "/images/seo.png",
  },
  {
    title: "Pay-per-click Advertising",
    bg: "bg-[#B9FF66]",
    text: "text-black",
    img: "/images/ppc.png",
  },
  {
    title: "Social Media Marketing",
    bg: "bg-[#191A23]",
    text: "text-white",
    img: "/images/social.png",
  },
  {
    title: "Email Marketing",
    bg: "bg-[#F3F3F3]",
    text: "text-black",
    img: "/images/email.png",
  },
  {
    title: "Content Creation",
    bg: "bg-[#B9FF66]",
    text: "text-black",
    img: "/images/content.png",
  },
  {
    title: "Analytics and Tracking",
    bg: "bg-[#191A23]",
    text: "text-white",
    img: "/images/tracking.png",
  },
];

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto mb-10 md:mb-30 md:p-0 p-5">
      <div className=" flex gap-5 md:gap-10 ">
        <h1 className="text-2xl md:text-[40px] font-medium rounded-lg bg-main-color px-2 border border-main-color">
          Services
        </h1>
        <p className="max-w-xl text-xs md:text-lg">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className=" grid sm:grid-cols-2 gap-5 md:gap-10 mt-8 md:mt-16">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`${card.bg} ${card.text} rounded-4xl p-6 min-h-55 flex items-center justify-between border border-b-4 border-secondary-color`}
          >
            {/* Text */}
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-lg font-semibold leading-snug  max-w-40">
                {card.title}
              </h3>

              <button className="flex items-center gap-2 text-sm font-medium">
                <span className="w-8 h-8 rounded-full bg-black text-main-color flex items-center justify-center -rotate-45">
                  →
                </span>
                Learn more
              </button>
            </div>

            {/* Image */}
            <div className="relative w-40 h-40">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

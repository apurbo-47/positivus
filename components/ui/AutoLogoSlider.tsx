"use client";

import Image from "next/image";

const logos = [
  "/images/amazon.png",
  "/images/dribble.png",
  "/images/hubsport.png",
  "/images/notion.png",
  "/images/netflix.png",
  "/images/zoom.png",
];

export default function AutoLogoSlider() {
  return (
    <div className="w-full max-w-7xl mx-auto overflow-hidden py-6  md:mb-20">
      <div className="relative">
        <div className="flex w-max animate-scroll gap-24">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-30 opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={logo}
                alt="brand"
                width={124}
                height={40}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

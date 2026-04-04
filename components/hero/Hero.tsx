import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto flex md:flex-row flex-col justify-center gap-8 md:gap-24  md:mb-16 md:p-0 p-5">
      <div className="md:w-[50%]">
        <h1 className="text-2xl md:text-[60px] font-medium mb-4 md:mb-8">
          Navigating the digital landscape for success
        </h1>
        <p className="text-sm md:text-xl mb-4 md:mb-8 md:pr-12">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="md:px-6 px-4 md:py-3 py-2  text-sm md:text-xl border rounded-2xl bg-secondary-color text-white cursor-pointer ">
          Book a consultation
        </button>
      </div>
      <div>
        <Image
          src="/images/Illustration.png"
          alt=""
          width={600}
          height={400}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;

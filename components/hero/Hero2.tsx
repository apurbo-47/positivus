import Image from "next/image";
import React from "react";

const Hero2 = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto bg-grey-color border border-grey-color rounded-2xl flex md:flex-row flex-col justify-center gap-5 md:gap-10 mb-10 md:mb-32 ">
        <div className="p-6 md:p-12 md:w-[50%]">
          <h1 className="text-xl md:text-3xl font-medium mb-4 md:mb-7">
            Let’s make things happen
          </h1>
          <p className="text-sm md:text-lg mb-4 md:mb-7">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className=" text-sm md:text-xl md:px-6 px-4 md:py-3 py-2 border border-secondary-color rounded-2xl bg-secondary-color text-white cursor-pointer">
            Get your free proposal
          </button>
        </div>
        <div className="relative md:px-0 px-6">
          <Image
            src="/images/Frame19.png"
            alt=""
            width={400}
            height={300}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;

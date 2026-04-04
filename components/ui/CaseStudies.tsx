import { ArrowUpRight } from "lucide-react";
import React from "react";

const data = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

const CaseStudies = () => {
  return (
    <div className="max-w-6xl mx-auto mb-10 md:mb-32 md:p-0 p-5">
      <div className=" flex gap-5 md:gap-10 ">
        <h1 className="text-2xl md:text-[40px] font-medium rounded-lg bg-main-color px-2 border border-main-color">
          Case Studies
        </h1>
        <p className="max-w-lg text-xs md:text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="  bg-secondary-color text-white rounded-3xl p-8 md:p-10 mt-8 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white">
          {data.map((item, index) => (
            <div key={index} className="py-6 md:py-0 md:px-10">
              <p className="text-sm md:text-lg text-white leading-relaxed">
                {item.text}
              </p>

              <button className="mt-5 flex items-center gap-2 text-sm md:text-xl text-main-color font-medium hover:gap-3 transition-all cursor-pointer hover:underline">
                Learn more
                <ArrowUpRight size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;

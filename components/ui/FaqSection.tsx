"use client";
import React from "react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: "01",
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "02",
    title: "Research and Strategy Development",
    content: "Research and planning phase.",
  },
  { id: "03", title: "Implementation", content: "Execution of the strategy." },
  {
    id: "04",
    title: "Monitoring and Optimization",
    content: "We track and improve performance.",
  },
  {
    id: "05",
    title: "Reporting and Communication",
    content: "Regular updates and reports.",
  },
  {
    id: "06",
    title: "Continual Improvement",
    content: "Regular updates and reports.",
  },
];

const FaqSection = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="max-w-6xl mx-auto mb-10 md:mb-30">
      <div className=" px-4 flex  md:flex-row flex-col gap-5 md:gap-10 ">
        <h1 className="text-xl md:text-[40px] font-medium rounded-lg bg-main-color px-2 border border-main-color text-center">
          Our Working Process
        </h1>
        <p className="max-w-xs text-xs md:text-lg text-center">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-4 mt-8 md:mt-16">
        {faqs.map((item, index) => {
          const isOpen = active === index;

          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300
              ${isOpen ? "bg-main-color border-b-4 border-secondary-color" : "bg-grey-color border-secondary-color border-b-4"}`}
            >
              {/* Header */}
              <button
                onClick={() => setActive(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-5"
              >
                <div className="flex items-center gap-4">
                  {/* Left Number */}
                  <span className="text-xl font-semibold">{item.id}</span>

                  <h3 className="font-medium text-left">{item.title}</h3>
                </div>

                {/* Plus Minus Icon */}
                <div className="w-8 h-8 rounded-full border bg-grey-color text-secondary-color flex items-center justify-center cursor-pointer">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              {/* Content */}
              <div
                className={`overflow-hidden transition-all duration-300
                ${isOpen ? "max-h-40 px-5 pb-5" : "max-h-0"}`}
              >
                <p className="text-sm">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;

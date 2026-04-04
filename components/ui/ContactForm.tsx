"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulating an API call
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section className="relative mb-10 md:mb-30 ">
      <div className="relative w-full max-w-6xl mx-auto bg-[#F3F3F3] rounded-[40px] p-10 md:p-16 overflow-hidden shadow-sm">
        {/* Decorative Elements (Right Side) */}
        {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none ">
          <div className=" ">
            <Image
              src="/images/contact.png"
              alt="contact"
              width={500}
              height={400}
              className=" w-full h-full object-cover relative "
            />
          </div>
        </div> */}

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="relative z-10 max-w-lg">
          {/* Radio Group */}
          <div className="flex gap-8 mb-8">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="radio"
                  name="type"
                  className="peer sr-only"
                  defaultChecked
                />
                <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#B9FF66] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
              </div>
              <span className="text-lg">Say Hi</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="radio" name="type" className="peer sr-only" />
                <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#B9FF66] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
              </div>
              <span className="text-lg">Get a Quote</span>
            </label>
          </div>

          {/* Input Fields */}
          <div className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-6 py-4 rounded-2xl border border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#B9FF66] transition-all"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email*</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 rounded-2xl border border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#B9FF66] transition-all"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message*</label>
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-6 py-4 rounded-2xl border border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#B9FF66] transition-all resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#191A23] text-white py-5 rounded-2xl text-xl font-medium hover:bg-black transition-colors active:scale-[0.98]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default ContactForm;

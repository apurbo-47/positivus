"use client";

import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-0 ">
      <div className=" flex  md:flex-row flex-col gap-5 md:gap-10 mb-8 md:mb-16">
        <h1 className="text-2xl md:text-[40px] font-medium rounded-lg bg-main-color px-2 border border-main-color text-center">
          Contact Us
        </h1>
        <p className="max-w-lg text-xs md:text-lg text-center">
          Connect with Us: Lets Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="rounded-[45px] bg-[#f3f3f3] py-8 md:py-15 mb-10 md:mb-30 overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          {/* Left Form */}
          <div className="max-w-xl px-5 md:px-20">
            <form className="space-y-5">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 bg-white"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Email*</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 bg-white"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Message*</label>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 bg-white"
                  required
                />
              </div>

              <button className="px-6 py-3 rounded-2xl w-full bg-secondary-color text-white cursor-pointer">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Image */}
          <div className="relative h-112.5 w-[140%] -mr-[40%] hidden md:block">
            <Image
              src="/images/contact.png"
              alt="shape"
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

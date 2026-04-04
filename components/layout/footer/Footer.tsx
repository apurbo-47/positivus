import React from "react";

import Link from "next/link";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full px-4  md:px-10">
      <div className="mx-auto max-w-6xl rounded-t-[45px] bg-[#191A23] px-10  text-white">
        {/* Top Section: Logo and Navigation */}
        <div className="flex flex-col items-center justify-between gap-4 md:gap-8 md:flex-row">
          <div className="flex items-center ">
            {/* Simple representation of the logo icon */}

            <Image
              src="/images/LogoWhite(2).png"
              alt=""
              width={100}
              height={100}
              className="w-28 h-28 object-contain "
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm underline-offset-4">
            <Link href="#" className="hover:underline">
              About us
            </Link>
            <Link href="#" className="hover:underline">
              Services
            </Link>
            <Link href="#" className="hover:underline">
              Use Cases
            </Link>
            <Link href="#" className="hover:underline">
              Pricing
            </Link>
            <Link href="#" className="hover:underline">
              Blog
            </Link>
          </nav>

          <div className="flex gap-4">
            <Link
              href="#"
              className="rounded-full bg-white p-2 text-[#191A23] hover:bg-[#B9FF66] transition-colors"
            >
              <LiaLinkedin size={20} fill="currentColor" />
            </Link>
            <Link
              href="#"
              className="rounded-full bg-white p-2 text-[#191A23] hover:bg-[#B9FF66] transition-colors"
            >
              <FaFacebook size={20} fill="currentColor" />
            </Link>
            <Link
              href="#"
              className="rounded-full bg-white p-2 text-[#191A23] hover:bg-[#B9FF66] transition-colors"
            >
              <BsTwitter size={20} fill="currentColor" />
            </Link>
          </div>
        </div>

        {/* Middle Section: Contact and Newsletter */}
        <div className="mt-8 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          {/* Contact Info */}
          <div className="space-y-4">
            <span className="inline-block rounded-md bg-[#B9FF66] px-2 py-0.5 text-black font-medium">
              Contact us:
            </span>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="w-full rounded-2xl bg-[#292A32] p-8 md:p-10 lg:max-w-xl">
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-white/20 bg-transparent px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-[#B9FF66]"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-xl bg-[#B9FF66] px-8 py-4 font-semibold text-black transition-transform hover:scale-105 active:scale-95"
              >
                Subscribe to news
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-10 border-t border-white pt-8 flex flex-col md:flex-row gap-4 items-center pb-8">
          <p className="text-sm">© 2023 Positivus. All Rights Reserved.</p>
          <Link href="#" className="text-sm underline underline-offset-4">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md mb-5 md:mb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">
              <Image
                src="/images/logo2.png"
                alt="logo"
                width={200}
                height={100}
                className="w-24 md:w-40 h-24 md:h-40 object-contain"
              />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/about" className="hover:text-blue-500 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-blue-500 transition">
              Services
            </Link>
            <Link href="/use" className="hover:text-blue-500 transition">
              Use Cases
            </Link>
            <Link href="/pricing" className="hover:text-blue-500 transition">
              Pricing
            </Link>
            <Link href="/blog" className="hover:text-blue-500 transition">
              Blog
            </Link>
            <button className="border border-secondary-color rounded-[14px] px-4 md:px-6 py-2 md:py-3 cursor-pointer hover:bg-secondary-color hover:text-white">
              Request a quote
            </button>
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden ">
            <button className="cursor-pointer" onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg ">
          <div className="flex flex-col px-4 py-4 space-y-3">
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/use" onClick={() => setOpen(false)}>
              Use Cases
            </Link>
            <Link href="/pricing" onClick={() => setOpen(false)}>
              Pricing
            </Link>
            <Link href="/blog" onClick={() => setOpen(false)}>
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="main-container">
      <div className=" flex justify-between md:my-16 md:mx-20 ">
        <div className="flex gap-2">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={36}
            height={36}
            className="w-8 h-8"
          />
          <h3 className="text-3xl font-bold">Positivus</h3>
        </div>
        <div className="flex gap-10">
          <ul className="flex items-center gap-10  text-xl">
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/use" className="hover:text-blue-600">
                Use Cases
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-blue-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600">
                Blog
              </Link>
            </li>
          </ul>
          <button className="border border-secondary-color rounded-xl px-6 py-3 cursor-pointer text-xl hover:bg-secondary-color hover:text-white">
            Request a quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

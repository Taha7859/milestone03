import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <main>
      <section className="h-full w-full bg-black mt-20 text-white">
        <div className="flex flex-col md:flex-row pt-20 md:space-x-20 lg:space-x-52 space-y-10 md:space-y-0">
          
          {/* images side */}
          <div className="md:ml-10 lg:ml-40 space-y-6 mx-4 sm:mx-10">
            <h1 className="text-white text-4xl sm:text-5xl font-serif font-bold">
              Taha
            </h1>
            <p className="text-sm sm:text-base lg:text-lg tracking-wide md:w-[430px]">
              We craft innovative designs that empower brands and elevate user experiences.
            </p>
          </div>

          {/* contact us side */}
          <div className="mx-4 sm:mx-10 space-y-4 md:space-y-6 md:relative md:right-20">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">US Contact</h1>
            <div className="flex items-start">
              <p className="text-3xl sm:text-4xl">
                <IoIosMail />
              </p>
              <div className="ml-3">
                <p className="text-sm sm:text-base lg:text-lg font-semibold">Email</p>
                <Link href="/contact" className="text-gray-400">
                  info@1designinghub.com
                </Link>
              </div>
            </div>
            <div className="flex items-start">
              <p className="text-3xl sm:text-4xl">
                <IoCall />
              </p>
              <div className="ml-3">
                <p className="text-sm sm:text-base lg:text-lg font-semibold">Phone</p>
                <Link href="/" className="text-gray-400">
                  +1 (281) 652-8539
                </Link>
              </div>
            </div>
            <div className="flex items-start">
              <p className="text-3xl sm:text-4xl">
                <FaMapMarkerAlt />
              </p>
              <div className="ml-3">
                <p className="text-sm sm:text-base lg:text-lg font-semibold">Address</p>
                <p>Apt 1106 De Moss drive Houston TX</p>
              </div>
            </div>
          </div>

          {/* company side */}
          <div className="flex flex-col text-sm sm:text-base lg:text-lg space-y-2 md:space-y-3 lg:space-y-4 mx-4 md:relative md:right-14 sm:mx-10">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Company</h1>
            <Link href="/">HOME</Link>
            <Link href="/">BLOG</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </div>

        </div>

        {/* Divider */}
        <div className="w-[80%] sm:w-[90%] lg:w-full h-[1px] bg-slate-900 mt-10 mx-auto"></div>

        {/* Footer Bottom */}
        <div className="space-y-3 py-10 text-center px-4 sm:px-10">
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
            Copyright © 2022 Taha. All rights reserved
          </p>
          <p className="text-gray-400 tracking-wide text-xs sm:text-sm md:text-base md:w-4/5 lg:w-[1280px] mx-auto">
            DISCLAIMER: The logos, names, and graphics of brands, products, and services featured on this website are the trademarks of their respective owners. All other company names, trademarks, and logos mentioned herein are the property of their respective owners and do not imply any endorsement, sponsorship, or recommendation by or for the respective trademark holders.
          </p>
        </div>
      </section>
    </main>
  );
}

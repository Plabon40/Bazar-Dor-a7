import Image from "next/image";
import Link from "next/link";
import React from "react";
import TodayDate from "./Date";

const Herocomponent = () => {
  return (
    <section className="bg-[#f0f5f0] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 rounded-[26px] border border-[#dfe8df] bg-[#fbfdfb] px-5 py-7 sm:px-8 md:grid-cols-[1.35fr_0.65fr] md:px-10 lg:min-h-[290px] lg:px-12">
        {/* Text Section */}
        <div className="flex flex-col items-start">
          <span className="rounded-full bg-[#e0f2e5] px-3 py-1 text-sm font-medium text-[#07863d]">
            <TodayDate />
          </span>

          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#202a22] sm:text-4xl lg:text-[38px]">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#69736b] sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#078b43] px-6 py-3 text-sm font-bold text-white shadow-[0_3px_0_#056b33] transition duration-200 hover:-translate-y-0.5 hover:bg-[#067638] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#078b43] focus:ring-offset-2"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center md:justify-end">
          <Image
            src="/bazar-hero.png"
            alt="Fresh fruits and vegetables in a basket"
            width={320}
            height={260}
            priority
            className="h-auto w-52 object-contain sm:w-60 lg:w-72"
          />
        </div>
      </div>
    </section>
  );
};

export default Herocomponent;

"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative flex items-center justify-between bg-[#f7f7f7] rounded-xl md:mx-16 mt-6 overflow-hidden">
      {/* Left Arrow */}
      <button className="bg-lime-400 p-2 rounded-full absolute left-2 z-10">
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-8 p-8">
        <div>
          <Image
            src="/grass.jpg"
            alt="Grass"
            width={500}
            height={300}
            className="rounded-xl"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            JF Privezy Grass Wall
          </h2>
          <p className="text-gray-600">The Perfect Blend Of Greenery</p>
          <button className="bg-lime-400 text-black px-6 py-2 rounded-full font-medium hover:bg-lime-500 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Arrow */}
      <button className="bg-lime-400 p-2 rounded-full absolute right-2 z-10">
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Banner;

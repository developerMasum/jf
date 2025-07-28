"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import assets from "@/assets";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-12 mb-12 ">
      <div className="bg-[#F2F4F6] p-10 rounded-2xl shadow-xl w-full md:w-[1100px] h-[600px] flex flex-col justify-between">
        <div className="text-[#B0DD1D]">
          <FaQuoteLeft className="w-16 h-16" />
        </div>

        <p className="text-gray-800 text-xl font-semibold leading-relaxed">
          I had an initial issue with stock availability and delivery. Once the
          product arrived on site, the work was completed very fast (400ft).
          Great value for money and easy to install. I’m happy with the product!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          distinctio quo provident maiores officia, ipsa, voluptatum accusamus
          deleniti praesentium, illo pariatur maxime. Nostrum velit laudantium
          necessitatibus adipisci illo quo quam omnis illum ab numquam?
        </p>

        <div
          className="relative mt-6 px-6 py-6 rounded-md border-t border-gray-300 flex items-center justify-between"
          style={{
            backgroundImage: `url(${assets.bannerBg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100px",
          }}
        >
          <div className="relative z-10 w-full flex items-center justify-between">
            <span className="font-semibold text-gray-900">
              - Samuel Varughese
            </span>
            <div className="flex items-center gap-3">
              <button className="p-2 bg-white border rounded-full hover:bg-gray-200 transition">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2 bg-white border rounded-full hover:bg-gray-200 transition">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full md:w-[400px] h-[600px] rounded-2xl overflow-hidden ">
        <Image
          src={assets.testimonial}
          alt="Customer"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl p-3 bg-[#F2F4F6]"
        />
      </div>
    </div>
  );
};

export default Testimonial;

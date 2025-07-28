"use client";

import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import assets from "@/assets";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#00274D] to-[#003B73] text-white rounded-t-3xl px-6 md:px-20 pt-16 pb-10">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Join Our JF Products</h2>
          <p className="text-sm mb-4">
            We'll tell you about store updates and discounts
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-full bg-[#11395B] placeholder-gray-300 mb-3"
          />

          <label className="flex items-center gap-2 text-sm text-gray-300 mb-4">
            <input type="checkbox" className="accent-[#B0DD1D]" />
            Yes, subscribe me to your newsletter.
          </label>

          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold w-full">
            Join Now
          </button>

          <div className="flex items-center gap-4 mt-6">
            <Image src={assets.logo} alt="JF Logo" width={60} height={60} />
            <div>
              <p className="font-semibold">Our Branches</p>
              <p className="text-sm text-gray-300">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-4">Helpful</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Shipping Policy</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
          </ul>

          <button className="bg-[#B0DD1D] text-black px-6 py-2 rounded-full font-semibold mt-6">
            Contact Us
          </button>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        <p>Copyright © 2025 JF Products. All rights reserved</p>

        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="bg-white p-2 rounded-full text-black">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="bg-white p-2 rounded-full text-black">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="bg-white p-2 rounded-full text-black">
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

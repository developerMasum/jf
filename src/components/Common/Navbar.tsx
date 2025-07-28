"use client";

import assets from "@/assets";
import { ShoppingCart, User, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white">
      {/* Left Links */}
      <div className="flex items-center gap-12">
        <Link href="/" className="text-lg font-semibold">
          Home
        </Link>
        <Link href="/shop" className="text-lg font-semibold">
          Shop
        </Link>
        <Link href="/blogs" className="text-lg font-semibold">
          Blogs
        </Link>
        <Link href="/contact" className="text-lg font-semibold">
          Contact
        </Link>
      </div>

      {/* Center Logo */}
      <div className="flex justify-center items-center bg-white  shadow-md rounded-full p-2">
        <Image
          src={assets.logo}
          alt="JF Logo"
          width={90}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <Link href="/login" className="text-lg font-semibold">
          Login
        </Link>
        <User className="w-5 h-5" />
        <Search className="w-5 h-5" />
        <div className="relative">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute top-[-6px] right-[-6px] text-xs bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

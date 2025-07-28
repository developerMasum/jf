"use client";

import React from "react";
import { Building, Landmark, LandmarkIcon, MapPin } from "lucide-react";

const branches = [
  { name: "COIMBATORE", icon: <Building className="w-6 h-6" />, active: true },
  { name: "CHENNAI", icon: <Landmark className="w-6 h-6" />, active: false },
  { name: "HYDERABAD", icon: <Landmark className="w-6 h-6" />, active: false },
  { name: "GOA", icon: <LandmarkIcon className="w-6 h-6" />, active: false },
  { name: "KOCHI", icon: <Landmark className="w-6 h-6" />, active: false },
  { name: "MUMBAI", icon: <Landmark className="w-6 h-6" />, active: false },
];

const ContactMapSection = () => {
  return (
    <div className="max-w-7xl mx-auto rounded-2xl border p-6">
      {/* Branch Tabs */}
      <div className="flex justify-center gap-6 mb-10">
        {branches.map((branch, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-1 cursor-pointer ${
              branch.active ? "text-[#B0DD1D]" : "text-gray-500"
            }`}
          >
            <div
              className={`p-2 border ${
                branch.active
                  ? "border-[#B0DD1D] rounded-md"
                  : "border-transparent"
              }`}
            >
              {branch.icon}
            </div>
            <p className="text-sm font-semibold">{branch.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-[#0C2341] to-[#062C4D] p-8 rounded-2xl space-y-4 text-white">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-[#173A5E] placeholder-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-[#173A5E] placeholder-gray-300"
          />
          <input
            type="tel"
            placeholder="Phone *"
            className="w-full p-3 rounded-md bg-[#173A5E] placeholder-gray-300"
          />
          <textarea
            rows={4}
            placeholder="Write message"
            className="w-full p-3 rounded-md bg-[#173A5E] placeholder-gray-300"
          ></textarea>
          <button className="bg-[#B0DD1D] text-black px-6 py-2 rounded-md font-semibold hover:bg-lime-400 transition">
            Submit
          </button>
        </div>

        <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1075454237157!2d77.57384857506792!3d12.93813678737471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159aa4c49855%3A0x2107e94fdf3669e9!2sJRR%20Towers!5e0!3m2!1sen!2sbd!4v1722142230123!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="rounded-2xl border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-md flex items-start gap-3 w-[90%] md:w-auto">
            <div className="bg-[#E9F6D2] p-2 rounded-full">
              <MapPin className="text-[#B0DD1D] w-5 h-5" />
            </div>
            <p className="text-sm text-gray-800 leading-snug">
              <strong className="block text-black">JRR Towers</strong>
              (2nd Floor), Pattalamma Temple Rd, Basavanagudi, Bangalore, 560004
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMapSection;

"use client";

import { MapPin } from "lucide-react";
import assets from "@/assets";
import Image from "next/image";

const branches = [
  { name: "COIMBATORE", image: assets.location1, active: true },
  { name: "CHENNAI", image: assets.location2, active: false },
  { name: "HYDERABAD", image: assets.location3, active: false },
  { name: "GOA", image: assets.location4, active: false },
  { name: "KOCHI", image: assets.location5, active: false },
  { name: "MUMBAI", image: assets.location6, active: false },
];

const ContactMapSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Title & Border Wrap */}
      <div className="border   rounded-2xl p-6">
        {/* <p className="inline-block bg-[#B0DD1D] text-black px-6 py-2 rounded-md font-semibold hover:bg-lime-400 transition mb-6 text-center">
          Our Branches
        </p> */}

        {/* Branch Tabs */}
        <div className="flex justify-center gap-6 mb-10 mt-6">
          {branches.map((branch, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-1 cursor-pointer ${
                branch.active ? "text-gray-800" : "text-gray-500"
              }`}
            >
              <div
                className={`p-2 border ${
                  branch.active
                    ? "border-[#B0DD1D] bg-[#B0DD1D1A] rounded-md"
                    : "border-transparent"
                }`}
              >
                {/* You can replace this with: */}
                <Image
                  src={branch.image}
                  alt={branch.name}
                  width={80}
                  height={60}
                />
              </div>
              <p className="text-sm font-semibold">{branch.name}</p>
            </div>
          ))}
        </div>

        {/* Form & Map Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Form */}
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
            <button className="bg-[#B0DD1D] text-black px-6 py-2 rounded-full font-semibold hover:bg-lime-400 transition">
              Submit
            </button>
          </div>

          {/* Google Map */}
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
                (2nd Floor), Pattalamma Temple Rd, Basavanagudi, Bangalore,
                560004
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMapSection;

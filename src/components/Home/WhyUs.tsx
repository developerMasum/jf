import Image from "next/image";
import assets from "@/assets";
import React from "react";

interface Feature {
  title: string;
  description: string;
  image: any;
}

const features: Feature[] = [
  {
    title: "Unmatched Durability",
    description:
      "Our JF-270 barbed wire features a 270 GSM zinc coating for corrosion-free performance, paired with stainless steel binding wire to withstand harsh environments.",
    image: assets.why1,
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We deliver timely service, transparent communication, and a seamless purchase experience—backed by glowing client feedback.",
    image: assets.why2,
  },
  {
    title: "Innovative & Diverse Range",
    description:
      "Choose from Polyhex Mesh, Australian Trellis, GI Poultry Mesh, and more—solutions that blend functionality, security, and style.",
    image: assets.why3,
  },
];

const WhyUs: React.FC = () => (
  <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-extrabold text-gray-800">Why Us</h2>
      <p className="mt-4 text-gray-600">
        Discover what makes our fencing solutions the smart choice for
        durability, customer focus, and innovative design.
      </p>
    </div>

    <div className="flex flex-col md:flex-row items-start justify-center gap-6">
      {features.map((feature, idx) => {
        const isMiddle = idx === 1;

        const baseClasses =
          "rounded-4xl  p-6 w-[400px] h-[501px]  flex flex-col";

        const bgClasses = isMiddle
          ? "bg-blue-800 text-white z-10 -translate-y-12"
          : "bg-gradient-to-b from-blue-400 to-white text-gray-900";

        return (
          <div key={feature.title} className={`${baseClasses} ${bgClasses}`}>
            <div className="flex justify-start mb-6">
              <Image
                src={feature.image}
                alt={feature.title}
                width={80}
                height={80}
                className={`rounded-full object-contain ${
                  isMiddle ? "brightness-125" : ""
                }`}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="flex-grow">{feature.description}</p>
          </div>
        );
      })}
    </div>
    <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
      Contact Us
    </button>
  </section>
);

export default WhyUs;

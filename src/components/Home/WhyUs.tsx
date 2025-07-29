import Image, { StaticImageData } from "next/image";
import assets from "@/assets";
import React from "react";

interface Feature {
  title: React.ReactNode;
  description: string;
  image: StaticImageData;
}

const features: Feature[] = [
  {
    title: (
      <>
        Unmatched Durability <br /> with Corrosion-Free <br /> Technology
      </>
    ),
    description:
      "Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.",
    image: assets.why1,
  },
  {
    title: (
      <>
        Customer-Centric <br /> Approach
      </>
    ),
    description:
      "At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.",
    image: assets.why2,
  },
  {
    title: "Innovative & Diverse Range",
    description:
      "We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.",
    image: assets.why3,
  },
];

const WhyUs = () => (
  <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-24">
    <div className="max-w-3xl mx-auto text-center mb-20">
      <h2 className="text-4xl font-semibold text-gray-800">Why Us</h2>
      <p className="mt-4 text-gray-700 font-semibold">
        We specialize in delivering durable and innovative fencing solutions
        built to last. With <br className="hidden md:block" /> a focus on
        quality and trust, we help secure spaces across industries and{" "}
        <br className="hidden md:block" /> communities.
      </p>
    </div>

    <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center gap-6">
      {features.map((feature, idx) => {
        const isMiddle = idx === 1;

        const baseClasses =
          "rounded-4xl p-8 w-full sm:w-[400px] h-auto min-h-[520px] flex flex-col";

        const bgClasses = isMiddle
          ? "bg-[linear-gradient(to_bottom_left,_#0c4f91_7%,_#002B55_30%)] text-white z-10 md:-translate-y-12"
          : "bg-[linear-gradient(to_bottom_left,_#9dc6ee_10%,_#edf1f6_30%)] text-gray-900";

        return (
          <div key={idx} className={`${baseClasses} ${bgClasses}`}>
            <div className="flex justify-start mb-6">
              <Image
                src={feature.image}
                alt={
                  typeof feature.title === "string"
                    ? feature.title
                    : "Feature image"
                }
                width={80}
                height={80}
                className={`rounded-full object-contain ${
                  isMiddle ? "brightness-125" : ""
                }`}
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 leading-snug">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-justify flex-grow">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>

    <div className="mt-12 flex justify-center">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-semibold text-base">
        Contact Us
      </button>
    </div>
  </section>
);

export default WhyUs;

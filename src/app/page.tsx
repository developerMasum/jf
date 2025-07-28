import Banner from "@/components/Banner";
import Navbar from "@/components/Common/Navbar";
import AgriculturalProducts from "@/components/Home/AgriculturalProducts";
import ContactMapSection from "@/components/Home/ContactMap";
import Testimonial from "@/components/Home/Testimonial";
import WhyUs from "@/components/Home/WhyUs";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AgriculturalProducts />
      {/* <AgriculturalProducts /> */}
      <WhyUs />
      <Testimonial />
      <ContactMapSection />
      {/* <WhyUs /> */}
    </div>
  );
};

export default Home;

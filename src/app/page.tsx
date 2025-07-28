import Banner from "@/components/Banner";
import Navbar from "@/components/Common/Navbar";
import AgriculturalProducts from "@/components/Home/AgriculturalProducts";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AgriculturalProducts />
      <AgriculturalProducts />
    </div>
  );
};

export default Home;

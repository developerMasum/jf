import assets from "@/assets";
import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    name: "FGC RustFree Fencing Poles",
    price: "₹499.00 – ₹1,589.00",
    image: assets.poles,
  },
  {
    id: 2,
    name: "FGC RustFree Fencing Poles",
    price: "₹499.00 – ₹1,589.00",
    image: assets.poles,
  },
  {
    id: 3,
    name: "FGC RustFree Fencing Poles",
    price: "₹499.00 – ₹1,589.00",
    image: assets.poles,
  },
  {
    id: 4,
    name: "FGC RustFree Fencing Poles",
    price: "₹499.00 – ₹1,589.00",
    image: assets.poles,
  },
];

const AgriculturalProducts = () => {
  return (
    <div className="p-6">
      <h1 className="text-[40px] font-bold text-gray-800 mb-6">
        Agricultural Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#f2f4f6] rounded-xl shadow hover:shadow-md transition duration-300"
          >
            <div className="flex justify-center items-center h-[300px]">
              <Image
                src={product.image}
                alt={product.name}
                width={320}
                height={390}
                className="object-contain"
              />
            </div>

            <div className="px-4 pb-4 space-y-3">
              <h2 className="text-lg font-bold text-gray-800">
                {product.name}
              </h2>
              <p className="text-lime-600 font-semibold text-md">
                {product.price}
              </p>

              <button className="rounded-full text-black font-semibold bg-lime-500 py-2 px-6 hover:bg-lime-600 transition duration-200">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgriculturalProducts;

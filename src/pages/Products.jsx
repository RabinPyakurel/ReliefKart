// src/pages/Products.jsx
import React from "react";
import { ProductCard } from "../components";
import frist_aid from "../assets/first-aid-kit.jpg";
import earthquake_kit from "../assets/portable-earthquake-kit.jpg";
import solar_torch from "../assets/solar-torch.jpg";
import water_purifier from "../assets/water-purifier.jpg";

const sampleProducts = [
  {
    id: 1,
    name: "Portable Earthquake Kit",
    price: "1500",
    image: earthquake_kit,
  },
  {
    id: 2,
    name: "Solar Powered Torch",
    price: "800",
    image: solar_torch,
  },
  {
    id: 3,
    name: "Water Purifier Bottle",
    price: "1200",
    image: water_purifier,
  },
  {
    id: 4,
    name: "Basic First Aid Kit",
    price: "600",
    image: frist_aid,
  },
];

const Products = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sampleProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import ProductCard from "../components/ProductCard";

const sampleProducts = [
  {
    name: "Portable Earthquake Kit",
    price: "1500",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Solar Powered Torch",
    price: "800",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Water Purifier Bottle",
    price: "1200",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Basic First Aid Kit",
    price: "600",
    image: "https://via.placeholder.com/150",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sampleProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

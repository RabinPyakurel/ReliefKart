import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="text-center md:text-left space-y-4 md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800">
          Be Prepared. Stay Safe.
        </h1>
        <p className="text-gray-700">
          Shop essential disaster relief supplies tailored for Nepal. Trusted.
          Local. Fast.
        </p>
        <Link
          to="/products"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Shop Now
        </Link>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4298/4298674.png"
        alt="Emergency Kit"
        className="w-64 md:w-96 mt-8 md:mt-0"
      />
    </section>
  );
};

export default Hero;

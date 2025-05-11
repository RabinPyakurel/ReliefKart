import React from "react";

const categories = [
  { name: "Earthquake Kits", icon: "emergency" },
  { name: "Water Purifiers", icon: "water_drop" },
  { name: "First Aid", icon: "medical_services" },
  { name: "Flashlights", icon: "flashlight_on" },
];

const CategoryGrid = () => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 text-center rounded-lg hover:shadow-lg cursor-pointer"
          >
            <span className="material-symbols-outlined text-4xl text-blue-600 mb-2">
              {cat.icon}
            </span>
            <p className="text-gray-700 font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;

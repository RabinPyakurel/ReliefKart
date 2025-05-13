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
    price: 1500,
    image: earthquake_kit,
  },
  {
    id: 2,
    name: "Solar Powered Torch",
    price: 800,
    image: solar_torch,
  },
  {
    id: 3,
    name: "Water Purifier Bottle",
    price: 1200,
    image: water_purifier,
  },
  {
    id: 4,
    name: "Basic First Aid Kit",
    price: 600,
    image: frist_aid,
  },
  {
    id: 5,
    name: "Emergency Blanket",
    price: 400,
    image: "/images/emergency-blanket.jpg",
  },
  {
    id: 6,
    name: "Survival Whistle",
    price: 250,
    image: "/images/whistle.jpg",
  },
  {
    id: 7,
    name: "Hand Crank Radio",
    price: 1900,
    image: "/images/hand-crank-radio.jpg",
  },
  {
    id: 8,
    name: "Fire Starter",
    price: 350,
    image: "/images/fire-starter.jpg",
  },
  {
    id: 9,
    name: "Multi-tool Knife",
    price: 950,
    image: "/images/multitool.jpg",
  },
  {
    id: 10,
    name: "LED Headlamp",
    price: 700,
    image: "/images/headlamp.jpg",
  },
  {
    id: 11,
    name: "Survival Tent",
    price: 2400,
    image: "/images/survival-tent.jpg",
  },
  {
    id: 12,
    name: "Paracord Bracelet",
    price: 200,
    image: "/images/paracord-bracelet.jpg",
  },
  {
    id: 13,
    name: "Collapsible Water Container",
    price: 600,
    image: "/images/collapsible-water.jpg",
  },
  {
    id: 14,
    name: "Dust Mask Pack",
    price: 450,
    image: "/images/dust-mask.jpg",
  },
  {
    id: 15,
    name: "Goggles (Anti-Dust)",
    price: 300,
    image: "/images/goggles.jpg",
  },
  {
    id: 16,
    name: "Emergency Food Ration",
    price: 1000,
    image: "/images/emergency-food.jpg",
  },
  {
    id: 17,
    name: "Portable Stove",
    price: 1600,
    image: "/images/portable-stove.jpg",
  },
  {
    id: 18,
    name: "Waterproof Match Box",
    price: 120,
    image: "/images/waterproof-matches.jpg",
  },
  {
    id: 19,
    name: "Rope (50 ft)",
    price: 500,
    image: "/images/rope.jpg",
  },
  {
    id: 20,
    name: "Mini First Aid Pouch",
    price: 300,
    image: "/images/mini-first-aid.jpg",
  },
  {
    id: 21,
    name: "Portable Solar Panel Charger",
    price: 2800,
    image: "/images/solar-panel.jpg",
  },
  {
    id: 22,
    name: "Emergency Light Stick (Pack of 10)",
    price: 550,
    image: "/images/light-sticks.jpg",
  },
  {
    id: 23,
    name: "Folding Shovel",
    price: 1200,
    image: "/images/folding-shovel.jpg",
  },
  {
    id: 24,
    name: "Insulated Gloves",
    price: 650,
    image: "/images/gloves.jpg",
  },
  {
    id: 25,
    name: "Portable Fire Extinguisher",
    price: 2200,
    image: "/images/fire-extinguisher.jpg",
  },
  {
    id: 26,
    name: "Face Shield",
    price: 400,
    image: "/images/face-shield.jpg",
  },
  {
    id: 27,
    name: "Rain Poncho",
    price: 250,
    image: "/images/rain-poncho.jpg",
  },
  {
    id: 28,
    name: "Emergency Tent Heater",
    price: 1800,
    image: "/images/heater.jpg",
  },
  {
    id: 29,
    name: "Disaster Survival Handbook",
    price: 900,
    image: "/images/survival-handbook.jpg",
  },
  {
    id: 30,
    name: "Dry Bag (Waterproof)",
    price: 950,
    image: "/images/dry-bag.jpg",
  },
  {
    id: 31,
    name: "Surgical Gloves (100 pcs)",
    price: 750,
    image: "/images/surgical-gloves.jpg",
  },
  {
    id: 32,
    name: "CPR Face Shield Mask",
    price: 180,
    image: "/images/cpr-mask.jpg",
  },
  {
    id: 33,
    name: "Burn Relief Gel",
    price: 220,
    image: "/images/burn-gel.jpg",
  },
  {
    id: 34,
    name: "Disinfectant Spray",
    price: 450,
    image: "/images/disinfectant.jpg",
  },
  {
    id: 35,
    name: "Emergency Phone Charger",
    price: 1300,
    image: "/images/phone-charger.jpg",
  },
  {
    id: 36,
    name: "First Aid Manual",
    price: 300,
    image: "/images/first-aid-manual.jpg",
  },
  {
    id: 37,
    name: "Emergency Ladder (for 2 floors)",
    price: 4000,
    image: "/images/emergency-ladder.jpg",
  },
  {
    id: 38,
    name: "Reflective Safety Vest",
    price: 350,
    image: "/images/safety-vest.jpg",
  },
  {
    id: 39,
    name: "N95 Mask (10 pcs)",
    price: 500,
    image: "/images/n95-mask.jpg",
  },
  {
    id: 40,
    name: "Portable Water Filter Straw",
    price: 900,
    image: "/images/filter-straw.jpg",
  },
  {
    id: 41,
    name: "Antibacterial Wipes",
    price: 280,
    image: "/images/wipes.jpg",
  },
  {
    id: 42,
    name: "Flashlight with Batteries",
    price: 850,
    image: "/images/flashlight.jpg",
  },
  {
    id: 43,
    name: "Whistle with Compass",
    price: 180,
    image: "/images/compass-whistle.jpg",
  },
  {
    id: 44,
    name: "Emergency Signal Mirror",
    price: 220,
    image: "/images/signal-mirror.jpg",
  },
  {
    id: 45,
    name: "Emergency Sleeping Bag",
    price: 1100,
    image: "/images/sleeping-bag.jpg",
  },
  {
    id: 46,
    name: "Tactical Backpack",
    price: 2800,
    image: "/images/backpack.jpg",
  },
  {
    id: 47,
    name: "Sewing Kit",
    price: 320,
    image: "/images/sewing-kit.jpg",
  },
  {
    id: 48,
    name: "Trail Mix Emergency Food",
    price: 550,
    image: "/images/trail-mix.jpg",
  },
  {
    id: 49,
    name: "Water Purification Tablets",
    price: 380,
    image: "/images/purification-tablets.jpg",
  },
  {
    id: 50,
    name: "Compact Binoculars",
    price: 1700,
    image: "/images/binoculars.jpg",
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

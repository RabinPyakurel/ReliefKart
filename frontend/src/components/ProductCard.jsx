import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "./Toast";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [toast, setToast] = useState({ message: "", type: "" });

  const handleAddToCart = (product) => {
    addToCart(product);

    setToast({ message: `${product.name} added to cart!`, type: "success" });

    setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 2000);
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col">
        <img
          src=""
          alt={product.name}
          className="w-full h-40 object-contain bg-gray-100 p-4"
        />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="font-semibold text-lg text-gray-700">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Reliable product for emergencies.
            </p>
            <span className="font-bold text-blue-600 block mb-4">
              Rs. {product.price}
            </span>
          </div>
          <div className="flex gap-2 mt-auto">
            <button
              className="w-1/2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
            <button
              className="w-1/2 px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition"
              onClick={() =>
                navigate("/esewa", {
                  state: {
                    amount: product.price,
                    name: product.name,
                  },
                })
              }
            >
              Buy Now
            </button>
            <button
              className="w-1/2 px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition"
              onClick={() =>
                navigate("/khalti", {
                  state: {
                    id: product.id,
                    amount: product.price,
                    name: product.name,
                  },
                })
              }
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {toast.message && <Toast message={toast.message} type={toast.type} />}
    </>
  );
};

export default ProductCard;

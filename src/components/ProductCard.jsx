import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 object-cover mb-2 rounded"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mt-auto">Rs. {product.price}</p>
      <button className="mt-2 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

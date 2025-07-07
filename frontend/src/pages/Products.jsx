// src/pages/Products.jsx
import React, { useEffect, useState } from "react";
import { ProductCard } from "../components";
import axios from "axios";
import frist_aid from "../assets/first-aid-kit.jpg";
import earthquake_kit from "../assets/portable-earthquake-kit.jpg";
import solar_torch from "../assets/solar-torch.jpg";
import water_purifier from "../assets/water-purifier.jpg";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
        setIsError(true);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>

      {isError ? (
        <p className="text-red-600">Failed to load products.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

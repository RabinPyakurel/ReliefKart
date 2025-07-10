// src/pages/Products.jsx
import React, { useEffect, useState } from "react";
import { ProductCard } from "../components";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const query = useQuery();

  const searchTerm = query.get("search");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endPoint = searchTerm
          ? `http://localhost:8080/api/products/search?keyword=${searchTerm}`
          : `http://localhost:8080/api/products`;

        const response = await axios.get(endPoint);
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
        setIsError(true);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {searchTerm ? `Search Results for "${searchTerm}"` : "All Products"}
      </h1>

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

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/product/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error loading product", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg">Price: Nrs. {product.price}</p>
      <p className="text-gray-600 mt-2">
        {product.description || "No description yet"}
      </p>
      <p className="mt-2">Category: {product.category}</p>
      <p className="mt-2">
        Availability:{" "}
        {product.available ? (
          <span className="text-green-600">Available</span>
        ) : (
          <span className="text-red-600">Out of stock</span>
        )}
      </p>
    </div>
  );
};

export default ProductDetail;

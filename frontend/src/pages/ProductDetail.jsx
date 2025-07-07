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
    <div className="p-6 flex flex-col md:flex-row items-start gap-10">
      {/* Left: Image */}
      <div className="md:w-1/2 w-full">
        <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
          {/* Optional: placeholder if no image */}
          <img
            src={product.image} // replace with product.image if available
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right: Details */}
      <div className="md:w-1/2 w-full">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg font-semibold mb-2">
          Price: Nrs. {product.price}
        </p>
        <p className="text-gray-700 mb-2">
          {product.description || "No description yet"}
        </p>
        <p className="mb-2">
          Category: <span className="text-blue-600">{product.category}</span>
        </p>
        <p>
          Availability:{" "}
          {product.available ? (
            <span className="text-green-600 font-semibold">Available</span>
          ) : (
            <span className="text-red-600 font-semibold">Out of stock</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;

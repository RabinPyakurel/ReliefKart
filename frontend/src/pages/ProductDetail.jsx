import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Toast from "../components/Toast";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
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
      <div className="md:w-1/2 w-full mt-32 md:mt-48">
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
        </div>
      </div>
      {toast.message && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};

export default ProductDetail;

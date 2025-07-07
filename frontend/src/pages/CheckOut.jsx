import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    const productNames = cartItems.map((item) => item.name).join(", ");

    navigate("/esewa", {
      state: {
        amount: totalAmount,
        name: productNames,
      },
    });
  };
  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty.</h2>
        <button
          className="text-blue-600 hover:underline"
          onClick={() => navigate("/")}
        >
          Go back to home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md mt-10 rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-3"
          >
            <div>
              <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">
                Rs. {item.price} × {item.quantity}
              </p>
            </div>
            <p className="text-gray-700 font-semibold">
              Rs. {item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <h3 className="text-xl font-bold text-gray-800">Total:</h3>
        <span className="text-xl font-semibold text-blue-600">
          Rs. {totalAmount}
        </span>
      </div>

      <button
        onClick={handlePayment}
        className="mt-6 w-30 bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
      >
        Pay with eSewa
      </button>
    </div>
  );
};

export default Checkout;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Update the cart in localStorage and state
  const updateCart = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // Handle increase/decrease quantity
  const changeQuantity = (id, operation) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === id) {
          const updatedQuantity =
            operation === "increase" ? item.quantity + 1 : item.quantity - 1;

          return { ...item, quantity: updatedQuantity };
        }
        return item;
      })
      .filter((item) => item.quantity > 0); // Remove items with zero quantity

    updateCart(updatedCart);
  };

  // Handle removing item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  // Handle checkout
  const handleCheckout = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      // If the user isn't logged in, redirect to login
      navigate("/login");
    } else {
      // Proceed with checkout
      navigate("/checkout");
    }
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>Your cart is empty.</p>
            <Link to="/" className="text-blue-600 hover:underline">
              Go back to shopping
            </Link>
          </div>
        ) : (
          <div>
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-4 border-b"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => changeQuantity(item.id, "decrease")}
                      className="text-gray-600 hover:text-blue-600"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() => changeQuantity(item.id, "increase")}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-6 border-t pt-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Total: Rs.{calculateTotal()}
              </h3>
              <button
                onClick={handleCheckout}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

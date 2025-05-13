import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart, setCartItems } =
    useContext(CartContext);

  const changeQuantity = (id, operation) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;

    if (operation === "increase") {
      addToCart(item);
    } else {
      if (item.quantity <= 1) {
        removeFromCart(id);
      } else {
        const updatedCart = cartItems.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartItems(updatedCart);
      }
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    // const user = JSON.parse(localStorage.getItem("currentUser"));
    // if (!user) {
    //   navigate("/login");
    // } else {
    navigate("/checkout");
    // }
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
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

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

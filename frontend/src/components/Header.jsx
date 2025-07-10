import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/products?search=${searchItem}`);
  };

  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        ReliefKart
      </Link>

      {/* Navigation Links */}
      <nav className="space-x-6 hidden md:flex">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link to="/products" className="text-gray-700 hover:text-blue-600">
          Products
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">
          Contact
        </Link>
      </nav>

      {/* Right Side: Search + Icons */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 outline-none w-32 md:w-48"
            value={searchItem}
            onChange={handleChange}
          />
          <button
            className="bg-blue-600 text-white px-3 py-1 hover:bg-blue-700"
            onClick={handleSearch}
          >
            <span className="material-symbols-outlined text-white">search</span>
          </button>
        </div>

        <Link to="/cart" className="relative">
          <span className="material-symbols-outlined cursor-pointer text-gray-700 hover:text-blue-600">
            shopping_cart
          </span>
          {cartCount > 0 && (
            <span className="absolute -top-1/4  -right-1 bg-red-600 text-white text-xs rounded-full h-3 w-3 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>

        <Link to="/account">
          <span className="material-symbols-outlined cursor-pointer text-gray-700 hover:text-blue-600">
            account_circle
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

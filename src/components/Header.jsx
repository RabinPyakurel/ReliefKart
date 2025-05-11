import { Link } from "react-router-dom";

const Header = () => {
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
          />
          <button className="bg-blue-600 text-white px-3 py-1 hover:bg-blue-700">
            <span className="material-symbols-outlined text-white">search</span>
          </button>
        </div>

        <Link to="/cart">
          <span className="material-symbols-outlined cursor-pointer text-gray-700 hover:text-blue-600">
            shopping_cart
          </span>
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

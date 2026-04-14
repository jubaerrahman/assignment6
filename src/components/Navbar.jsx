import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cart }) => {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-purple-600">
          DigiTools
        </h1>

        <div className="hidden md:flex items-center gap-8 text-gray-600 text-sm font-medium">
          <a className="hover:text-purple-600 cursor-pointer">Products</a>
          <a className="hover:text-purple-600 cursor-pointer">Features</a>
          <a className="hover:text-purple-600 cursor-pointer">Pricing</a>
          <a className="hover:text-purple-600 cursor-pointer">Testimonials</a>
          <a className="hover:text-purple-600 cursor-pointer">FAQ</a>
        </div>

        <div className="flex items-center gap-5">
          
          <span className="text-sm text-gray-600 cursor-pointer">
            Login
          </span>

          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-lg" />
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 rounded-full">
              {cart.length}
            </span>
          </div>

          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full text-sm">
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
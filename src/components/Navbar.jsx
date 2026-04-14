const Navbar = ({ cart }) => {
  return (
    <div className="flex justify-between items-center px-6 md:px-12 py-5 bg-white">
      <h1 className="text-xl md:text-2xl font-bold text-purple-600">
        DigiTools
      </h1>

      <div className="hidden md:flex gap-6 text-gray-600">
        <a>Products</a>
        <a>Features</a>
        <a>Pricing</a>
        <a>FAQ</a>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          🛒
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 rounded-full">
            {cart.length}
          </span>
        </div>

        <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
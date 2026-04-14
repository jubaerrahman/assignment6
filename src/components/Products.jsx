import products from "../data/products.json";
import { toast } from "react-toastify";

import writing from "../assets/images/products/writing_2327400 1.png";
import design from "../assets/images/products/design-tool.png";
import stock from "../assets/images/products/shopping-cart.png";
import automation from "../assets/images/products/operation.png";
import resume from "../assets/images/products/portfolio.png";
import social from "../assets/images/products/social-media.png";

const Products = ({ cart, setCart }) => {
  const icons = {
    1: writing,
    2: design,
    3: stock,
    4: automation,
    5: resume,
    6: social,
  };

  const tagStyles = {
    best: "bg-yellow-100 text-yellow-600",
    popular: "bg-blue-100 text-blue-600",
    new: "bg-green-100 text-green-600",
  };

  const handleAdd = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.error("Already added");
      return;
    }

    setCart([...cart, product]);
    toast.success("Added to cart");
  };

  return (
    <div className="px-6 md:px-12 py-16">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => {
          const added = cart.find((item) => item.id === p.id);

          return (
            <div
              key={p.id}
              className="bg-white p-6 rounded-xl border hover:shadow-lg transition"
            >
              
              <div className="flex justify-between items-center mb-4">
                <div className="bg-gray-100 p-2 rounded-full">
                  <img src={icons[p.id]} className="w-6 h-6" />
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${tagStyles[p.tagType]}`}
                >
                  {p.tag}
                </span>
              </div>

              <h2 className="text-lg font-semibold">{p.name}</h2>

              <p className="text-gray-500 text-sm mt-2">
                {p.description}
              </p>

              <h3 className="text-2xl font-bold mt-4">
                ${p.price}
                <span className="text-sm text-gray-400">/{p.period}</span>
              </h3>

              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f, i) => (
                  <li key={i} className="text-gray-600">
                    ✔ {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleAdd(p)}
                className={`w-full mt-6 py-2 rounded-full ${
                  added
                    ? "bg-gray-300 text-gray-600"
                    : "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                }`}
              >
                {added ? "Added" : "Buy Now"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
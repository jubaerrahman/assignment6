import products from "../data/products.json";
import { toast } from "react-toastify";

const Products = ({ cart, setCart }) => {
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
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12">
      {products.map((p) => {
        const added = cart.find((item) => item.id === p.id);

        return (
          <div key={p.id} className="bg-white p-6 rounded-xl shadow">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
              {p.tag}
            </span>

            <h2 className="text-lg font-semibold mt-3">
              {p.icon} {p.name}
            </h2>

            <p className="text-gray-500 text-sm mt-2">{p.description}</p>

            <h3 className="text-2xl font-bold mt-3">
              ${p.price}
              <span className="text-sm text-gray-400">/{p.period}</span>
            </h3>

            <ul className="mt-4 space-y-1 text-sm">
              {p.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <button
              onClick={() => handleAdd(p)}
              className={`w-full mt-5 py-2 rounded-full ${
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
  );
};

export default Products;
import { toast } from "react-toastify";

import writing from "../assets/images/products/writing_2327400 1.png";
import design from "../assets/images/products/design-tool.png";
import stock from "../assets/images/products/shopping-cart.png";
import automation from "../assets/images/products/operation.png";
import resume from "../assets/images/products/portfolio.png";
import social from "../assets/images/products/social-media.png";

const Cart = ({ cart, setCart }) => {
  const icons = {
    1: writing,
    2: design,
    3: stock,
    4: automation,
    5: resume,
    6: social,
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Removed");
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-gray-500 text-xl">Cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 py-16">
      
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl border">
        
        <h3 className="font-semibold text-lg mb-4">Your Cart</h3>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-50 p-4 rounded-lg mb-3"
          >
            <div className="flex items-center gap-4">
              
              <div className="bg-white p-2 rounded-full">
                <img
                  src={icons[item.id]}
                  className="w-6 h-6"
                />
              </div>

              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-gray-400 text-sm">${item.price}</p>
              </div>

            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-pink-500 text-sm"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="flex justify-between items-center mt-6">
          <span className="text-gray-500">Total:</span>
          <span className="font-semibold text-lg">${total}</span>
        </div>

        <button
          onClick={() => {
            setCart([]);
            toast.success("Checkout done");
          }}
          className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white"
        >
          Proceed To Checkout
        </button>

      </div>
    </div>
  );
};

export default Cart;
import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Removed");
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const checkout = () => {
    setCart([]);
    toast.success("Checkout done");
  };

  if (cart.length === 0) {
    return (
      <h2 className="text-center text-xl text-gray-500">
        Cart is empty
      </h2>
    );
  }

  return (
    <div className="px-6 md:px-12">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-4 mb-3 rounded"
        >
          <div>
            {item.icon} {item.name}
          </div>

          <div>${item.price}</div>

          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="text-right mt-6">
        <h2 className="text-xl font-bold mb-3">
          Total: ${total}
        </h2>

        <button
          onClick={checkout}
          className="bg-purple-600 text-white px-6 py-2 rounded-full"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
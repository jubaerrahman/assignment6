import { useState } from 'react'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Models from "./components/Models";

import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");
  return (
    <div>
      <Navbar cart={cart}></Navbar>
      <div className="max-w-7xl mx-auto">
        <Banner />
        <Stats />

        <div className="text-center my-10 space-x-4">
          <button
            onClick={() => setView("products")}
            className={`px-6 py-2 rounded-full ${
              view === "products"
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                : "border"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setView("cart")}
            className={`px-6 py-2 rounded-full ${
              view === "cart"
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                : "border"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>

        {view === "products" ? (
          <Products cart={cart} setCart={setCart} />
        ) : (
          <Cart cart={cart} setCart={setCart} />
        )}

        <Steps />
        <Pricing />
      </div>
      <Models/>

      <Footer />

      
    
    </div>
  )
}

export default App

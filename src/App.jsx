import { useState } from 'react'
import Navbar from "./components/Navbar";
// import Banner from "./components/Banner";
// import Stats from "./components/Stats";
// import Products from "./components/Products";
// import Cart from "./components/Cart";
// import Steps from "./components/Steps";
// import Pricing from "./components/Pricing";
// import Footer from "./components/Footer";


import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Navbar cart={cart}></Navbar>
      
    
    </div>
  )
}

export default App

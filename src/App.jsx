import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orders, setOrders] = useState([]);

  // Open / Close Cart
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Add Item
  const addToCart = (food) => {
    setCartItems((prev) => [...prev, food]);
  };

  // Remove Item
  const removeFromCart = (indexToRemove) => {
    setCartItems((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  // Place Order
  const placeOrder = () => {
    if (cartItems.length === 0) return;

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: cartItems.reduce(
        (sum, item) => sum + item.price,
        0
      ),
    };

    setOrders((prev) => [...prev, newOrder]);

    setCartItems([]);
    setIsCartOpen(false);
  };

  return (
    <>
      <Navbar
        toggleCart={toggleCart}
        cartCount={cartItems.length}
      />

      
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          toggleCart={toggleCart}
          isOpen={isCartOpen}
        />
      

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="/menu"
          element={
            <Menu
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/orders"
          element={
            <Orders
              orders={orders}
            />
          }
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              placeOrder={placeOrder}
              cartItems={cartItems}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
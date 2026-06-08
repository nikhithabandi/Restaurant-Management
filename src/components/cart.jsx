import "./cart.css";
import { Link } from "react-router-dom";

function Cart({
  cartItems,
  removeFromCart,
  toggleCart,
  isOpen,
}) {
  return (
    <>
      {/* OVERLAY */}
      <div
        className={`cart-overlay ${isOpen ? "show" : ""}`}
        onClick={toggleCart}
      ></div>

      {/* CART DRAWER */}
      <div
        className={`cart-drawer ${isOpen ? "open" : ""}`}
      >
        <h2>🛒 My Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <span>
                {item.name} - ₹{item.price}
              </span>

              <button
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))
        )}

        <h3>
          Total: ₹
          {cartItems.reduce(
            (total, item) => total + item.price,
            0
          )}
        </h3>

        <Link to="/checkout">
          <button className="checkout-btn">
            Checkout
          </button>
        </Link>

        <button
          className="close-btn"
          onClick={toggleCart}
        >
          Close
        </button>
      </div>
    </>
  );
}

export default Cart;
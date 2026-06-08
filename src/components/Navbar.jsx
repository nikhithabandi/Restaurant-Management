import { Link } from "react-router-dom";

function Navbar({ toggleCart, cartCount }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#ff6b00",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* LOGO */}
      <h2 style={{ margin: 0 }}>🍔 FoodHub</h2>

      {/* LINKS */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Home
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/menu">
          Menu
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/orders">
          Orders
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/contact">
          Contact
        </Link>

        {/* CART BUTTON */}
        <button
          onClick={toggleCart}
          style={{
            position: "relative",
            padding: "8px 15px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background: "white",
            color: "#ff6b00",
            fontWeight: "bold",
          }}
        >
          🛒 Cart

          {/* BADGE */}
          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "3px 7px",
                fontSize: "12px",
              }}
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
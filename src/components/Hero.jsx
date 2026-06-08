import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <h1>Welcome to FoodHub 🍔</h1>
      <p>Delicious food delivered fast</p>

      <button
        onClick={() => navigate("/menu")}
        style={{
          padding: "12px 25px",
          background: "orange",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Order Now
      </button>
    </div>
  );
}

export default Hero;
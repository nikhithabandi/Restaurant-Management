import { useState } from "react";

function Checkout({ placeOrder, cartItems = [] }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const handleOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill all details");
      return;
    }

    placeOrder();

    alert(
      "🎉 Order Placed Successfully!\nEstimated Delivery: 30 mins"
    );
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        padding: "20px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1>Checkout</h1>

      <h3>Customer Details</h3>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <textarea
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
        }}
      />

      <h3>Order Summary</h3>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))
      )}

      <hr />

      <h2>Total: ₹{total}</h2>

      <button
        onClick={handleOrder}
        style={{
          width: "100%",
          padding: "12px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
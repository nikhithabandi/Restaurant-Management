function Orders({ orders }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Orders Page</h1>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>Order ID: {order.id}</h3>
            <p>Total: ₹{order.total}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
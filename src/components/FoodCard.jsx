import "./FoodCard.css";

function FoodCard({ name, price, image, addToCart }) {
  return (
    <div className="food-card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>₹{price}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;
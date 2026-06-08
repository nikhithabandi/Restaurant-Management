import foods from "../data/foods";
import FoodCard from "../components/FoodCard";

function Menu({ addToCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Menu Page</h1>

      <div className="food-container">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            price={food.price}
            image={food.image}
            addToCart={() => addToCart(food)}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
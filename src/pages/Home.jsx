import { useState } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FoodCard from "../components/FoodCard";
import foods from "../data/foods";

function Home({ cartItems, addToCart, removeFromCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      

      <Hero />

      <h2 style={{ textAlign: "center" }}>
        Cart Items: {cartItems.length}
      </h2>

      {/* CATEGORY BUTTONS */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={() => setSelectedCategory("All")}>All</button>
        <button onClick={() => setSelectedCategory("Pizza")}>Pizza</button>
        <button onClick={() => setSelectedCategory("Burger")}>Burger</button>
        <button onClick={() => setSelectedCategory("Biryani")}>Biryani</button>
        <button onClick={() => setSelectedCategory("Pasta")}>Pasta</button>
        <button onClick={() => setSelectedCategory("Snacks")}>Snacks</button>
        <button onClick={() => setSelectedCategory("Meals")}>Meals</button>
        <button onClick={() => setSelectedCategory("Starter")}>Starter</button>
        <button onClick={() => setSelectedCategory("Dessert")}>Desert</button>
        <button onClick={() => setSelectedCategory("Drinks")}>Drinks</button>
        <button onClick={() => setSelectedCategory("Chinese")}>Chinese</button>
        <button onClick={() => setSelectedCategory("South Indian")}>South Indian</button>
      </div>

      {/* SEARCH BOX */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* MAIN LAYOUT */}
      <div className="main-layout">

        {/* FOOD SECTION */}
        <div>
          <h2 style={{ textAlign: "center" }}>
            Popular Foods
          </h2>

          <div className="food-container">
            {foods
              .filter((food) => {
                const matchesSearch = food.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());

                const matchesCategory =
                  selectedCategory === "All" ||
                  food.category === selectedCategory;

                return matchesSearch && matchesCategory;
              })
              .map((food) => (
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


      </div>

      <Footer />
    </>
  );
}

export default Home;
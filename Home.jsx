import React from 'react'

const Home = () => {
  return (
    <div>

      <img class="bg" src="bg.jpg" alt="" width="100%" height="700px" />
      <div class="content">
        <h1>"Welcome to our FOODZ Recipe sharing!"</h1>
        <p>Your ultimate destination for sharing and discovering delicious recipes from around the
          world! Whether you're a home cook, a professional chef, or just someone looking to try something new in the
          kitchen, you’re in the right place.Let’s make cooking more exciting and create a global table of flavors together.
          Start your delicious journey today!</p>
      </div>

      <center>
        <div class="ourrec">
          <h1 class="title">🍽️ Our Featured Recipes</h1>
        </div>

        <div class="recipe-container">
          <div class="recipe-card">
            <img src="recipe1.jpeg" alt="Spaghetti" />
            <h3>Spaghetti Carbonara</h3>
            <p>Creamy, cheesy spaghetti with crispy bacon.</p>
            <button class="save-btn">Save Recipe</button>
          </div>

          <div class="recipe-card">
            <img src="recipe4.jpeg" alt="Chicken Curry" />
            <h3>Chicken Curry</h3>
            <p>Spicy and flavorful Indian-style chicken curry.</p>
            <button class="save-btn">Save Recipe</button>
          </div>

          <div class="recipe-card">
            <img src="recipe5.jpeg" alt="Pancakes" />
            <h3>Classic Pancakes</h3>
            <p>Fluffy pancakes perfect for a sweet breakfast.</p>
            <button class="save-btn">Save Recipe</button>
          </div>

          <div class="recipe-card">
            <img src="recipe6.jpeg" alt="Salad" />
            <h3>Fresh Garden Salad</h3>
            <p>Healthy and refreshing salad with a zesty dressing.</p>
            <button class="save-btn">Save Recipe</button>
          </div>

          <div class="recipe-card">
            <img src="recipe7.jpeg" alt="Pizza" />
            <h3>Margherita Pizza</h3>
            <p>Classic pizza with fresh basil and mozzarella.</p>
            <button class="save-btn">Save Recipe</button>
          </div>

          <div class="recipe-card">
            <img src="recipe8.jpeg" alt="Burger" />
            <h3>Cheese Burger</h3>
            <p>Juicy beef patty with melted cheese and toppings.</p>
            <button class="save-btn">Save Recipe</button>
          </div>

          <div class="recipe-card">
            <img src="recipe9.jpeg" alt="Chocolate Cake" />
            <h3>Chocolate Cake</h3>
            <p>Rich and moist chocolate cake for dessert lovers.</p>
            <button class="save-btn">Save Recipe</button>
          </div>

          <div class="recipe-card">
            <img src="recipe10.jpeg" alt="Smoothie" />
            <h3>Berry Smoothie</h3>
            <p>Refreshing smoothie with mixed berries and yogurt.</p>
            <button class="save-btn">Save Recipe</button>
          </div>

        </div>
      </center>
    </div>

  )

}

export default Home

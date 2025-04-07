import React from 'react'

const Save = () => {
    return (
        <div>
            <div class="saved-recipes-container">
                <h2>🍽️ Your Saved Recipes</h2>

                <div class="recipes-grid">
                    <div class="recipe-card">
                        <img src="recipe1.jpeg" alt="Recipe 1" />
                        <h3>Spaghetti Carbonara</h3>
                        <p>Creamy, cheesy pasta with crispy bacon bits.</p>
                        <button>View Recipe</button>
                    </div>

                    <div class="recipe-card">
                        <img src="recipe2.jpeg" alt="Recipe 2" />
                        <h3>Chocolate Brownies</h3>
                        <p>Rich, fudgy brownies with a crackly top.</p>
                        <button>View Recipe</button>
                    </div>

                    <div class="recipe-card">
                        <img src="recipe3.jpeg" alt="Recipe 3" />
                        <h3>Grilled Chicken Salad</h3>
                        <p>Healthy salad with juicy grilled chicken and veggies.</p>
                        <button>View Recipe</button>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Save

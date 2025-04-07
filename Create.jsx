import React from 'react'

const Create = () => {
  return (
    <div>
    <center>

  <div class="form-container">
    <h2>Create Your Recipe 🍳</h2>
    <form>
      <label for="title">Recipe Title</label>
      <input type="text" id="title" name="title" placeholder="Enter recipe title" required />

      <label for="ingredients">Ingredients</label>
      <textarea id="ingredients" name="ingredients" rows="4" placeholder="List ingredients, separated by commas" required></textarea>

      <label for="instructions">Instructions</label>
      <textarea id="instructions" name="instructions" rows="6" placeholder="Write the cooking steps" required></textarea>

      <label for="image">Recipe Image</label>
      <input type="file" id="image" name="image" accept="image/*" />

      <button type="submit">Submit Recipe</button>
    </form>
  </div>
  </center>
    </div>
  )
}

export default Create


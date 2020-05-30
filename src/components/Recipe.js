import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import RecipeDetail from '../styles/RecipeDetail'
import recipeData from '../recipeData'

/* 
  Recipe Detail Component
  Shows the selected Recipe using the data from JSON
  Also supports saving the recipe as a favorite
*/

const Recipe = () => {
  const [fav, setFav] = useState(false)

  // Get handle from URL and find the recipe in the data
  let { handle } = useParams()
  const favHandles = JSON.parse(localStorage.getItem('favs'))
  const index = recipeData.findIndex(item => item.handle === handle)
  const recipe = recipeData[index]

  // Set the favorite status
  useEffect(() => {
    const isFav = favHandles && favHandles.includes(recipe.handle)
    setFav(isFav)
  }, [favHandles, recipe.handle])

  // toggle favourite (create the array if it doesnt exist)
  const handleClick = () => {
    let finalHandles = []
    if (fav) {
      if (favHandles) {
        finalHandles = favHandles.filter(favs => favs !== recipe.handle)
      }
      setFav(false)
    } else {
      if (favHandles) {
        finalHandles = [...favHandles, recipe.handle]
      } else {
        finalHandles.push(recipe.handle)
      }
      setFav(true)
    }

    // Save the handle back to local storage
    localStorage.setItem('favs', JSON.stringify(finalHandles))
  }

  return (
    <RecipeDetail>
      <RecipeDetail.Title>
        {recipe.name}{' '}
        <RecipeDetail.Fav onClick={() => handleClick()}>
          {fav ? '💔' : '💖'}
        </RecipeDetail.Fav>
      </RecipeDetail.Title>
      <RecipeDetail.Meta>
        <RecipeDetail.Thumb src={recipe.img} alt={recipe.handle} />
        <p>Author: {recipe.author}</p>
        <p>Prop Time: {recipe.times.prep} mins</p>
        <p>Cook Time: {recipe.times.cook} mins</p>
      </RecipeDetail.Meta>
      <RecipeDetail.Heading>Description</RecipeDetail.Heading>
      <p>{recipe.description}</p>
      <RecipeDetail.Heading>Ingredients</RecipeDetail.Heading>
      <RecipeDetail.Ingredients>
        {recipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </RecipeDetail.Ingredients>
      <RecipeDetail.Heading>Instructions</RecipeDetail.Heading>
      <RecipeDetail.instructions>
        {recipe.instructions.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </RecipeDetail.instructions>
    </RecipeDetail>
  )
}

export default Recipe

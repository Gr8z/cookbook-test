import React from 'react'
import { useParams } from 'react-router-dom'

import RecipeDetail from '../styles/RecipeDetail'
import recipeData from '../recipeData'

const Recipe = () => {
  // Get handle from URL and find the recipe in the data
  let { handle } = useParams()
  const index = recipeData.findIndex(item => item.handle === handle)
  const recipe = recipeData[index]

  return (
    <RecipeDetail>
      <RecipeDetail.Title>{recipe.name}</RecipeDetail.Title>
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

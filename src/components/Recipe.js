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
        <RecipeDetail.Time>
          Prep Time: {recipe.times.prep} mins
        </RecipeDetail.Time>
        <RecipeDetail.Time>
          Cook Time: {recipe.times.cook} mins
        </RecipeDetail.Time>
        <RecipeDetail.Desc>{recipe.description}</RecipeDetail.Desc>
        <RecipeDetail.Heading>Ingredients</RecipeDetail.Heading>
        <RecipeDetail.Ingredients>
          {recipe.ingredients.map((item, i) => (
            <RecipeDetail.Item key={i}>{item}</RecipeDetail.Item>
          ))}
        </RecipeDetail.Ingredients>
        <RecipeDetail.Heading>Instructions</RecipeDetail.Heading>
        <RecipeDetail.instructions>
          {recipe.instructions.map((item, i) => (
            <RecipeDetail.Item key={i}>{item}</RecipeDetail.Item>
          ))}
        </RecipeDetail.instructions>
      </RecipeDetail.Meta>
    </RecipeDetail>
  )
}

export default Recipe

import React, { useState, useEffect } from 'react'

import RecipeList from '../styles/RecipeList'
import recipeData from '../recipeData'

/* 
  Sidebar Component
  Shows the list of all the recipies in the JSON
  And a button to toggle to show only favorite recipes
*/

const Sidebar = () => {
  const [showFav, setShowFav] = useState(false)
  const [recipes, setRecipes] = useState([])

  // Filter out non favorites
  useEffect(() => {
    // If showFav is true, filter out the non favs from local storage
    if (showFav) {
      const favHandles = localStorage.getItem('favs')

      // If there are no fav found, return with empty array
      if (!favHandles) {
        return setRecipes([])
      }

      // Filter the data to show only favs
      const favs = recipeData.filter(recipe =>
        favHandles.includes(recipe.handle)
      )

      setRecipes(favs)
    } else {
      setRecipes(recipeData)
    }
  }, [showFav])

  // Add up prep and cook time
  const getTotalMins = times => {
    return Math.round(times.prep + times.cook)
  }

  return (
    <RecipeList>
      <RecipeList.FavButton onClick={() => setShowFav(!showFav)}>
        {showFav ? 'Show All Recipes' : 'Show Favorites'}
      </RecipeList.FavButton>
      {recipes.length === 0 && <p>There are no recipes here :(</p>}
      {recipes.map(data => (
        <RecipeList.Item to={data.handle} key={data.handle}>
          <RecipeList.Thumb src={data.img} alt={data.handle} />
          <RecipeList.Main>
            <RecipeList.Author>{data.author}</RecipeList.Author>
            <RecipeList.Title>{data.name}</RecipeList.Title>
            <RecipeList.Time>{getTotalMins(data.times)} mins</RecipeList.Time>
          </RecipeList.Main>
        </RecipeList.Item>
      ))}
    </RecipeList>
  )
}

export default Sidebar

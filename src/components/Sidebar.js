import React from 'react'

import RecipeList from '../styles/RecipeList'
import recipeData from '../recipeData'

const Sidebar = () => {
  // Add up prep and cook time and convert the seconds to mins
  const getTotalMins = times => {
    return Math.round((times.prep + times.cook) / 60)
  }

  return (
    <RecipeList>
      {recipeData.map(data => (
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

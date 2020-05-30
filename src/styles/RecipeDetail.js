import styled from 'styled-components'

const RecipeDetail = styled.div`
  grid-area: recipe;
  margin: 20px;
`

RecipeDetail.Title = styled.h1`
  color: #d10506;
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 10px;
`

RecipeDetail.Meta = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-column-gap: 20px;
  align-items: center;
  margin: 20px 0;
`

RecipeDetail.Thumb = styled.img`
  grid-row: span 3;
  width: 100%;
`

RecipeDetail.Heading = styled.h2`
  color: #d10506;
  font-size: 1.3em;
  font-weight: 600;
  margin: 20px 0 8px 0;
`

RecipeDetail.Ingredients = styled.ul`
  line-height: 1.5;
`

RecipeDetail.instructions = styled.ol`
  list-style-type: decimal;
  margin-left: 20px;
  line-height: 1.5;
`

export default RecipeDetail

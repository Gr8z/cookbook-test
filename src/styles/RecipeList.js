import styled from 'styled-components'
import { Link } from 'react-router-dom'

const RecipeList = styled.div`
  grid-area: sidebar;
  border-right: 1px solid #9a9a9a;
  max-height: 80vh;
  overflow-y: auto;
`

RecipeList.Item = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  text-decoration: none;
  gap: 10px;
  border-bottom: 1px solid #9a9a9a;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    background: #e4e4e4;
  }
`

RecipeList.Thumb = styled.img`
  width: 100%;
`

RecipeList.Main = styled.div`
  display: grid;
  align-content: center;
  gap: 4px;
`

RecipeList.Author = styled.p`
  font-size: 0.8em;
`

RecipeList.Title = styled.h3`
  color: #d10506;
  font-weight: 600;
  font-size: 1.2em;
`

RecipeList.Time = styled.p`
  color: #9a9a9a;
  font-size: 0.8em;
`

export default RecipeList

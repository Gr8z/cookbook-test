import React from 'react'

import Sidebar from './Sidebar'
import Book from '../styles/Book'
import Recipe from './Recipe'
import { Route } from 'react-router-dom'

/* 
  Main Component that houses all other components in this app
  Contains paramter based routing with react-router
*/

const Main = () => {
  return (
    <Book>
      <Book.Header>Cookbook Demo</Book.Header>
      <Route path="/:handle">
        <Recipe />
      </Route>
      <Sidebar />
      <Book.Footer>Made with ♥ by Mohammad Dohadwala</Book.Footer>
    </Book>
  )
}

export default Main

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Sidebar from './Sidebar'
import Book from '../styles/Book'
import Recipe from './Recipe'

/* 
  Main Component that houses all other components in this app
  Contains paramter based routing with react-router
*/

const Main = () => {
  return (
    <Book>
      <Book.Header>Cookbook Demo</Book.Header>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/:handle`}>
          <Recipe />
        </Route>
        <Route path="/">
          <Book.Msg>Please select a recipe and start cooking.</Book.Msg>
        </Route>
      </Switch>
      <Sidebar />
      <Book.Footer>Made with ♥ by Mohammad Dohadwala</Book.Footer>
    </Book>
  )
}

export default Main

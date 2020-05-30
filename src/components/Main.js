import React from 'react'

import Sidebar from './Sidebar'
import Book from '../styles/Book'
import A from '../styles/A'
import Recipe from './Recipe'
import { Route } from 'react-router-dom'

const Main = () => {
  return (
    <Book>
      <Book.Header>Cookbook Demo</Book.Header>
      <Route path="/:handle">
        <Recipe />
      </Route>
      <Sidebar />
      <Book.Footer>
        Made with ♥ by{' '}
        <A
          href="https://dohad.dev"
          target="_blank"
          rel="noopener noreferrer"
        ></A>
        Mohammad Dohadwala
      </Book.Footer>
    </Book>
  )
}

export default Main

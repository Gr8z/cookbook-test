import React from 'react'
import { Reset } from 'styled-reset'
import { BrowserRouter as Router } from 'react-router-dom'

import Body from './styles/Body'
import Main from './components/Main'

const App = () => {
  return (
    <Router>
      <Reset />
      <Body>
        <Main />
      </Body>
    </Router>
  )
}

export default App

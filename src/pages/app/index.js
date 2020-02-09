import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../home'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={HomePage} />
    </main>
  </div>
)

export default App

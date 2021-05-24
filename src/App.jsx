import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Poll from './Poll'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import User from './User'
import Question from './Question'

function App() {
  return (
    <Router>
      <Nav />
      <div style={{ padding: '20px 100px' }}>
        <Route path='/' exact component={Poll} />
        <Route path='/add' exact component={NewQuestion} />
        <Route path='/leaderboard' exact component={Leaderboard} />
        <Route path='/user' exact component={User} />
        <Route path='/question/:id' component={Question} />
      </div>
    </Router>
  )
}

export default App

import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import Poll from './Poll'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Question from './Question'
import { handleInitialData } from '../actions/shared'

function App(props) {
  
  useEffect(() => {
    props.dispatch(handleInitialData())
  })

  return (
    <Router>
      <Nav />
      <div style={{ padding: '20px 100px' }}>
        <Route path='/' exact component={Poll} />
        <Route path='/add' exact component={NewQuestion} />
        <Route path='/leaderboard' exact component={Leaderboard} />
        <Route path='/question/:id' component={Question} />
      </div>
    </Router>
  )
}

export default connect()(App)

import React, { useEffect } from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Nav from './Nav'
import Poll from './Poll'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Question from './Question'
import { handleInitialData } from '../actions/shared'

function App() {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)
  
  useEffect(() => {
      dispatch(handleInitialData())
  }, [])

  return (
    <Router>
      <Nav />
      {(loading) 
        ?  <div>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
          </div>
        : <div style={{ padding: '20px 100px' }}>
            <Route path='/' exact component={Poll} />
            <Route path='/add' exact component={NewQuestion} />
            <Route path='/leaderboard' exact component={Leaderboard} />
            <Route path='/question/:id' component={Question} />
        </div>
      }
    </Router>
  )
}

export default App

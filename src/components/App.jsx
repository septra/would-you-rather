import React, { useEffect } from 'react'
import { Spin } from 'antd';
import styled from 'styled-components'
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Nav from './Nav'
import Poll from './Poll'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Question from './Question'
import Login from './Login'
import { handleInitialData } from '../actions/shared'

const SpinnerOverlay = styled.div`
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const Container = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px 20px;
  flex: 1 100%;
  justify-content: center;
  align-items: center;
`

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
        ? <SpinnerOverlay>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 80 }} spin />} />
          </SpinnerOverlay>
        : <Container>
            <Route path='/' exact component={Poll} />
            <Route path='/add' exact component={NewQuestion} />
            <Route path='/leaderboard' exact component={Leaderboard} />
            <Route path='/question/:id' component={Question} />
            <Route path='/login' component={Login} />
        </Container>
      }
    </Router>
  )
}

export default App

import React, { useEffect } from 'react'
import { Spin } from 'antd';
import styled from 'styled-components'
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import { Route, Redirect, Switch } from 'react-router-dom'
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
  overflow: hidden;
`

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function App() {

  const dispatch = useDispatch()
  const { loading, authedUser } = useSelector(state => ({
    loading: state.loading,
    authedUser: state.authedUser
  }))

  useEffect(() => {
      dispatch(handleInitialData())
  }, [])

  return (
    <div>
      <Nav />
      {(loading)
        ? <SpinnerOverlay>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 80 }} spin />} />
        </SpinnerOverlay>
        : <Container>
          <Switch>
            <Route path='/login' exact component={Login} />
            <PrivateRoute authed={authedUser !== null} path='/' exact component={Poll} />
            <PrivateRoute authed={authedUser !== null} path='/add' exact component={NewQuestion} />
            <PrivateRoute authed={authedUser !== null} path='/leaderboard' exact component={Leaderboard} />
            <PrivateRoute authed={authedUser !== null} path='/question/:id' component={Question} />
          </Switch>
        </Container>
      }
    </div>
  )
}

export default App

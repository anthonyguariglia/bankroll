/* eslint-disable */
import React, { Component, Fragment, useReducer } from 'react'
import AppContext from './context/context'
import reducer from './context/reducer'
import { Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { v4 as uuid } from 'uuid'

import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

import Homepage from './components/Main/Homepage'


const initialState = {
  loggedIn: false,
  userId: null,
  userName: null,
  token: null,
  userName: null,
  currentStock: {
    name: 'Tesla',
    ticker: 'TSLA'
  },
  lists: null,
  currentList: null
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Header />
      <main className='container-fluid'>
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-out' component={SignOut} />
        <Route path='/home' component={Homepage}/>
        {/* <Route path='/home' component={GetData} /> */}
      </main>
      {/* {state.loggedIn ? <MainContent /> : ''} */}
    </AppContext.Provider>
  )
}

export default App

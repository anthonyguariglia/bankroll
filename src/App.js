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
import GetData from './components/Main/GetData'
import Search from './components/Main/Search'
import StockBar from './components/Main/StockBar'
import StockNav from './components/Main/StockNav'


const initialState = {
  loggedIn: true,
  userId: null,
  userName: null,
  token: null,
  userName: null,
  currentStock: {
    name: 'Tesla',
    ticker: 'TSLA'
  }
}

const finnhub = require('finnhub')

const api_key = finnhub.ApiClient.instance.authentications['api_key']
api_key.apiKey = 'c7spe0qad3i9jn7rivng' // Replace this
const finnhubClient = new finnhub.DefaultApi()

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Header />
      <main className='container'>
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-out' component={SignOut} />
      </main>
      {/* {state.loggedIn ? <MainContent /> : ''} */}
      <Container>
        <Row>
          <StockBar className='stock-bar' />
        </Row>
        <Row>
          <Search className='search-bar' finnhubClient={finnhubClient}/>
        </Row>
        <Row>
          <Col className='get-data-col'>
            <GetData finnhubClient={finnhubClient} />
          </Col>
          <Col className='stock-nav-col'>
            <StockNav className='stock-nav' />
          </Col>
        </Row>
      </Container>
    </AppContext.Provider>
  )
}

export default App

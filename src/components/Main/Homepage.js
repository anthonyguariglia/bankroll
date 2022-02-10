/* eslint-disable */
import react, { useState, useEffect, useContext } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import AppContext from '../../context/context'

import { Container, Row, Col } from 'react-bootstrap'
import Search from './Search'
import GetData from './GetData'
import StockBar from './StockBar'
import StockNav from './StockNav'

import { getAllLists } from '../../api/lists'
import { SET_LISTS, SET_CURRENT_LIST } from '../../context/action-types'

const finnhub = require('finnhub')

const api_key = finnhub.ApiClient.instance.authentications['api_key']
api_key.apiKey = 'c7spe0qad3i9jn7rivng' // Replace this
const finnhubClient = new finnhub.DefaultApi()

const Homepage = () => {
  const { state, dispatch } = useContext(AppContext)
  const { loggedIn, token, lists, currentList } = state
  // const [lists, setLists] = useState({})

  const processListData = async (listResponse) => {
    const listObj = await listResponse.map(list => {
      return {
        name: list.name,
        stocks: [ ...list.stocks ]
      }
    })
    return listObj
  }

  useEffect(async () => {
    if (loggedIn) {
      const listResponse = await getAllLists(token)
      console.log(listResponse.data.lists)
      const listData = await listResponse.data.lists.map(list => {
        return {
          name: list.name,
          stocks: [ ...list.stocks ]
        }
      })
      // setLists(listData)
      dispatch({
        type: SET_LISTS,
        payload: listData
      })
    }
  }, [])

  useEffect(() => {
    if (lists) {
      console.log(lists)
      if (!currentList) {
        dispatch({
          type: SET_CURRENT_LIST,
          payload: lists[0]
        })
      }
    }
    
  }, [lists])

  return (
    loggedIn ? 
    <Container fluid>
    <Row>
      <StockBar className='stock-bar' finnhubClient={finnhubClient} />
    </Row>
      <Row>
        <Col className='col-1' />
        <Col className='get-data-col col-7'>
          <GetData finnhubClient={finnhubClient} />
        </Col>
        <div className='stock-nav-col'>
          <Search className='search-bar' finnhubClient={finnhubClient}/>
          <StockNav className='stock-nav'  />
        </div>
        <Col className='col-2' />
      </Row>
    </Container> : ''
  )
}

export default Homepage
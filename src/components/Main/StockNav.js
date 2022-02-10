/* eslint-disable */
import react, { useState, useEffect, useContext } from 'react'
import AppContext from '../../context/context'
import { Container, Row, Col } from 'react-bootstrap'

import { SET_CURRENT_LIST } from '../../context/action-types'

const StockNav = () => {
  const { state, dispatch } = useContext(AppContext)
  const { loggedIn, token, lists, currentList } = state

  // const [currentList, setCurrentList] = useState({})

  /* Temporary variables - replace with API call to back end*/
  const ticker = 'AAPL'
  const currentPrice = '$172.50'

  let listsJSX

  useEffect(async () => {
    if (lists) {
      // const stocks = lists.stocks
      // console.log('stocks: ', lists)

      // const listToDisplay = await lists.filter(list => {
      //   return list.name === currentListName
      // })
      // setCurrentList(await listToDisplay[0])
      // console.log('current list: ', await listToDisplay )

    }
  }, [lists])

  const handleClick = e => {
    console.log(e.target.value)
    const listToDispatch = lists.filter(list => list.name === e.target.value)
    console.log(listToDispatch)
    if (listToDispatch) {
      dispatch({
        type: SET_CURRENT_LIST,
        payload: listToDispatch
      })
    }
    
  }

  return (
    <>
      <Container className='stock-nav-wrapper'>
        <span className='stock-nav-list-header-wrapper'><h2 className='stock-nav-list-header'>Lists</h2><img className='stock-nav-add' src='https://icongr.am/clarity/add.svg?size=24' /></span>
          {lists ? lists.map(list => (
            <>
              <h3 className='stock-list-name'>
                <button className='clickable' onClick={handleClick} value={list.name}>{list.name}</button>
              </h3>
            </>
            
          )
        ) : '' }
      </Container>
    </>
  )
}

export default StockNav
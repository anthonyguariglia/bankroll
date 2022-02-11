/* eslint-disable */
import react, { useState, useEffect, useContext } from 'react'
import AppContext from '../../context/context'
import { Container, Row, Col } from 'react-bootstrap'
import { toast } from 'react-toastify'

import { SET_CURRENT_LIST, SET_LISTS } from '../../context/action-types'
import { getAllLists, createList, deleteList } from '../../api/lists'

const StockNav = () => {
  const { state, dispatch } = useContext(AppContext)
  const { loggedIn, token, lists, currentList } = state

  const [addList, setAddList] = useState(false)
  const [listName, setListName] = useState('')

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

  const handleClick = async e => {
    console.log(e.target.value)
    const apiListData = await getAllLists(token)
    const newList = apiListData.data.lists.filter(list => list.name === e.target.value ? list.id : false)
    console.log(newList)
    dispatch({
      type: SET_CURRENT_LIST,
      payload: newList[0]
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const newList = await createList(token, listName)
    if (newList.data === 'List already exists') {
      return toast.error(newList.data)
    }
    console.log(newList)
    dispatch({
      type: SET_LISTS,
      payload: newList.data.lists
    })
    setListName('')
    setAddList(false)
  }

  const handleChange = e => {
    // console.log(e.target.value)
    setListName(e.target.value)
  }

  const handleAddlist = e => {
    setAddList(!addList)
  }

  const handleDelete = async (e) => {
    console.log(e)
    const newList = await deleteList(token, e)
    const listData = await getAllLists(token)
    console.log('list data: ', listData)
    dispatch({
      type: SET_LISTS,
      payload: listData.data.lists
    })
    if (listData.data.lists.length > 1) {
      dispatch({
        type: SET_CURRENT_LIST,
        payload: listData.data.lists[listData.data.lists.length - 1]
      })
    } else {
      dispatch({
        type: SET_CURRENT_LIST,
        payload: null
      })
    }
  }

  return (
    <>  
      {/* Input to create a new list */}
      {addList ? <form onSubmit={handleSubmit} className='create-list-form'><input value={listName} onChange={handleChange} className='create-list-input' placeholder='Enter list name...'></input><button onClick={handleSubmit} className='create-list'><img src='https://icongr.am/clarity/add.svg?size=16' /></button></form> : ''}
      <Container className='stock-nav-wrapper'>
        <span className='stock-nav-list-header-wrapper'><h2 className='stock-nav-list-header'>Lists</h2><button className='clickable-plus' onClick={handleAddlist}>{!addList ? <img className='stock-nav-add' src='https://icongr.am/clarity/add.svg?size=24' /> : <img className='stock-nav-add' src='https://icongr.am/clarity/minus.svg?size=24' />}</button></span>
          {/* Add lists based on context variable */}
          {lists ? lists.map(list => (
            <>
              <h3 className='stock-list-name' key={list.name}>
                <button className='clickable' onClick={handleClick} value={list.name}>{list.name}</button>
                <button className='delete-list-wrapper' onClick={() => handleDelete(list.name)} ><img className='delete-list' src='https://icongr.am/fontawesome/trash-o.svg?size=18' /></button>
              </h3>
            </>
          )
        ) : '' }
      </Container>
      
    </>
  )
}

export default StockNav
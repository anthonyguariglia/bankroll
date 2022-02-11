/* eslint-disable */
import react, { useState, useEffect, useContext } from 'react'
import AppContext from '../../context/context'
import { SET_CURRENT_LIST, SET_CURRENT_STOCK } from '../../context/action-types'
import { removeStock, getAllStocks } from '../../api/stocks'
import { getAllLists } from '../../api/lists'
import { toast } from 'react-toastify'

const StockBar = ({finnhubClient}) => {
  const{ state, dispatch } = useContext(AppContext)
  const { loggedIn, token, lists, currentList } = state

  // const [currentList, setCurrentList] = useState({})
  const [socketData, setSocketData] = useState(null)
  const [stockPriceData, setStockPriceData] = useState({})
  const [stockChangeData, setStockChangeData] = useState({})
  const [stocks, setStocks] = useState([])

  // Unsubscribe
  const unsubscribe = (socket, symbol) => {
    socket.send(JSON.stringify({'type':'unsubscribe','symbol': 'AAPL'}))
    socket.send(JSON.stringify({'type':'unsubscribe', 'symbol': 'TSLA'}))
    socket.send(JSON.stringify({'type':'unsubscribe', 'symbol': 'MSFT'}))
  }

  useEffect(async () =>  {

    const socket = new WebSocket('wss://ws.finnhub.io?token=c7spe0qad3i9jn7rivng')

    // Connection opened -> Subscribe
    console.log(socket)

    socket.addEventListener('open', function (event) {
      setTimeout(() => socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'})), 100)
      setTimeout(() => socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'TSLA'})), 100)
      setTimeout(() => socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'MSFT'})), 100)
    })

    // Listen for messages
    socket.addEventListener('message', function (event) {
      setSocketData(JSON.parse(event.data).data)
      // console.log('Message from server ', JSON.parse(event.data).data)
    })

    // Unsubscribe
    return () => {
      unsubscribe(socket, 'AAPL')
    }
  }, [])

  useEffect(() => {
    if (socketData) {
      // console.log('socket data: ', socketData[0].s, socketData[0].p)
    }
  }, [socketData])

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

  useEffect(() => {
    if (currentList) {
      console.log('new list: ', currentList)
      if (currentList) {
        if (currentList.stocks) {
          if (currentList.stocks.length) {
            console.log(currentList.stocks)
            setStocks(currentList.stocks)
            currentList.stocks.map(stock => {
              // console.log(stock.ticker)
              finnhubClient.quote(stock.ticker, (error, incoming, response) => {
                if (incoming) {
                    // const percentChange = incoming.dp
                    // console.log('should be here', incoming.o, incoming.pc, incoming.dp.toFixed(2))
                    const tick = stock.ticker
                    const close = incoming.c.toFixed(2)
                    const change = incoming.dp.toFixed(2)
                    stockPriceData[`${stock.ticker}`] = close
                    stockChangeData[`${stock.ticker}`] = change
                }
              })
            })
          } else {
            setStocks(currentList.stocks)
          }
        }
      }
    }
  }, [currentList])

  const handleClick = e => {
    if (lists) {
      const stockToDisplay = stocks.filter(stock => stock.ticker == e.target.id)[0]
      console.log(stockToDisplay)
      dispatch({
        type: SET_CURRENT_STOCK,
        payload: stockToDisplay
      })
    }
  }

  const handleRemoveStock = async e => {
    // get the ID of the list the stock is currently in
    const listData = await getAllLists(token)
    const current = await listData.data.lists.filter(list => list.name === currentList.name ? list.id : false)

    // get the ID of the stock we wish to remove
    const stockToRemove = await currentList.stocks.filter(stock => stock.ticker === e.target.value ? stock.id : false)

    if (current[0] && stockToRemove[0]) {

      // remove desired stock
      const removed = await removeStock(token, current[0].id, stockToRemove[0].id)
    }
    // Update stock bar
    const apiListData = await getAllLists(token)
    const newList = apiListData.data.lists.filter(list => list.name === currentList.name ? list.id : false)
    dispatch({
        type: SET_CURRENT_LIST,
        payload: newList[0]
    })
    toast.success('Successfully deleted stock from list')
  }

  return (
    <>
      <section className='stock-bar-wrapper'>
        <section className='stock-bar-box'>
          {currentList ? ( stocks.length ?  
            stocks.map(stock => (
                <span className='stock-bar-stock' key={stock.ticker} >
                  <button className='stock-bar-delete-stock' onClick={handleRemoveStock} value={stock.ticker}>X</button> 
                  <h3 className='stock-bar-ticker'><button className='clickable' id={stock.ticker} onClick={handleClick} >{stock.ticker}</button></h3>
                  <div className='stock-bar-price-pc-box'>
                    <h6 className='stock-bar-pc'>{stockChangeData[`${stock.ticker}`] > 0 ? '+' + stockChangeData[`${stock.ticker}`] + '%' : stockChangeData[`${stock.ticker}`] + '%'}</h6>
                    <h5 className='stock-bar-price'>{'$' + stockPriceData[`${stock.ticker}`]}</h5>
                  </div>
                </span>
            ))
          : <span className='stock-bar-message'><p>Add stocks!</p></span> ) : <span className='stock-bar-message'><p>Add stocks to a list to get started!</p></span> }
        </section>
      </section>
    </>
  )

}

export default StockBar
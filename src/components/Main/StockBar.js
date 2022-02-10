/* eslint-disable */
import react, { useState, useEffect, useContext } from 'react'
import AppContext from '../../context/context'
import { SET_CURRENT_LIST, SET_CURRENT_STOCK } from '../../context/action-types'

const Stock = ({ currentPrice }) => {

  return (
    <>
      
    </>
  )
}

const StockBar = ({finnhubClient}) => {
  const{ state, dispatch } = useContext(AppContext)
  const { loggedIn, token, lists, currentList } = state

  // const [currentList, setCurrentList] = useState({})
  const [socketData, setSocketData] = useState(null)
  const [stockPriceData, setStockPriceData] = useState({})
  const [stockChangeData, setStockChangeData] = useState({})
  const [stocks, setStocks] = useState([])


  // Replace with variable passed in from a click
  // const currentListName = 'Tech'

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
        // if (window.stockInterval) {
        //   clearInterval(window.stockInterval)
        // }
        // const stockIntervalId = setInterval(updateStocksWithInterval, 30000)
        // window.stockInterval = stockIntervalId
      }
    }
  }, [currentList])

  const updateStocksWithInterval = () => {
    if (currentList) {
      currentList.stocks.map(stock => {
        // console.log(stock.ticker)
        // finnhubClient.quote(stock.ticker, (error, incoming, response) => {
        //   if (incoming) {
        //       // const percentChange = incoming.dp
        //       // console.log('should be here', incoming.o, incoming.pc, incoming.dp.toFixed(2))
        //       // console.log(stockPriceData, stockChangeData)
        //       const tick = stock.ticker
        //       const close = incoming.c
        //       const change = incoming.d
        //       stockPriceData[`${stock.ticker}`] = close
        //       stockChangeData[`${stock.ticker}`] = change
        //   }
        // })
        
      })
    }
  }

  const handleClick = e => {
    console.log(e.target.id)
    if (lists) {
      const stockToDisplay = stocks.filter(stock => stock.ticker == e.target.id)[0]
      console.log(stockToDisplay)
      dispatch({
        type: SET_CURRENT_STOCK,
        payload: stockToDisplay
      })
    }
  }

  return (
    <>
      <section className='stock-bar-wrapper'>
        <section className='stock-bar-box'>
          {currentList ? stocks ?  
            stocks.map(stock => (
                <span className='stock-bar-stock' key={stock.ticker} >
                  <h3 className='stock-bar-ticker'><button className='clickable' id={stock.ticker} onClick={handleClick} >{stock.ticker}</button></h3>
                  <div className='stock-bar-price-pc-box'>
                    <h6 className='stock-bar-pc'>{stockChangeData[`${stock.ticker}`] > 0 ? '+' + stockChangeData[`${stock.ticker}`] + '%' : stockChangeData[`${stock.ticker}`] + '%'}</h6>
                    <h5 className='stock-bar-price'>{'$' + stockPriceData[`${stock.ticker}`]}</h5>
                  </div>
                </span>
            ))
          : 'Select a list!' : 'Add stocks to get started'}
        </section>
      </section>
    </>
  )

}

export default StockBar
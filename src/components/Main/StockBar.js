/* eslint-disable */
import react, { useState, useEffect, useContext } from 'react'
import AppContext from '../../context/context'

const StockBar = () => {

  const socket = new WebSocket('wss://ws.finnhub.io?token=c7spe0qad3i9jn7rivng')

  // Unsubscribe
  const unsubscribe = (symbol) => {
    socket.send(JSON.stringify({'type':'unsubscribe','symbol': 'AAPL'}))
  }

  useEffect(() =>  {
    // Connection opened -> Subscribe
    console.log(socket)

    socket.addEventListener('open', function (event) {
      socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
      socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
      // socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}))
    })

    // Listen for messages
    socket.addEventListener('message', function (event) {
      // console.log('Message from server ', event.data)
    })

    // Unsubscribe
    return () => {
      unsubscribe('AAPL')
    }
  }, [])

  return (
    <>
      <section className='stock-bar-wrapper'>

      </section>
    </>
  )

}

export default StockBar
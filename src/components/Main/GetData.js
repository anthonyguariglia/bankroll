/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react'
import { Col, Tooltip, OverlayTrigger } from 'react-bootstrap'
import dateFormat from 'dateformat'
import AppContext from '../../context/context'
import { SET_CURRENT_STOCK, SET_CURRENT_LIST } from '../../context/action-types'
import { getAllLists } from '../../api/lists'
import { createStock } from '../../api/stocks'
import{ toast } from 'react-toastify'

import Graph from './Graph'

// Component for data acquisition from finnhub API
const GetData = ({ finnhubClient, nameOfStock }) => {
  const { state, dispatch } = useContext(AppContext)
  const { currentStock, currentList, token } = state

  // Set a base currentStock if none exists
  if (!currentStock) {
    dispatch({
      type: SET_CURRENT_STOCK,
      payload: {
        name: 'Tesla',
        ticker: 'TSLA'
      }
    })
  }

  // Otherwise pull currentStock from context
  const { name, ticker } = currentStock

  // declare state variables
  const [data, setData] = useState(null)
  const [stock, setStock] = useState({})
  const [dataMin, setDataMin] = useState(0)
  const [dataMax, setDataMax] = useState(1000)
  const [timeRange, setTimeRange] = useState(0)
  const [frequency, setFrequency] = useState(1)
  const [marketOpen, setMarketOpen] = useState(null)
  const [now, setNow] = useState(null)
  const [showOpen, setShowOpen] = useState(1)

  // set up tool tips for 'add to list'
  const renderTooltip = (props) => {
    const text = currentList ? 'Add to ' + currentList.name : 'Create a list!'
    return (
      <Tooltip id="button-tooltip" {...props}>
        <>
          <span>{text}</span>
        </>
      </Tooltip>
    )
  }

  // componentDidMount
  useEffect(() => {
    setNow(new Date())
    setMarketOpen(new Date(dateFormat(now, 'yyyy.mm.dd.9:00')).getTime() / 1000)
    setStock({ name: name, ticker: ticker, openPrice: 0, currentPrice: 0 })
  }, [])

  // update the local stock whenever the global stock changes
  useEffect(() => {
  if (ticker) {
      setStock({ name: name, ticker: ticker })
    }
  }, [ticker])

  // When a new ticker is selected, pull a quote on that ticker and trigger the data acquisition sequence
  useEffect(() => {
    if (stock.ticker) {
      finnhubClient.quote(stock.ticker, (error, incoming, response) => {
        if (incoming) {
          setStock({ ...stock, openPrice: incoming.pc, percentChange: incoming.dp.toFixed(2) })
        }
      })
    }
  }, [stock.ticker])
  
  // Once the openPrice has been received, pull the latest stock data
  useEffect(() => {
    if (stock.openPrice) {
      setTimeout(() => getStockData(), 100)
    }
  }, [stock.openPrice])

  // Refresh stock history data when timeRange is changed
  useEffect(() => {
    if (stock.ticker) {
      setTimeout(() => getStockData(), 100)
    }

  }, [timeRange])

  // Update currentPrice of stock state variable when new data is obtained
  useEffect(() => {
    if (data) {
      setStock({ ...stock, currentPrice: data[data.length - 1].price })
    }
  }, [data])

  // Get latest stock data
  const getStockData = (ticker) => {
    // contact finnhub api to get candle data over specified range, at calculated frequency, for the given ticker
    finnhubClient.stockCandles(stock.ticker ? stock.ticker : ticker, frequency, (marketOpen - (86400 * timeRange)), Math.floor(new Date().getTime() / 1000), (error, incoming, response) => {
      if (error) {
        toast.error('An unexpected error occurred. Please wait a few moments then try again')
      }
      if (stock.openPrice) {
        // define dataset TODO: change to closedDataset
        const open = incoming.c
        let openDataset = [incoming.t, incoming.c]

        // Create dataSet array that contains objects of name and price for graph
        let dataSet = []
        let i = 0
        if (openDataset[0] !== undefined) {
          openDataset[0].forEach(dataPoint => {
            const date = dateFormat(new Date(dataPoint * 1000), 'm/d/yy, h:MM')
            const dataObj = { name: date, price: openDataset[1][i].toFixed(2), open: stock.openPrice }
            i++
            dataSet.push(dataObj)
          })
      
          // update state variables to pass to graph
          setDataMin(Math.min(...open))
          setDataMax(Math.max(...open))
          setData(dataSet)
        }
      }
    })
  }

  // set the time range of the graph
  const setRange = e => {
    if (parseInt(e.target.id)) {
      setTimeRange(parseInt(e.target.id))
    } else {
      setTimeRange(e.target.id)
    }
    // based on the button clicked, calculate the data frequency and decide whether to show the 'opening' price
    if (e.target.id == 0 && ((now - marketOpen) <= 14400)) {
      setFrequency(1)
      setShowOpen(1)
    } else if (e.target.id == 0 && ((now - marketOpen) > 14400)) {
      setFrequency(1)
      setShowOpen(1)
    } else if (e.target.id > 0 && e.target.id <= 7) {
      setFrequency(30)
      setShowOpen(0)
    } else if (e.target.id > 7 && e.target.id <= 14) {
      setFrequency(60)
      setShowOpen(0)
    } else {
      setFrequency(60)
      setShowOpen(0)
    }
  }

  // handle when a user adds a stock to a list
  const addToList = async e => {
    // pull all list data from the server
    const apiListData = await getAllLists(token)
    
    // filter that data to find the specific listID we need
    const list = apiListData.data.lists.filter(list => list.name === currentList.name ? list.id : false)

    // if we find a list
    if (list) {
      // create a stock inside of that list
      const stockResponse = await createStock(token, currentStock.name, currentStock.ticker, list[0].id)

      // handle error if the stock is already in the list
      if (stockResponse.data === 'Stock is already in list') {
        toast.error(stockResponse.data)
      } else {
        // if not, pull all list data again to update nav list
        const apiListData = await getAllLists(token)

        // filter that data for our specific list
        const newList = apiListData.data.lists.filter(list => list.name === currentList.name ? list.id : false)
        
        // update context to reflect new list data
        dispatch({
          type: SET_CURRENT_LIST,
          payload: newList[0]
        })

        // report result to the user
        toast.success('Stock successfully added to list')
      }
    }
  }
  
  return (
    <>
      <h2 className='stock-name'>{name + ' (' + ticker + ')'}</h2>
      <h3 className='stock-price'>{'$' + stock.currentPrice}</h3>
      {/* Add stock to list button */}
      <span className='stock-price-and-button' onClick={addToList}>
        <h5 className='stock-percent-change'>{stock.percentChange > 0 ? '+' + stock.percentChange + '% today' : stock.percentChange + '% today'}</h5>
          {/* Tooltip */}
          <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip()} >
            <button className='stock-add-button'><img className='stock-add-to-list' src='https://icongr.am/clarity/add-text.svg?size=24' /></button>
          </OverlayTrigger>
        {/* <span className='stock-add-text'>Add to {currentList ? currentList.name : 'current list'}</span> */}

      </span>
      {/* Stock Graph */}
      <div className='graph-wrapper' >            
        {stock.openPrice ? <Graph data={data} stock={stock} dataMin={dataMin} dataMax={dataMax} showOpen={showOpen} percentChange={stock.percentChange} />  : ''}
      </div>
      {/* Date Range */}
      <section className='date-range-wrapper'>
        <button className='date-range-button' id='0' onClick={setRange}>1D</button>
        <button className='date-range-button' id='7' onClick={setRange}>1W</button>
        <button className='date-range-button' id='14' onClick={setRange}>2W</button>
        <button className='date-range-button' id='30' onClick={setRange}>1M</button>
      </section>
    </>
  )
}

export default GetData
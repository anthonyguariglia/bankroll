/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react'
import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import dateFormat from 'dateformat'
import AppContext from '../../context/context'
import { SET_CURRENT_STOCK } from '../../context/action-types'

import Graph from './Graph'

// Component for data acquisition from finnhub API
const GetData = ({ finnhubClient, nameOfStock }) => {
    const { state, dispatch } = useContext(AppContext)
    const { currentStock } = state
    const { name, ticker } = currentStock

    const [data, setData] = useState(null)
    const [stock, setStock] = useState({})
    const [dataMin, setDataMin] = useState(0)
    const [dataMax, setDataMax] = useState(1000)
    const [timeRange, setTimeRange] = useState(0)
    const [frequency, setFrequency] = useState(1)
    const [marketOpen, setMarketOpen] = useState(null)
    const [now, setNow] = useState(null)
    const [showOpen, setShowOpen] = useState(1)

    // componentDidMount
    useEffect(() => {
        setNow(new Date())
        setMarketOpen(new Date(dateFormat(now, 'yyyy.mm.dd.9:00')).getTime() / 1000)
        setStock({ name: name, ticker: ticker, openPrice: 0, currentPrice: 0 })
    }, [])

    useEffect(() => {
        if (ticker) {
            // setStock({ ...stock, name: name, ticker: ticker, openPrice: 0, currentPrice: 0 })
            // console.log(currentStock, name, ticker)
            setStock({ name: name, ticker: ticker })
            // getStockData(ticker)
        }
    }, [ticker])

    // When a new ticker is selected, pull a quote on that ticker and trigger the data acquisition sequence
    useEffect(() => {
        console.log('new ticker', stock.ticker)
        if (stock.ticker) {
            finnhubClient.quote(stock.ticker, (error, incoming, response) => {
                if (incoming) {
                    // const percentChange = incoming.dp
                    // console.log('should be here', incoming.o, incoming.pc, incoming.dp.toFixed(2))
                    setStock({ ...stock, openPrice: incoming.pc, percentChange: incoming.dp.toFixed(2) })
                }
              })
        }
    }, [stock.ticker])
    
    // Once the openPrice has been received, pull the latest stock data
    useEffect(() => {
        if (stock.openPrice) {
            // console.log('time to run!', stock.openPrice)
            setTimeout(() => getStockData(), 100)
        }
    }, [stock.openPrice])

    // Refresh stock history data when timeRange is changed
    useEffect(() => {
        console.log('time has been changed')
        if (stock.ticker) {
            // console.log(timeRange, frequency)
            setTimeout(() => getStockData(), 100)
        }

    }, [timeRange])

    // Update currentPrice of stock state variable when new data is obtained
    useEffect(() => {
        if (data) {
            // console.log(data[data.length - 1].price)
            setStock({ ...stock, currentPrice: data[data.length - 1].price })
            // console.log(dataMin, dataMax)
        }
    }, [data])

    // Get latest stock data
    const getStockData = (ticker) => {

        console.log(marketOpen, marketOpen - (86400 * timeRange))

        /* uncomment  when I wake up*/
        /* ---------*/
        finnhubClient.stockCandles(stock.ticker ? stock.ticker : ticker, frequency, (marketOpen - (86400 * timeRange)), Math.floor(new Date().getTime() / 1000), (error, incoming, response) => {
        /* ---------*/
        /* uncomment when I wake up*/

        if (error) {
            // console.log(error)
            // console.log(incoming)
            
        }
        // console.log(response)
        if (stock.openPrice) {
            // define dataset TODO: change to closedDataset
            const open = incoming.c
            let openDataset = [incoming.t, incoming.c]
            console.log(openDataset)

            // Create dataSet array that contains objects of name and price for graph
            let dataSet = []
            let i = 0
            if (openDataset[0] !== undefined) {
                openDataset[0].forEach(dataPoint => {
                    // const date = new Date(dataPoint * 1000)
                    // console.log('open price ', stock.openPrice)
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

    const setRange = e => {
        console.log('here!', e.target.id)
        if (parseInt(e.target.id)) {
            setTimeRange(parseInt(e.target.id))
        } else {
            setTimeRange(e.target.id)
        }
        console.log(now - marketOpen)
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
    
    return (
        <>
            {/* <button onClick={() => getStockData(stock.name)}>Get Data</button> */}
            <h2 className='stock-name'>{name + ' (' + ticker + ')'}</h2>
            <h3 className='stock-price'>{'$' + stock.currentPrice}</h3>
            <h5 className='stock-percent-change'>{stock.percentChange > 0 ? '+' + stock.percentChange + '%' : stock.percentChange + '%'}</h5>
            <div className='graph-wrapper' >            
                {stock.openPrice ? <Graph data={data} stock={stock} dataMin={dataMin} dataMax={dataMax} showOpen={showOpen} percentChange={stock.percentChange} />  : ''}
            </div>
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
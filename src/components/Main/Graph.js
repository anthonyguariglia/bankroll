/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react'
import { AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Graph = ({ stock, data, dataMin, dataMax, showOpen, percentChange }) => {

  // Calculate upper limit for y-axis
  const upperLimit = stock.openPrice > dataMax ? 1.01 * stock.openPrice : dataMax

  return (
      <AreaChart width={0.45 * window.innerWidth} height={0.18 * window.innerWidth} data={data}
        margin={{ top: 50, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={percentChange > 0 ? "#82ca9d" : "#ca8282"} stopOpacity={0.8}/>
          <stop offset="95%" stopColor={percentChange > 0 ? "#82ca9d" : "#ca8282"} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" name="Time" />
        <YAxis type="number" domain={[dataMin, upperLimit]} />
        <Tooltip />
        <Legend />
        {showOpen ? <Area type="monotone" dataKey="open" stroke="#8884d8" fillOpacity={0} fill="url(#colorUv)" dot={false} legend={false} /> : '' }
        <Area type="monotone" dataKey="price" name={stock.ticker} stroke={percentChange > 0 ? "#82ca9d" : "#ca8282"} fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
  )

}

export default Graph

/* eslint-disable */
import react, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const StockNav = () => {
  /* Temporary variables - replace with API call to back end*/
  const ticker = 'AAPL'
  const currentPrice = '$172.50'

  return (
    <>
      <Container className='stock-nav-wrapper'>
        <h4>First List</h4>
      </Container>
    </>
  )
}

export default StockNav
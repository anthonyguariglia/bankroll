/* eslint-disable */
import axios from 'axios'
import apiUrl from '../apiConfig'

export const createStock = (token, name, ticker, listId, ) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/user/stocks',
    headers: {
      'x-access-token': token
    },
    data: {
      name: name,
      ticker: ticker,
      listId: listId
    }
  })
}

export const getAllStocks = (token) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/user/stocks',
    headers: {
      'x-access-token': token
    }
  })
}

export const removeStock = (token, listId, stockId) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/user/stocks',
    headers: {
      'x-access-token': token
    },
    data: {
      listId: listId,
      stockId: stockId
    }
  })
}

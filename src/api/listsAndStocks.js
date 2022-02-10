import axios from 'axios'
import apiUrl from '../apiConfig'

export const getListsAndStocks = (token) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/user/lists',
    headers: {
      'x-access-token': token
    }
  })
}

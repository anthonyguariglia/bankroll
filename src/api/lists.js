import axios from 'axios'
import apiUrl from '../apiConfig'

export const createList = (token, name) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/user/lists',
    headers: {
      'x-access-token': token
    },
    data: {
      name: name
    }
  })
}

export const deleteList = (token, name) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/user/lists/' + name,
    headers: {
      'x-access-token': token
    }
  })
}

export const getAllLists = (token) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/user/lists',
    headers: {
      'x-access-token': token
    }
  })
}

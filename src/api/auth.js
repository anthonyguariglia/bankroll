import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = (credentials) => {
  // console.log(credentials)
  return axios({
    method: 'POST',
    url: apiUrl + '/signup/',
    data: {
      email: credentials.email,
      username: credentials.username,
      password: credentials.password,
      password_confirmation: credentials.passwordConfirmation
    }
  })
}

export const signIn = (credentials) => {
  return axios({
    url: apiUrl + '/signin/',
    method: 'POST',
    data: {
      username: credentials.username,
      password: credentials.password
    }
  })
}

export const signOut = (token) => {
  return axios({
    url: apiUrl + '/signout/',
    method: 'DELETE',
    headers: {
      'x-access-token': token
    }
  })
}

export const changePassword = (token, username, oldPassword, newPassword, confirmPassword) => {
  return axios({
    url: apiUrl + '/change-password/',
    method: 'PATCH',
    headers: {
      'x-access-token': token
    },
    data: {
      username: username,
      password: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword
    }
  })
}

/* eslint-disable */
import React, { useContext, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import AppContext from '../../context/context'

import { toast, ToastContainer } from 'react-toastify'
import { SET_TOKEN, SET_USER_ID, SET_SIGNEDIN, SET_USERNAME } from '../../context/action-types'
import { signIn } from '../../api/auth'
import { Form, Button } from 'react-bootstrap'


const SignIn = () => {
    const { state, dispatch } = useContext(AppContext)
    const { loggedIn } = state
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSignIn = (event) => {
      event.preventDefault()

      const signInObj = {
          username: username,
          password: password
      }

      signIn(signInObj)
        .then((res) => {
            console.log('login response: ', res)
            // console.log(res.data, 'state: ', state)
            toast.success(`${username} successfully signed in!`)
            dispatch({
                type: SET_USER_ID,
                payload: res.data.id
            })
            dispatch({
                type: SET_TOKEN,
                payload: res.data.accessToken
            })
            dispatch({
                type: SET_SIGNEDIN,
                payload: true
            })
            dispatch({
                type: SET_USERNAME,
                payload: res.data.username
            })
        })
        // .then(() =>{
        //   // toast alert here
        // })
        // .then(() => history.push('/'))
        .catch((error) => {
          console.log(error)
          // setUsername('')
          // setPassword('')
          //error toast here
          toast.error('Incorrect Username or Password', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
        })
    }


  return (
      loggedIn ? <Redirect to='/home' /> :
    <div className='row signin-parent-wrapper'>
      <div className='signin-form-wrapper'>
        <h3 className="signin-header3">Login</h3>
        <Form onSubmit={onSignIn} className="signin-form">
          <Form.Group controlId='username'>
            <Form.Label className="label-username">Username</Form.Label>
            <Form.Control
              required
              className='username'
              type='username'
              name='username'
              value={username}
              placeholder='Enter Username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              className='username'
              name='password'
              value={password}
              type='password'
              placeholder='Enter Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant='success' type='submit' className='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default SignIn

/* eslint-disable */
import React, { useState, useContext, createRef } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import AppContext from '../../context/context'
import { SET_TOKEN, SET_USER_ID, SET_USERNAME } from '../../context/action-types'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { signUp, signIn, uploadPfp } from '../../api/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// const imgConfig = {
// 	quality: 0.2,
// 	maxWidth: 800,
// 	maxHeight: 600,
// 	autoRotate: true,
// }

const SignUp = () => {
    const { state, dispatch } = useContext(AppContext)
    const { loggedIn } = state
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    // const imageRef = createRef()

    const onSignUp = async (e) => {
      e.preventDefault()

      // const file = imageRef.current.files[0]
      // const type = file.name.split('.').pop()

      const apiObj = {
          email: email,
          username: username,
          password: password,
          passwordConfirmation: passConfirm,
      }
      signUp(apiObj)
          .then(() => signIn(apiObj))
          .then((res) => {
							console.log(res)
              // uploadPfp(imageRef.current.files[0], res.data.user.userName)
              dispatch({
                  type: SET_USERNAME,
                  payload: res.data.username
              })
          })
          .then(() =>{
              toast(`User ${username} successfully created!`, {type: 'success'})
							console.log('here')
          })
          .then(() => history.push('/sign-in'))
          .catch((error) => {
              setEmail('')
              setUsername('')
              setPassword('')
              setPassConfirm('')
              // toast error here
          })
      }

    return loggedIn ? (
			<Redirect to='/' />
		) : (
			<div className='row signin-parent-wrapper'>
				<div className='signin-form-wrapper'>
					<h3 className='signin-header3'>Sign Up</h3>
					<Form className='signup-form' onSubmit={onSignUp}>
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								required
								className='username'
								type='email'
								name='email'
								value={email}
								placeholder='Enter email'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Username</Form.Label>
							<Form.Control
								required
								className='username'
								type='username'
								name='username'
								value={username}
								placeholder='Enter username'
								onChange={(e) => setUsername(e.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								required
								className='username'
								name='password'
								value={password}
								type='password'
								placeholder='Password'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password Confirmation</Form.Label>
							<Form.Control
								required
								className='username'
								name='passwordConfirmation'
								value={passConfirm}
								type='password'
								placeholder='Confirm Password'
								onChange={(e) => setPassConfirm(e.target.value)}
							/>
						</Form.Group>
						{/* <Form.Group>
							<Form.Label>Profile Picture</Form.Label>
							<Form.Control
								type='file'
								name='image'
								id='imagePicker'
								accept='image/*'
								multiple={false}
								//onChange={(e) => imagePicker(e)}
								ref={imageRef}
							/>
						</Form.Group> */}
						<Button variant='success' type='submit' className='submit'>
							Submit
						</Button>
					</Form>
				</div>
			</div>
		)
}

export default SignUp

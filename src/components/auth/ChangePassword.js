/* eslint-disable */
import React, { useState, useContext } from 'react'
import AppContext from '../../context/context'
import { Redirect, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { changePassword } from '../../api/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ChangePassword = ({closeModal}) => {
  const {state, dispatch} = useContext(AppContext)
  const history = useHistory()
  const { loggedIn, token } = state
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const onChangePassword = () => {

    const passwords = {
      old: oldPassword,
      new: newPassword
    }
  changePassword(passwords, token)
    .then((response) =>{
      toast.success('Successfully changed password')
    })
    .then(() => history.push('/'))
    .catch((error) => {
      setNewPassword('')
      setOldPassword('')

      toast.error('Failed to change password')
    })
  }

  return (
    !loggedIn ? <Redirect to='/' /> :
    <div className='row signin-parent-wrapper '>
      <div className='signin-form-wrapper'>
        <h3 className="signin-header3">Change Password</h3>
        <Form className="changePass-form" >
          <Form.Group controlId='oldPassword'>
            <Form.Label>Old password</Form.Label>
            <Form.Control
            required
            className='username'
            name='oldPassword'
            value={oldPassword}
            type='password'
            placeholder='Old Password'
            onChange={(e) => setOldPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='newPassword'>
            <Form.Label>New Password</Form.Label>
            <Form.Control
            required
            className='username'
            name='newPassword'
            value={newPassword}
            type='password'
            placeholder='New Password'
            onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant='success' type='button' onClick={onChangePassword} className='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default ChangePassword

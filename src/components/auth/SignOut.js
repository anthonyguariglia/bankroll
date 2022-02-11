/* eslint-disable */
import { useContext, useEffect } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import AppContext from '../../context/context'
import { ALL_TYPES } from '../../context/action-types'
import { signOut } from '../../api/auth'
import { toast } from 'react-toastify'


const SignOut = () => {
  const { state, dispatch } = useContext(AppContext)
  const history = useHistory()
  const { loggedIn, token } = state

  useEffect(() => {
    clearInterval(window.intervalId)
    clearInterval(window.roomIntervalId)
    if (!loggedIn) {
        return
    }
    signOut(token)
      .then((res) => {
          // success toast here
          console.log(res)
          toast.success(res.data)
      })
      .finally(() => {
        ALL_TYPES.forEach((type) => {
          //console.log(type)
          dispatch({
            type: type,
            payload: null,
          })
        })
      })
      .finally(() => history.push('/'))
  }, [])

  return !loggedIn ? <Redirect to='/sign-in' /> : null
}

export default SignOut

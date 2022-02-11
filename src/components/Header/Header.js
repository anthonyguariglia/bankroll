/* eslint-disable */
import React, { Fragment, useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

import AppContext from '../../context/context'



const authenticatedOptions = (
  <section className='options'>
    <NavLink to='/home' className='nav-link'>Home</NavLink>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
  </section>
)

const unauthenticatedOptions = (
  <section className='options'>
    <NavLink to='/sign-in' className='link login nav-link'>
      Sign In
    </NavLink>
    <NavLink to='/sign-up' className='link register nav-link'>
      Sign Up
    </NavLink>
  </section>
)

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/home' className='nav-link'>Home</NavLink>
  </Fragment>
)

const Header = ({ user }) => {
  const { state, dispatch } = useContext(AppContext)
  const { userName, loggedIn } = state

  return (
    <Navbar bg='success' variant='dark' expand='md'>
      <Navbar.Brand>
        <Link to='/home' style={{ color: '#FFF', textDecoration: 'none' }}><span className='website-title'>BankRoll</span></Link>
      </Navbar.Brand>
      <section className='navbar-auth-links'>
        <Nav className='ml-auto'>
          {loggedIn && (
            <span className='navbar-text mr-2'><span className='navbar-welcome-text'>Welcome, {userName}</span></span>
          )}
          {/* {alwaysOptions} */}
          {loggedIn ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </section>
    </Navbar>
  )
}

export default Header

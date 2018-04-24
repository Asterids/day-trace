import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'

const LoginForm = (props) => {
  const {handleSubmit} = props

  return (
    <div id="login">
      <form onSubmit={handleSubmit} name="login">
        <div>
          <label htmlFor="username"><small>Username</small></label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
      {/* <a href="/auth/google">Login with Google</a> */}
    </div>
  )
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const username = evt.target.username.value
      const password = evt.target.password.value
      dispatch(auth(username, password))
    }
  }
}

const Login = connect(null, mapDispatch)(LoginForm)
export default Login

/**
 * PROP TYPES
 */
// LoginForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// }

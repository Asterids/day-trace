import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'

const SignupForm = (props) => {
  const {handleSubmit} = props

  return (
    <div id="signup">
      <form onSubmit={handleSubmit} name="signup">
        <div>
          <label htmlFor="email"><small>Your Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="username"><small>Choose a Username</small></label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Enter a Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
      {/* <a href="/auth/google">Sign up with Google</a> */}
    </div>
  )
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      const email = evt.target.email.value
      dispatch(auth(username, password, email, formName))
    }
  }
}

const Signup = connect(null, mapDispatch)(SignupForm)
export default Signup

/**
 * PROP TYPES
 */
// LoginForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// }

import axios from 'axios';
// import history from ''

const defaultUser = {};


const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'


export function getUser (user) {
  const action = {
    type: GET_USER,
    user
  }
  return action
}

const removeUser = () => {
  const action = {
    type: REMOVE_USER
  }
  return action
}


export const me = () => {
  dispatch => {
    axios.get('/auth/me')
      .then(res => {
        dispatch(getUser(res.data || defaultUser))
      })
      .catch(err => console.log(err))

export const auth = (username, password) =>
  dispatch =>
    axios.post(`/auth/login`, { username, password })
      .then(res => {
        console.log("RES.DATA", res.data)
        dispatch(getUser(res.data))
        // history.push('/home')
      }, authError => {
        dispatch(getUser({error: authError}))
      })
      .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))

export const logout = () => {
  dispatch => {
    axios.post('/auth/logout')
      .then(() => {
        dispatch(removeUser())
        // history.push('/login')
      })
      .catch(err => console.log(err))


export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    default:
      return state
  }
}

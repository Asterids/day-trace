import axios from 'axios';
// import history from ''

const defaultUser = {};


const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'


const getUser = user => {
  type: GET_USER,
  user
}

const removeUser = () => {
  type: REMOVE_USER
}


export const me = () => {
  dispatch => {
    axios.get('/auth/me')
      .then(res => {
        dispatch(getUser(res.data || defaultUser))
      })
      .catch(err => console.log(err))
  }
}

export const auth = (email, password, method) => {
  dispatch => {
    axios.post(`/auth/${method}`, { email, password })
      .then(res => {
        dispatch(getUser(res.data))
        // history.push('/home')
      }, authError => {
        dispatch(getUser({error: authError}))
      })
      .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))
  }
}

export const logout = () => {
  dispatch => {
    axios.post('/auth/logout')
      .then(() => {
        dispatch(removeUser())
        // history.push('/login')
      })
      .catch(err => console.log(err))
  }
}


export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    default:
      return state
  }
}

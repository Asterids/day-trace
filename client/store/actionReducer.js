import axios from 'axios';

const GET_USER_ACTIONS = 'GET_USER_ACTIONS';
const ADD_USER_ACTION = 'ADD_USER_ACTION';
const REMOVE_USER_ACTION = 'REMOVE_USER_ACTION';

export function getUserActions (userActions) {
  const action = {
    type: GET_USER_ACTIONS,
    userActions
  }
  return action
}

export function addUserAction (newAction) {
  const action = {
    type: ADD_USER_ACTION,
    newAction
  }
  return action
}

export function removeUserAction (actionId) {
  const action = {
    type: REMOVE_USER_ACTION,
    actionId
  }
  return action
}

export function fetchActions (userId) {
  return function (dispatch) {
    return axios.get(`/api/actions/${userId}`)
      .then(res => res.data)
      .then(actions => dispatch(getUserActions(actions)))
      .catch(console.error.bind(console))
  }
}

export function addUserActionThunkCreator (userId, newActionName) {
  return function (dispatch) {
    return axios.post(`/api/actions/${userId}`, newActionName)
      .then(res => res.data)
      .then(newUserAction => dispatch(addUserAction(newUserAction)))
      .catch(console.error.bind(console))
  }
}

export function deleteUserAction (userId, actionId) {
  return function (dispatch) {
    return axios.delete(`/api/actions/${userId}/${actionId}`)
      .then(res => res.data)
      .then(removedActionId => dispatch(removeUserAction(removedActionId)))
      .catch(console.error.bind(console))
  }
}

// our state is an array of currently available userActions
export default function actionReducer (state = [], action) {
  switch (action.type) {
    case GET_USER_ACTIONS:
      return action.userActions
    case ADD_USER_ACTION:
      return [...state, action.newAction]
    case REMOVE_USER_ACTION:
      return [state.filter(userAction => userAction.actionId !== action.actionId)]
    default:
      return state
  }
}

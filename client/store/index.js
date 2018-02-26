import { createStore } from 'redux';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducer';
// import userReducer from './userReducer';
import actions from './actions';


const store = createStore(
  reducer,
  actions
  applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed: true})
  )
);

export default store;
//export * from './userReducer'
export * from './actions'

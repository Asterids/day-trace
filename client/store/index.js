import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggingMiddleware from 'redux-logger';
import userReducer from './userReducer';
// import actionReducer from './actionReducer';


const store = createStore(
  userReducer,
  // actionReducer,
  applyMiddleware(
    thunkMiddleware,
    loggingMiddleware
  )
);

export default store;
export * from './userReducer'
// export * from './actionReducer'

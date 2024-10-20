import { applyMiddleware, createStore } from 'redux'
import { combineReducer } from './combineReducer'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'



const userInfoFromStorage = localStorage.getItem('token') ? localStorage.getItem('token') : null



const initialState = {
  
     userLogin: { token: userInfoFromStorage } 
 
}


const middleware = [thunk]

/*
const store = createStore(combineReducer, initialState,
composeWithDevTools(applyMiddleware(...middleware),
))
*/
const store = createStore(combineReducer, initialState,
    applyMiddleware(...middleware))
    /*
*/ 

export default store
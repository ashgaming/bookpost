import { applyMiddleware, createStore } from 'redux'
import { combineReducer } from './combineReducer'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'



const userInfoFromStorage = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null



const initialState = {
    /* cart: {
         cartItems: cartItemsFromStorage,
         shippingAddress: shippingAddressFromStorage,
         paymentMethod: paymentMethodFromStorage,
     },*/
     userLogin: { token: userInfoFromStorage } 
}


const middleware = [thunk]

const store = createStore(combineReducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware),
    ))



/*
const store = createStore(combineReducer, initialState,
applyMiddleware(...middleware))
 
*/

export default store
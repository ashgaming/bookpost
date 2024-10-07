import { combineReducers } from '@reduxjs/toolkit'
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
} from './Reducer/UserReducer'

export const combineReducer = combineReducers( {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
})
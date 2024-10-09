import axios from 'axios'
import { backend } from '../../Connection/conn'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_ERROR,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_ERROR,
    USER_DETAILS_RESET
} from '../Constant/UserConstant'

const config = {
    headers: {
        'Content-type': 'application/json'
    }
}

export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })

        const fdata = {
            "username": email,
            "password": password,

        }
        const { data } = await axios.post(`${backend}/api/login/`, fdata, config)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('token', JSON.stringify(data.token))

    }
    catch (err) {
        dispatch({
            type: USER_LOGIN_ERROR,
            payload: err
        })
    }
}

export const registerUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })

        const fdata = {
            "username": email,
            "password": password,

        }
        const { data } = await axios.post(`${backend}/api/login/`, fdata, config)
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('token', JSON.stringify(data.token))

    }
    catch (err) {
        dispatch({
            type: USER_REGISTER_ERROR,
            payload: err
        })
    }
}

export const verifyUser = (toke) => async (dispatch,getState) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST })

    //    const {
    //        userLogin: { token },
     //       } = getState()

        const { data } = await axios.get(`${backend}/api/user/details/${toke}`, config)
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: USER_DETAILS_ERROR,
            payload: err
        })
    }
}

export const logoutUser =()=> (dispatch) =>{
    localStorage.removeItem('token');
    dispatch({type:USER_LOGOUT})
    dispatch({type:USER_DETAILS_RESET})
}
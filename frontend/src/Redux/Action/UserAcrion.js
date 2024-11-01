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



export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })

        const fdata = {
            "username": email,
            "password": password,

        }

        const config = {
            headers: {
                'Content-type': 'application/json'
            },
            withCredentials: false,
        }


        const { data } = await axios.post(`${backend}/api/login/`, fdata, config)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })


        localStorage.setItem('token', data.token)
        localStorage.setItem('access', JSON.stringify(data.access))

    }
    catch (err) {

        let errorMessage;

        if (!err.response) {
            // No response received - likely a network error
            errorMessage = 'Network error: Unable to connect. Please check your internet connection.';
        } else if (err.response.status === 401) {
            // Unauthorized error
            errorMessage = 'Invalid email or password. Please try again.';
        } else {
            // Other errors
            errorMessage = 'An error occurred. Please try again.';
        }

        dispatch({
            type: USER_LOGIN_ERROR,
            payload: errorMessage,
        });
    }
}

export const registerUser = (fdata) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })



        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(`${backend}/api/register/`, fdata, config)
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

export const verifyUser = (token) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST })

        if (sessionStorage.getItem('user')) {
            dispatch({
                type: USER_DETAILS_SUCCESS,
                payload: JSON.parse(sessionStorage.getItem('user'))
            })
        } else {
            const config = {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await axios.get(`${backend}/api/user/details/${token}`, config)

            dispatch({
                type: USER_DETAILS_SUCCESS,
                payload: data
            })

            sessionStorage.setItem('user', JSON.stringify(data))

        }



    }
    catch (err) {
        dispatch({
            type: USER_DETAILS_ERROR,
            payload: err
        })
    }
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('token');
    sessionStorage.clear('user')
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })
}
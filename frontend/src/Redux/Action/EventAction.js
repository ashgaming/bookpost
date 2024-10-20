import axios from 'axios'
import {
    GET_LATEST_EVENT_REQUEST,
    GET_LATEST_EVENT_SUCCESS,
    GET_LATEST_EVENT_ERROR,
    GET_LATEST_EVENT_RESET,

    GET_UPCOMING_EVENT_REQUEST,
    GET_UPCOMING_EVENT_SUCCESS,
    GET_UPCOMING_EVENT_ERROR,
    GET_UPCOMING_EVENT_RESET,

    CREATE_UPCOMING_EVENT_REQUEST,
    CREATE_UPCOMING_EVENT_SUCCESS,
    CREATE_UPCOMING_EVENT_ERROR,
    CREATE_UPCOMING_EVENT_RESET,

    DELETE_UPCOMING_EVENT_REQUEST,
    DELETE_UPCOMING_EVENT_SUCCESS,
    DELETE_UPCOMING_EVENT_ERROR,
    DELETE_UPCOMING_EVENT_RESET,

    UPDATE_UPCOMING_EVENT_REQUEST,
    UPDATE_UPCOMING_EVENT_SUCCESS,
    UPDATE_UPCOMING_EVENT_ERROR,
    UPDATE_UPCOMING_EVENT_RESET,

    GET_ANOUCEMENT_REQUEST,
    GET_ANOUCEMENT_SUCCESS,
    GET_ANOUCEMENT_ERROR,
    GET_ANOUCEMENT_RESET,

    DELETE_ANOUCEMENT_REQUEST,
    DELETE_ANOUCEMENT_SUCCESS,
    DELETE_ANOUCEMENT_ERROR,
    DELETE_ANOUCEMENT_RESET,

    UPDATE_ANOUCEMENT_REQUEST,
    UPDATE_ANOUCEMENT_SUCCESS,
    UPDATE_ANOUCEMENT_ERROR,
    UPDATE_ANOUCEMENT_RESET,

    CREATE_ANOUCEMENT_REQUEST,
    CREATE_ANOUCEMENT_SUCCESS,
    CREATE_ANOUCEMENT_ERROR,
    CREATE_ANOUCEMENT_RESET,


} from '../Constant/EventConstant'
import { backend}  from '../../Connection/conn'
const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

const Authconfig = {
    headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
}

/*const config = {
    headers: {
        'Content-type': 'application/json',
    }
}*/

export const getLatestEvent = () => async (dispatch) => {
    try {
        dispatch({ type: GET_LATEST_EVENT_REQUEST })

        const { data } = await axios.get(`${backend}/event/list/latest`, Authconfig)

        dispatch({
            type: GET_LATEST_EVENT_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: GET_LATEST_EVENT_ERROR,
            payload: err
        })
    }
}

export const resetGetLatestEvent = () => async (dispatch) => {
        dispatch({ type: GET_LATEST_EVENT_RESET })
}

export const getUpcomingEvent = (fdata) => async (dispatch) => {
    try {
        dispatch({ type: GET_UPCOMING_EVENT_REQUEST })

        const { data } = await axios.post(`${backend}/api/story/create/`, fdata, Authconfig)

        dispatch({
            type: GET_UPCOMING_EVENT_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: GET_UPCOMING_EVENT_ERROR,
            payload: err
        })
    }
}

export const resetGetUpcomingEvent = () => async (dispatch) => {
        dispatch({ type: GET_UPCOMING_EVENT_RESET })
}

export const createUpcomingEvent = (fdata) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_UPCOMING_EVENT_REQUEST })

        const { data } = await axios.post(`${backend}/api/story/create/`, fdata, Authconfig)

        dispatch({
            type: CREATE_UPCOMING_EVENT_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: CREATE_UPCOMING_EVENT_ERROR,
            payload: err
        })
    }
}

export const resetCreateUpcomingEvent = () => async (dispatch) => {
        dispatch({ type: CREATE_UPCOMING_EVENT_RESET })
}

export const updateUpcomingEvent = (fdata) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_UPCOMING_EVENT_REQUEST })

        const { data } = await axios.post(`${backend}/api/story/create/`, fdata, Authconfig)

        dispatch({
            type: UPDATE_UPCOMING_EVENT_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: UPDATE_UPCOMING_EVENT_ERROR,
            payload: err
        })
    }
}

export const resetUpdateUpcomingEvent = () => async (dispatch) => {
        dispatch({ type: UPDATE_UPCOMING_EVENT_RESET })
}

export const deleteUpcomingEvent = (fdata) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_UPCOMING_EVENT_REQUEST })

        const { data } = await axios.post(`${backend}/api/story/create/`, fdata, Authconfig)

        dispatch({
            type: DELETE_UPCOMING_EVENT_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: DELETE_UPCOMING_EVENT_ERROR,
            payload: err
        })
    }
}

export const resetDeleteUpcomingEvent = () => async (dispatch) => {
        dispatch({ type: DELETE_UPCOMING_EVENT_RESET })
}


//--------------------------------------------------


export const getAnocement = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ANOUCEMENT_REQUEST })

        const { data } = await axios.post(`${backend}/event/list/anoucement`, Authconfig)

        dispatch({
            type: GET_ANOUCEMENT_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: GET_ANOUCEMENT_ERROR,
            payload: err
        })
    }
}

export const resetGetAnoucement = () => async (dispatch) => {
        dispatch({ type: GET_ANOUCEMENT_RESET })
}

export const createAnoucement = (fdata) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_ANOUCEMENT_REQUEST })

        const { data } = await axios.post(`${backend}/api/story/create/`, fdata, Authconfig)

        dispatch({
            type: CREATE_ANOUCEMENT_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: CREATE_ANOUCEMENT_ERROR,
            payload: err
        })
    }
}

export const resetCreateAnoucement = () => async (dispatch) => {
        dispatch({ type: CREATE_ANOUCEMENT_RESET })
}

export const updateAnoucement = (fdata) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_ANOUCEMENT_REQUEST })

        const { data } = await axios.post(`${backend}/api/story/create/`, fdata, Authconfig)

        dispatch({
            type: UPDATE_ANOUCEMENT_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: UPDATE_ANOUCEMENT_ERROR,
            payload: err
        })
    }
}

export const resetUpdateAnoucement = () => async (dispatch) => {
        dispatch({ type: UPDATE_ANOUCEMENT_RESET })
}

export const deleteAnoucement = (fdata) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_ANOUCEMENT_REQUEST })

        const { data } = await axios.post(`${backend}/api/story/create/`, fdata, Authconfig)

        dispatch({
            type: DELETE_ANOUCEMENT_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: DELETE_ANOUCEMENT_ERROR,
            payload: err
        })
    }
}

export const resetDeleteAnoucement = () => async (dispatch) => {
        dispatch({ type: DELETE_ANOUCEMENT_RESET })
}
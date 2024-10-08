import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_ERROR,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_ERROR,
    USER_DETAILS_RESET
} from '../Constant/UserConstant'

export const userLoginReducer = ( state = {
    loading: false,
},action ) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            break;

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                userInfo: action.payload,
            }
            break;

        case USER_LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
            break;

        default:
            return {}
            break;
    }
}

export const userRegisterReducer = (  state = {
    loading: false,
} ,action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            break;

        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                userInfo: action.payload.data,
            }
            break;

        case USER_REGISTER_ERROR:
            return {
                ...state,
                loading: true,
                error: action.payload.error,
            }
            break;

        default:
            return {}
            break;
    }
}

export const userDetailsReducer = (  state = {
    loading: false,
} ,action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            break;

        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                userInfo: action.payload.data,
            }
            break;

        case USER_DETAILS_ERROR:
            return {
                ...state,
                loading: true,
                error: action.payload.error,
            }
            break;

        case USER_DETAILS_RESET:
            return {}
            break;

        default:
            return {}
            break;
    }
}
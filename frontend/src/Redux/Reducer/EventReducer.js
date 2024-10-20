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

export const getLatestEventReducer = (state = {
    loading: false,events:[],
}, action) => {
    switch (action.type) {
        case GET_LATEST_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            


        case GET_LATEST_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success:true,
                events: action.payload,
            }


        case GET_LATEST_EVENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }


        case GET_LATEST_EVENT_RESET:
            return {
                loading: false,
            }


        default:
            return { ...state }

    }
}

export const getUpcomingEventReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case GET_UPCOMING_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            


        case GET_UPCOMING_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success:true,
                events: action.payload,
            }


        case GET_UPCOMING_EVENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }


        case GET_UPCOMING_EVENT_RESET:
            return {
                loading: false,
            }


        default:
            return { ...state }

    }
}

export const createUpcomingEventReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case CREATE_UPCOMING_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            


        case CREATE_UPCOMING_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success:true,
                events: action.payload,
            }


        case CREATE_UPCOMING_EVENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }


        case CREATE_UPCOMING_EVENT_RESET:
            return {
                loading: false,
            }


        default:
            return { ...state }

    }
}

export const updateUpcomingEventReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case UPDATE_UPCOMING_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            


        case UPDATE_UPCOMING_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success:true,
                events: action.payload,
            }


        case UPDATE_UPCOMING_EVENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }


        case UPDATE_UPCOMING_EVENT_RESET:
            return {
                loading: false,
            }


        default:
            return { ...state }

    }
}

export const deleteUpcomingEventReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case DELETE_UPCOMING_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            


        case DELETE_UPCOMING_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success:true,
                events: action.payload,
            }


        case DELETE_UPCOMING_EVENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }


        case DELETE_UPCOMING_EVENT_RESET:
            return {
                loading: false,
            }


        default:
            return { ...state }

    }
}

export const getAnoucementReducer = (state = {
    loading: false,events:[],
}, action) => {
    switch (action.type) {
        case GET_ANOUCEMENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            


        case GET_ANOUCEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success:true,
                events: action.payload,
            }


        case GET_ANOUCEMENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }


        case GET_ANOUCEMENT_RESET:
            return {
                loading: false,
            }


        default:
            return { ...state }

    }
}

export const createAnoucementReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case CREATE_ANOUCEMENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            


        case CREATE_ANOUCEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success:true,
                events: action.payload,
            }


        case CREATE_ANOUCEMENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }


        case CREATE_ANOUCEMENT_RESET:
            return {
                loading: false,
            }


        default:
            return { ...state }

    }
}

export const updateAnoucementReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case UPDATE_ANOUCEMENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            


        case UPDATE_ANOUCEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success:true,
                events: action.payload,
            }


        case UPDATE_ANOUCEMENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }


        case UPDATE_ANOUCEMENT_RESET:
            return {
                loading: false,
            }


        default:
            return { ...state }

    }
}

export const deleteAnoucementReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case DELETE_ANOUCEMENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            


        case DELETE_ANOUCEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success:true,
                events: action.payload,
            }


        case DELETE_ANOUCEMENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }


        case DELETE_ANOUCEMENT_RESET:
            return {
                loading: false,
            }


        default:
            return { ...state }

    }
}


import {
    CREATE_CONTACT_US_REQUEST,
    CREATE_CONTACT_US_SUCCESS,
    CREATE_CONTACT_US_ERROR,
    CREATE_CONTACT_US_RESET
} from "../Constant/ContactUsConstant"

export const contactUsReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case CREATE_CONTACT_US_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }

        case CREATE_CONTACT_US_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                form: action.payload,
            }

        case CREATE_CONTACT_US_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case CREATE_CONTACT_US_RESET:
            return {
                loading: false,
            }

        default:
            return { ...state }

    }
}
import {
    CREATE_CONTACT_US_REQUEST,
    CREATE_CONTACT_US_SUCCESS,
    CREATE_CONTACT_US_ERROR
} from "../Constant/ContactUsConstant"

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

const Authconfig = {
    headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
}

export const contactUs = (fdata) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_CONTACT_US_REQUEST })

        const { data } = await axios.post(`${backend}/api/contactUs/`, fdata, Authconfig)

        dispatch({
            type: CREATE_CONTACT_US_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: CREATE_CONTACT_US_ERROR,
            payload: err
        })
    }
}
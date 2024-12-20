import axios from 'axios'
import {
    CREATE_STORY_REQUEST,
    CREATE_STORY_SUCCESS,
    CREATE_STORY_ERROR,

    CREATE_CHAPTER_REQUEST,
    CREATE_CHAPTER_SUCCESS,
    CREATE_CHAPTER_ERROR,

    LIST_STORY_REQUEST,
    LIST_STORY_SUCCESS,
    LIST_STORY_ERROR,

    READ_CHAPTER_REQUEST,
    READ_CHAPTER_SUCCESS,
    READ_CHAPTER_ERROR,

    READ_STORY_DETAILS_REQUEST,
    READ_STORY_DETAILS_SUCCESS,
    READ_STORY_DETAILS_ERROR,

    LIST_CHAPTER_REQUEST,
    LIST_CHAPTER_SUCCESS,
    LIST_CHAPTER_ERROR,

    UPDATE_CHAPTER_REQUEST,
    UPDATE_CHAPTER_SUCCESS,
    UPDATE_CHAPTER_ERROR,

    LIST_ADMIN_STORY_REQUEST,
    LIST_ADMIN_STORY_SUCCESS,
    LIST_ADMIN_STORY_ERROR,

    LIST_ADMIN_CHAPTER_REQUEST,
    LIST_ADMIN_CHAPTER_SUCCESS,
    LIST_ADMIN_CHAPTER_ERROR,

    UPDATE_STORY_REQUEST,
    UPDATE_STORY_SUCCESS,
    UPDATE_STORY_ERROR,

    CREATE_COMMENT_REQUEST,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_ERROR,

    GET_COMMENT_REQUEST,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_ERROR,



} from '../Constant/StoryConstant'
import { backend } from '../../Connection/conn'

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

export const Authconfig = {
    headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
}

export const config = {
    headers: {
        'Content-type': 'application/json',
    }
}


export const createStory = (fdata) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_STORY_REQUEST })

        const { data } = await axios.post(`${backend}/api/story/create/`, fdata, Authconfig)

        dispatch({
            type: CREATE_STORY_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: CREATE_STORY_ERROR,
            payload: err
        })
    }
}

export const listStory = () => async (dispatch) => {
    try {
        dispatch({ type: LIST_STORY_REQUEST })
        const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
        const Authconfig = {
            headers: {
                'Content-type': 'application/json',
                ...(token && { Authorization: `Bearer ${token}` }), 
            },
            withCredentials: true,
        }

        const { data } = await axios.get(`${backend}/api/story/list`, Authconfig)
        dispatch({
            type: LIST_STORY_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: LIST_STORY_ERROR,
            payload: err
        })
    }
}

export const listStoryDetails = (storyid) => async (dispatch) => {
    try {
        dispatch({ type: READ_STORY_DETAILS_REQUEST })

        const { data } = await axios.get(`${backend}/api/story/${storyid}`, config)
        
        dispatch({
            type: READ_STORY_DETAILS_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: READ_STORY_DETAILS_ERROR,
            payload: err
        })
    }
}

export const createChapter = (storyid, fdata) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_CHAPTER_REQUEST })

        const { data } = await axios.post(`${backend}/api/story/${storyid}/chapter/create/`, fdata, Authconfig)
        dispatch({
            type: CREATE_CHAPTER_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: CREATE_CHAPTER_ERROR,
            payload: err
        })
    }
}

export const listChapter = (storyid) => async (dispatch) => {
    try {
        dispatch({ type: LIST_CHAPTER_REQUEST })

        const { data } = await axios.get(`${backend}/api/story/${storyid}/chapter/list`, config)
        dispatch({
            type: LIST_CHAPTER_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: LIST_CHAPTER_ERROR,
            payload: err
        })
    }
}

export const readChapter = (storyid, chapterid) => async (dispatch) => {
    try {
        dispatch({ type: READ_CHAPTER_REQUEST })

        const { data } = await axios.get(`${backend}/api/story/${storyid}/chapter/${chapterid}`, config)
        dispatch({
            type: READ_CHAPTER_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: READ_CHAPTER_ERROR,
            payload: err
        })
    }
}


export const listAdminStory = (page=1) => async (dispatch) => {
    try {
        dispatch({ type: LIST_ADMIN_STORY_REQUEST })

        const { data } = await axios.get(`${backend}/api/admin/story/list${page ? `?page=${page}` : ''}`, Authconfig)
        dispatch({
            type: LIST_ADMIN_STORY_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: LIST_ADMIN_STORY_ERROR,
            payload: err
        })
    }
}

export const listAdminChapter = (id) => async (dispatch) => {
    try {
        dispatch({ type: LIST_ADMIN_CHAPTER_REQUEST })

        const { data } = await axios.get(`${backend}/api/admin/story/${id}/chapter/list`, Authconfig)
        dispatch({
            type: LIST_ADMIN_CHAPTER_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: LIST_ADMIN_CHAPTER_ERROR,
            payload: err
        })
    }
}

export const updateChapter = (storyid, chapterid, fdata) => async (dispatch) => {
    try {
        console.log(fdata)
        dispatch({ type: UPDATE_CHAPTER_REQUEST })

        const { data } = await axios.put(`${backend}/api/story/${storyid}/chapter/${chapterid}/update`, fdata, Authconfig)
        dispatch({
            type: UPDATE_CHAPTER_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: UPDATE_CHAPTER_ERROR,
            payload: err
        })
    }
}

export const updateStory = (storyid, fdata) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_STORY_REQUEST })

        const { data } = await axios.put(`${backend}/api/story/${storyid}/update`, fdata, Authconfig)
        dispatch({
            type: UPDATE_STORY_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: UPDATE_STORY_ERROR,
            payload: err
        })
    }
}


export const createComment = (fdata) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_COMMENT_REQUEST })

        const { data } = await axios.post(`${backend}/api/story/${fdata.storyid}/comment/create`, fdata, Authconfig)
        dispatch({
            type: CREATE_COMMENT_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: CREATE_COMMENT_ERROR,
            payload: err
        })
    }
}

export const listComment = (storyid) => async (dispatch) => {
    try {
        dispatch({ type: GET_COMMENT_REQUEST })

        const { data } = await axios.get(`${backend}/api/story/${storyid}/comment/list`, config)
        dispatch({
            type: GET_COMMENT_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type: GET_COMMENT_ERROR,
            payload: err
        })
    }
}
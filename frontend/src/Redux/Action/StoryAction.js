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

    READ_STORY_DETAILS_REQUEST ,
    READ_STORY_DETAILS_SUCCESS ,
    READ_STORY_DETAILS_ERROR ,

    LIST_CHAPTER_REQUEST,
    LIST_CHAPTER_SUCCESS,
    LIST_CHAPTER_ERROR,



} from '../Constant/StoryConstant'

const config = {
    headers: {
        'Content-type': 'application/json'
    }
}

export const createStory = (fdata) => async (dispatch) => {

    console.log('fdata',fdata)
    try {
        dispatch({ type: CREATE_STORY_REQUEST })

        const { data } = await axios.post(`http://127.0.0.1:8000/api/story/create`, fdata, config)

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

        const { data } = await axios.get(`http://127.0.0.1:8000/api/story/list`, config)
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

        const { data } = await axios.get(`http://127.0.0.1:8000/api/story/${storyid}`, config)
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

export const createChapter = (storyid,fdata) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_CHAPTER_REQUEST })

        const { data } = await axios.post(`http://127.0.0.1:8000/api/story/${storyid}/chapter/create/`, fdata, config)
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

        const { data } = await axios.get(`http://127.0.0.1:8000/api/story/${storyid}/chapter/list`,  config)
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

export const readChapter = (storyid,chapterid) => async (dispatch) => {
    try {
        dispatch({ type: READ_CHAPTER_REQUEST })

        const { data } = await axios.get(`http://127.0.0.1:8000/api/story/${storyid}/chapter/${chapterid}`, config)
        dispatch({
            type: READ_CHAPTER_SUCCESS,
            payload: data
        })

    }
    catch (err) {
        dispatch({
            type:  READ_CHAPTER_ERROR,
            payload: err
        })
    }
}
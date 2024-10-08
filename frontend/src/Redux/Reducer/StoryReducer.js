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

    LIST_CHAPTER_REQUEST,
    LIST_CHAPTER_SUCCESS,
    LIST_CHAPTER_ERROR,

    READ_CHAPTER_REQUEST,
    READ_CHAPTER_SUCCESS,
    READ_CHAPTER_ERROR,

    READ_STORY_DETAILS_REQUEST,
    READ_STORY_DETAILS_SUCCESS,
    READ_STORY_DETAILS_ERROR,


} from '../Constant/StoryConstant'

export const createStoryReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case CREATE_STORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            break;

        case CREATE_STORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
            }
            break;

        case CREATE_STORY_ERROR:
            return {
                ...state,
                loading: true,
                error: action.payload,
            }
            break;

        default:
            return {}
            break;
    }
}

export const listStoryReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case LIST_STORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            break;

        case LIST_STORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                Books: action.payload,
            }
            break;

        case LIST_STORY_ERROR:
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

export const readStoryDetailsReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case READ_STORY_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }

        case READ_STORY_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                book: action.payload,
            }

        case READ_STORY_DETAILS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }


        default:
            return {
                ...state,
            }

    }
}

export const createChapterReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case CREATE_CHAPTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            break;

        case CREATE_CHAPTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                userInfo: action.payload.data,
            }
            break;

        case CREATE_CHAPTER_ERROR:
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

export const readChapterReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case READ_CHAPTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            break;

        case READ_CHAPTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                chapter: action.payload.chapter,
                count:action.payload.total_chapters,
            }

        case READ_CHAPTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return {...state}
    }
}

export const listChapterReducer = (state = {
    loading: false,
    chapters: [],
}, action) => {
    switch (action.type) {
        case LIST_CHAPTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                chapters: [],
            }

        case LIST_CHAPTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                chapters: action.payload,
            }

        case LIST_CHAPTER_ERROR:
            return {
                ...state,
                loading: true,
                chapters: [],
                error: action.payload,
            }

        default:
            return {}
            break;
    }
}
import {
    CREATE_STORY_REQUEST,
    CREATE_STORY_SUCCESS,
    CREATE_STORY_ERROR,

    CREATE_CHAPTER_REQUEST,
    CREATE_CHAPTER_SUCCESS,
    CREATE_CHAPTER_ERROR,
    CREATE_CHAPTER_RESET,

    LIST_STORY_REQUEST,
    LIST_STORY_SUCCESS,
    LIST_STORY_ERROR,

    LIST_CHAPTER_REQUEST,
    LIST_CHAPTER_SUCCESS,
    LIST_CHAPTER_ERROR,

    UPDATE_CHAPTER_REQUEST,
    UPDATE_CHAPTER_SUCCESS,
    UPDATE_CHAPTER_ERROR,
    UPDATE_CHAPTER_RESET,

    READ_CHAPTER_REQUEST,
    READ_CHAPTER_SUCCESS,
    READ_CHAPTER_ERROR,
    READ_CHAPTER_RESET,

    READ_STORY_DETAILS_REQUEST,
    READ_STORY_DETAILS_SUCCESS,
    READ_STORY_DETAILS_ERROR,

    LIST_ADMIN_STORY_REQUEST,
    LIST_ADMIN_STORY_SUCCESS,
    LIST_ADMIN_STORY_ERROR,

    LIST_ADMIN_CHAPTER_REQUEST,
    LIST_ADMIN_CHAPTER_SUCCESS,
    LIST_ADMIN_CHAPTER_ERROR,
    UPDATE_STORY_REQUEST,
    UPDATE_STORY_SUCCESS,
    UPDATE_STORY_ERROR,
    UPDATE_STORY_RESET,
    CREATE_STORY_RESET,


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

        case CREATE_STORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
            }
            

        case CREATE_STORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case CREATE_STORY_RESET:
            return{
                ...state,
                loading:false,
                error:null,
                success:false,
            }
            

        default:
            return {}
            
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
            

        case LIST_STORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                Books: action.payload,
            }
            

        case LIST_STORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
            

        default:
            return state
            
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
            return state           

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
            

        case CREATE_CHAPTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                chapter: action.payload,
                success:true,
            }
            

        case CREATE_CHAPTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
            

        case CREATE_CHAPTER_RESET:
            return {
                ...state,
                loading: false,
                success:false,
                error: null,
                chapter:null
            }

        default:
            return {...state}
            
    }
}

export const updateChapterReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case UPDATE_CHAPTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            

        case UPDATE_CHAPTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                chapter: action.payload,
                success:true,
            }
            

        case UPDATE_CHAPTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
            

        case UPDATE_CHAPTER_RESET:
            return {
                ...state,
                loading: false,
                success:false,
                error: null,
                chapter:null
            }

        default:
            return {...state,
                loading: false,
                success:false,
            }
          
    }
}

export const readChapterReducer = (state = {
    loading: false,
    chapter:[]
}, action) => {
    switch (action.type) {
        case READ_CHAPTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            

        case READ_CHAPTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                chapter: action.payload.chapter,
                count: action.payload.total_chapters,
            }

        case READ_CHAPTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case READ_CHAPTER_RESET:
            return{
                ...state,
                loading:false,
                chapter:[]
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
                loading: false,
                chapters: [],
                error: action.payload,
            }

        default:
            return {}
            
    }
}


export const listAdminStoryReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case LIST_ADMIN_STORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }


        case LIST_ADMIN_STORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                story: action.payload.Books,
                page: action.payload.page,
                pages: action.payload.pages,
            }


        case LIST_ADMIN_STORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }


        default:
            return {state}

    }
}

export const listAdminChapterReducer = (state = {
    loading: false,
    chapters: [],
}, action) => {
    switch (action.type) {
        case LIST_ADMIN_CHAPTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                chapters: [],
            }

        case LIST_ADMIN_CHAPTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                chapters: action.payload.chapters,
                page:action.payload.page,
                pages:action.payload.pages
            }

        case LIST_ADMIN_CHAPTER_ERROR:
            return {
                ...state,
                loading: false,
                chapters: [],
                error: action.payload,
            }

        default:
            return {...state}
          
    }
}

export const readAdminChapterReducer = (state = {
    loading: false,
    chapter:[]
}, action) => {
    switch (action.type) {
        case READ_CHAPTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            

        case READ_CHAPTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                chapter: action.payload.chapter,
                count: action.payload.total_chapters,
            }

        case READ_CHAPTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state
    }
}

export const updateStoryReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case UPDATE_STORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
            

        case UPDATE_STORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                book: action.payload,
                success:true,
            }
            

        case UPDATE_STORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
            

        case UPDATE_STORY_RESET:
            return {
                ...state,
                loading: true,
                success:false,
                error: null,
                book:null
            }

        default:
            return {...state,
                loading: false,
                success:false,
            }
          
    }
}
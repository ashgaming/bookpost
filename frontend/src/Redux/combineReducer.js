import { combineReducers } from '@reduxjs/toolkit'
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
} from './Reducer/UserReducer'

import {
    createStoryReducer,
    listStoryReducer,
    readStoryDetailsReducer,
    readChapterReducer,

    createChapterReducer,
    listChapterReducer,
    listAdminStoryReducer,
    listAdminChapterReducer,
    updateChapterReducer,
    updateStoryReducer,


} from './Reducer/StoryReducer'

export const combineReducer = combineReducers( {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,

    createStory: createStoryReducer,
    listStory: listStoryReducer,
    readStory : readStoryDetailsReducer,

    createChapter : createChapterReducer,
    listChapter : listChapterReducer,
    readChapter : readChapterReducer,

    listAdminStory : listAdminStoryReducer,
    listAdminChapter : listAdminChapterReducer,

    updateChapter:updateChapterReducer,
    updateStory:updateStoryReducer,
})
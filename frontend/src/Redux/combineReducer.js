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
    createCommentReducer,
    listCommentReducer,


} from './Reducer/StoryReducer'
import { getAnoucementReducer, getLatestEventReducer ,createAnoucementReducer, } from './Reducer/EventReducer'
import { contactUsReducer } from './Reducer/ContactUsReducer'

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

    createComment:createCommentReducer,
    listComments:listCommentReducer,

    listAdminStory : listAdminStoryReducer,
    listAdminChapter : listAdminChapterReducer,

    updateChapter:updateChapterReducer,
    updateStory:updateStoryReducer,


    getLatestEvent:getLatestEventReducer,
    getAnnoucements:getAnoucementReducer,
    createAnoucement:createAnoucementReducer,


    contactUs:contactUsReducer
})
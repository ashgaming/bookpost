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
import { getAnoucementReducer, getLatestEventReducer } from './Reducer/EventReducer'
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

    listAdminStory : listAdminStoryReducer,
    listAdminChapter : listAdminChapterReducer,

    updateChapter:updateChapterReducer,
    updateStory:updateStoryReducer,


    getLatestEvent:getLatestEventReducer,
    getAnnoucements:getAnoucementReducer,


    contactUs:contactUsReducer
})
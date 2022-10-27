import { configureStore } from "@reduxjs/toolkit";

import searchTermReducer from './searchTermSlice';
import updateTimeReducer from './updateTimeSlice';
import postsReducer from './postsSlice';

const store = configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        updateTime: updateTimeReducer,
        posts: postsReducer
    }
});

export const selectStore = store => store;

export default store;
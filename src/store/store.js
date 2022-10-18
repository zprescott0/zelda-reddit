import { configureStore } from "@reduxjs/toolkit";

import searchTermReducer from './searchTermSlice';
import updateTimeReducer from './updateTimeSlice';

const store = configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        updateTime: updateTimeReducer
    }
});

export const selectStore = store => store;

export default store;
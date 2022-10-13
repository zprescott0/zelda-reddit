import { configureStore } from "@reduxjs/toolkit";

import searchTermReducer from './searchTermSlice';

const store = configureStore({
    reducer: {
        searchTerm: searchTermReducer
    }
});

export const selectStore = store => store;

export default store;
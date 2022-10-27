/*
Every post should follow the following format:
id: {
    author: String,
    created: Date value,
    downs: Number,
    id: String,
    permalink: String,
    selftext: String,
    thumbnail: String,
    title: String,
    ups: Number
}
*/

import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {}
    },
    reducers: {
        loadState: (state, action) => {
            state.posts = action.payload;
        }
    }
});

export const selectPosts = state => state.posts;

export const { loadState } = postsSlice.actions;

export default postsSlice.reducer;
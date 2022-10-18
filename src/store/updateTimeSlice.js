import { createSlice } from "@reduxjs/toolkit";

const initialDate = new Date();

const updateTimeSlice = createSlice({
    name: 'updateTime',
    initialState: initialDate.toLocaleTimeString(),
    reducers: {
        setUpdateTime: (state, action) => {
            return action.payload;
        }
    }
});

export const selectUpdateTime = state => state.updateTime;

export const { setUpdateTime } = updateTimeSlice.actions;

export default updateTimeSlice.reducer;
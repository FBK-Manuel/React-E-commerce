import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const imageSlide = createSlice({
    name: 'imageSlice',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        }

    }
});

export const { add } = imageSlide.actions;
export default imageSlide.reducer;
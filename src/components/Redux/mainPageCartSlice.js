import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const mainPageCartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        added(state, action) {
            state.push(action.payload)
        },

        removed(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
    }
});

export const { added, removed } = mainPageCartSlice.actions;
export default mainPageCartSlice.reducer;


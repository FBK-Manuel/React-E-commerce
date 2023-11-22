import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    "users/loginUser",
    async (userCredential) => {
        const request = await axios.post('https://fakestoreapi.com/users');
        const response = await request.data.data;
        localStorage.setItem('users', JSON.stringify(response))
        return response;
    }
)

const initialState = {
    loading: false,
    user: null,
    error: null,
};


const UserSlice = createSlice({
    name: "user",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = false;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = true;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log(action.error.message);
                if (action.error.message === "Request failed with status code 401") {
                    state.error = "Access Denied! Invalid credentials";
                } else {
                    state.error = action.error.message;
                }
            })
    }
});

export default UserSlice.reducer;
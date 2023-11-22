// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import StatusPageCode from "../utils/statusPageCode";

// const initialState = {
//     data: [],
//     status: "idle"
// }



// const IndexPageSlice = createSlice({
//     name: 'indexPage',
//     initialState,
//     reducers: {},

//     extraReducers: (builder) => {
//         builder
//             .addCase(getIndexData.pending, (state, action) => {
//                 state.status = StatusPageCode.LOADING;
//             })
//             .addCase(getIndexData.fulfilled, (state, action) => {
//                 state.data = action.payload;
//                 state.status = StatusPageCode.IDLE;
//             })
//             .addCase(getIndexData.rejected, (state, action) => {
//                 state.error = action.error.message;
//                 state.status = StatusPageCode.ERROR;
//             })
//     }
// });

// export const { fetchData} = IndexPageSlice.actions;
// export default IndexPageSlice.reducer;

// export const getIndexData = createAsyncThunk('products/get', async () => {
//     const data = await fetch('https://fakestoreapi.com/products')
//     const result = await data.json();
//     return result;
// });

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusPageCode from "../utils/statusPageCode";


const initialState = {
    data: [],
    status: "idle"
}

const productSlices = createSlice({
    name: 'indexPage',
    initialState,
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getIndexData.pending, (state, action) => {
                state.status = StatusPageCode.LOADING;
            })
            .addCase(getIndexData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = StatusPageCode.IDLE;
            })
            .addCase(getIndexData.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = StatusPageCode.ERROR;
            })

    }


});

export const { fetchProducts } = productSlices.actions;
export default productSlices.reducer;

export const getIndexData = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json();
    const resultSlice = result.slice(0, 8);
    return resultSlice;
});



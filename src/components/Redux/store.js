import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import productSlices from "./indexPageSlice";
import mainPageCartSlice from "./mainPageCartSlice";
import imageSlide from "./imageSlideSlice";
// import userSlice from "./userSlice";




const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
        indexPage: productSlices,
        carts: mainPageCartSlice,
        imageSlide: imageSlide,
    }
});

export default store
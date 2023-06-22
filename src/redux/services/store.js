import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart";
// import { movieApi } from '@redux/services/movieApi';

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    }
})

console.log(store.getState());
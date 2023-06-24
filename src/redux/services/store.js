import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart";
import { movieApi } from "./movieApi";
import { reviewApi } from "./reviewApi";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        [movieApi.reducerPath]: movieApi.reducer,
        [reviewApi.reducerPath]: reviewApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware, reviewApi.middleware])
})

// console.log(store.getState());
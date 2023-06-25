import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart";
import { movieApi } from "./movieApi";
import { filmsReducer } from '../features/movies'
// import { reviewApi } from "./reviewApi";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        films: filmsReducer,
        [movieApi.reducerPath]: movieApi.reducer,
        // [reviewApi.reducerPath]: reviewApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware])
})

// console.log(store.getState());
import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    getFilters: (state, { payload }) => {
      // console.log(payload);
      state.activeName = payload.activeName
      state.activeGenre = payload.activeGenre
      state.activeCinema = payload.activeCinema
    },
  }
})

export const filterReducer = filterSlice.reducer
export const filterActions  = filterSlice.actions
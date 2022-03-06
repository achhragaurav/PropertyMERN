import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    pages: 0,
    totalPages : 0,
    success: false
}

export const listingsSlice = createSlice({
    name: "listings",
    initialState,
    reducers: {
         getData (state, action){
            state.data = action.payload.data,
            state.pages=action.payload.page,
            state.totalPages=action.payload.totalPages
        },
        loadingData(state, action){
            state.loading=action.payload
        }
    }
})

export const {
    getData,
    loadingData
} = listingsSlice.actions;
export default listingsSlice.reducer;
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
            state.data = action.payload.data
        }
    }
})

export const {
    getData
} = listingsSlice.actions;
export default listingsSlice.reducer;
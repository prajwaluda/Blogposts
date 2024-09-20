import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userId: "",
}

export const globalSlice=createSlice({
    name:"global",
    initialState,
})

export const {setMode}=globalSlice.actions;
export default globalSlice.reducer;
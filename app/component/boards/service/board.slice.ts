import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './board.init';
import { findAllBoards, findBoardById } from "./board.service";

const boardThunks = [findAllBoards]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handleFulfilled =  (state: any, {payload}: any) => {
    console.log('------------------ conclusion ---------------')
    state.array = payload
    console.log(state.array)
}
const handlePending = (state: any) => {
}

const handleRejected = (state: any) => {
}

export const boardslice = createSlice({
    name: "boards",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending, rejected} = status;
        builder
        .addCase(findAllBoards.fulfilled, (state: any, {payload}: any) => {state.array = payload })
        .addCase(findBoardById.fulfilled, (state: any, {payload}: any) => {state.json = payload } )
    }
})

export const getAllBoards = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.board.array))
    return state.board.array;
}

export const getBoardById = (state: any) => {
    
    return state.board.json;
}


export const {} = boardslice.actions

export default boardslice.reducer;
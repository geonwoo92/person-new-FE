import { createAsyncThunk } from "@reduxjs/toolkit";

import { findAllUsersAPI, findUserByIdAPI } from "./user.api";




export const findAllUsers: any = createAsyncThunk(
    'users/findAllUsers',
    async (page: number)=>{
        console.log('findAllUsers page : '+ page)
        const data:any = await  findAllUsersAPI(1);

        const {message, result}:any = data
        // console.log('----- API 를 사용한 경우 -----')
        // console.log('message : '+ message)
        // console.log(JSON.stringify(result))
        return data
    }
)

export const findUserById: any = createAsyncThunk(
    'users/findUserById',
    async (id: number)=>{
        
        const data:any = await  findUserByIdAPI(id);

        const {message, result}:any = data
    
        return data
    }
)
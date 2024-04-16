import { createAsyncThunk } from "@reduxjs/toolkit";
import { DeleteArticleByIdAPI, UpdateArticleByIdAPI, findAllArticlesAPI,findArticleByIdAPI } from "./article.api";


export const findAllArticles: any =createAsyncThunk('articles/findAllArticles',
async(page:number)=>{
    console.log('findAllArticles page:'+ page)
    
    const data:any = await findAllArticlesAPI(1);

        const {message, result}:any = data
        // console.log('----- API 를 사용한 경우 -----')
        // console.log('message : '+ message)
        // console.log(JSON.stringify(result))
        return data
}
)
export const findArticleById: any =createAsyncThunk('articles/findArticleById',
async(id:number)=>{

    const data:any = await findArticleByIdAPI(id);

        return data
}
)
export const DeleteArticleById: any =createAsyncThunk('articles/DeleteArticleById',
async(id:number, {rejectWithValue})=>  await DeleteArticleByIdAPI(id)
)
export const UpdateArticleById: any =createAsyncThunk('articles/UpdateArticleById',
async(id:number, {rejectWithValue})=>  await UpdateArticleByIdAPI(id)
)
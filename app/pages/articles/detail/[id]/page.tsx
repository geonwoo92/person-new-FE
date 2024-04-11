"use client"
import { IArticle } from "@/app/component/articles/model/article.model"
import { findArticleById } from "@/app/component/articles/service/article.service"
import { getArticleById } from "@/app/component/articles/service/article.slice"
import { Typography } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function ArticleDetailPage({params}:any){
    
    
    const dispatch = useDispatch()
    
    
    const article:IArticle = useSelector(getArticleById)


    
    useEffect(() => {
        dispatch(findArticleById(params.id))
      }, [])
   

   return(<>
    <h2>Article 상세페이지</h2>
    <span>ID</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}> {params.id} </Typography>
    <span>writerID</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{article.writerId} </Typography>
    <span>boardID</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}> {article.boardId} </Typography>
    <span>Title</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{article.title}  </Typography>
    <span>content</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{article.content}  </Typography>
    <span>등록일</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{article.regDate}  </Typography>
    <span>수정일</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}> {article.modDate} </Typography>
  
   
    </>)
}


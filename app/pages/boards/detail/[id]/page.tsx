"use client"
import { IBoard } from "@/app/component/boards/model/board.model"
import { findBoardById } from "@/app/component/boards/service/board.service"
import { getBoardById } from "@/app/component/boards/service/board.slice"
import { Typography } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function BoardDetailPage ({params}:any)  {

  const dispatch = useDispatch()
  const board:IBoard = useSelector(getBoardById)

  
  
  useEffect(() => {
      dispatch(findBoardById(params.id))
    }, [])
 


    return (<>
    <h2>Board 상세페이지</h2>
    <span>ID</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}> {params.id} </Typography>
    <span>boardType</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}> {board.boardType} </Typography>
    <span>등록일</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}> {board.regDate} </Typography>
    <span>수정일</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{board.modDate}  </Typography>
    
    </>)

}
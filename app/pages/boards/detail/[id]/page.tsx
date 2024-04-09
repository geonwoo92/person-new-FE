"use client"
import { Typography } from "@mui/material"
import { useEffect } from "react"

export default function BoardDetailPage (props:any)  {


    useEffect(() => {
        //dispatch(findBoardByid(props.params.id))
      }, [])



    return (<>
    게시판 상세
    <span>ID</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}> {props.params.id} </Typography>
    <span>boardType</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  </Typography>
    <span>등록일</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  </Typography>
    <span>수정일</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  </Typography>

    
    
    </>)

}
'use client'

import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input, Typography} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { IBoard } from "@/app/component/boards/model/board.model";
import { findBoardById } from "@/app/component/boards/service/board.service";
import { getBoardById } from "@/app/component/boards/service/board.slice";

// import React from "react";


export default function BoardDetailPage (params:any)  {
    const dispatch=useDispatch()
    const board:IBoard=useSelector(getBoardById)

    useEffect(() => {
        dispatch(findBoardById(params.id))
    }, [])

    return (<>
    
    게시판 상세
    <span>ID : </span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{params.id}</Typography>
    <span>게시판타입 : </span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}> {board.boardType}</Typography>
    <span>등록일 : </span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}> {board.regDate} </Typography>
    <span>수정일 : </span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{board.modDate} </Typography>
    
    
    </>)

}
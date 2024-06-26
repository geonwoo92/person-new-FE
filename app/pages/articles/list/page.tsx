'use client'

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { findAllArticles } from "@/app/component/articles/service/article.service";
import { getAllArticles } from "@/app/component/articles/service/article.slice";
import ArticleColumns from "@/app/component/articles/module/articles-columns";


const ArticlesPage: NextPage = ({data}:any) => {
  const dispatch = useDispatch()

  const allArticles: [] = useSelector(getAllArticles)

  if (allArticles !== undefined) {
      console.log('allArticles is not undefined')

      console.log('length is ' + allArticles.length)
      for (let i = 0; i < allArticles.length; i++) {
          console.log(JSON.stringify(allArticles[i]))
      }
  } else {
      console.log('allArticles is undefined')
  }

  useEffect(() => {
      dispatch(findAllArticles(1))
  }, [])

  return (<>
      <h2>개인페이지 Article</h2>
      <Box sx={{ height: 400, width: '100%' }}>
      {allArticles && <DataGrid
        rows={allArticles}
        columns={ArticleColumns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />}
    </Box>
  </>)
}

export default ArticlesPage
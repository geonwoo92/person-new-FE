'use client'
import axios from "axios"
import Link from "next/link"
import { useState } from "react"
import { NextPage } from "next"
import { PG } from "./component/common/enums/PG"
import AxiosConfig from "./component/common/configs/axios-config"
import { API } from "./component/common/enums/API"


const HomePage:NextPage = () => {
  const [name, setName] = useState('')
  const url = `${API.SERVER}/name`;
  const data = {name};

  const changeHandler = (e: any) => {
    setName(e.target.value)
  }

  const clickHandler = () => {
    alert("request name : " + name)
    axios.post(url, data, AxiosConfig())
    .then(res=>{
      alert("response name : " + res.data.name)
    })
  }

  return <div className='text-center'>
      <b>Welcome To Next.js!!</b>
      {/* <h3>Insert your name</h3>
      <input type="text" onChange={changeHandler} />
      <button onClick={clickHandler}>send</button><br /> */}
      {/* <Link href={`${PG.USER}/login`}>로그인</Link><br />
      <Link href={`${PG.USER}/join`}>회원가입</Link><br />
      <Link href={`${PG.USER}/users`}>유저 정보</Link><br />
      <Link href={`${PG.DEMO}/mui-demo`}>mui 데모</Link><br />
      <Link href={`${PG.DEMO}/counter-demo`}>counter 데모</Link><br />
      <Link href={`${PG.DEMO}/redux-counter`}>counter-redux</Link><br />
      <Link href={`${PG.BOARD}/articles`}>전체게시글</Link><br /> */}
      
  </div>
}

export default HomePage
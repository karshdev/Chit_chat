import React from 'react'

import styled from 'styled-components'
import Login from './pages/Login'
import { Routes, Route,Navigate } from "react-router-dom"
import ChatPage from './pages/ChatPage'
import Register from './pages/Register'
const Container=styled.div`

`
function App() {
  return (
   <Routes>
     <Route exact path='/' element={<Login/>} />
     <Route path='/chats' element={<ChatPage/>} />
     <Route path='/register' element={<Register/>} />
   </Routes>
  )
}

export default App


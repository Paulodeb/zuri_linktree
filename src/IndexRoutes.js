import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Linktree from './Linktree'

function IndexRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Linktree/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default IndexRoutes
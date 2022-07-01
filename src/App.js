import React from 'react'
import './index.css'
import Home from './routes/Home'
import About from './routes/About'
import Project from './routes/Project'
import Contact from './routes/Contact'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </React.Fragment>
  )
}

export default App
import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Create from './pages/Create'
import Save from './pages/Save'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Redirect to Login if not logged in */}
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register /> } />
        <Route path="/home" element={<Home /> } />
        <Route path="/create" element={<Create /> } />
        <Route path="/save" element={<Save /> } />
      </Routes>
    </Router>
   
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from  'react-router-dom'
import Home from './Pages/Home'
import HorinDorovA from './Pages/2024A'
import EYSH from './Pages/EYSH'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/EYSH" element={<EYSH/>} />
        <Route path="/2024-A" element={<HorinDorovA/>} />
      </Routes>
    </Router>
  )
}

export default App

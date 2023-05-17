import React, { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Curriculo from './components/Curriculo/Curriculo'
import Portfolio from './components/Portfolio/Portfolio'
import Contato from './components/Contato/Contato'
import Navbar from './components/Navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>      
      

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Curriculo />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contato" element={<Contato />} />
          <Route index element={<Curriculo curriculo={Curriculo} />} />
        </Routes>
      </BrowserRouter>
      
      <Footer></Footer>

    </>
  )
}

export default App

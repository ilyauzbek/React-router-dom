import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Aboute from './pages/Aboute'

const App = () => {
  return (
    <>
    <Home/>
    <Header/>


    <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/Aboute' element={<Aboute/>}/>

    </Routes>


    <Footer/>

    </>
  )
}

export default App
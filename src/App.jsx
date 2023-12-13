import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Errorpage from './pages/error/Errorpage'

function App() {
  

  return (
    <>     
        <Navbar/>
        <Routes>          
          <Route path='/' Component={HomePage}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' Component={ContactPage}>
            <Route path='/house' Component={Navbar}/>
          </Route>
          <Route path='*' Component={Errorpage}/>
        </Routes>
        <Footer/>      
    </>
  )
}

export default App

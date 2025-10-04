import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'

import Navbar from './components/Navbar'


import Home from './components/Home'
import MainPage from './components/MainPage';

import Contact from './pages/Contact'
import About from './pages/About'
import News from './pages/News';
import Services from './pages/Services'
import Sports from './pages/Sports';
import Footer from './components/Footer'
import Login from './pages/Login';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   <Router>
    <Routes>
      <Route path='/' element={<MainPage/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/sports'element={<Sports/>}/>
      <Route path='/login' element={<Login/>}/>
      </Route>
    </Routes>
   </Router>
     
    </>
  )
}

export default App

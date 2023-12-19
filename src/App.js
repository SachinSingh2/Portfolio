import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter ,  Route, Routes } from "react-router-dom";
// import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import About from './components/About'
import Foot from './components/Foot';
import Home2 from './components/Home2';


export default function App() {
  return (

    <>
  <BrowserRouter>
     <NavBar/>



     <Routes>
      <Route path='/' element={<Home2/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />

     </Routes>

<Foot/>

  </BrowserRouter>

    </>
  )
}

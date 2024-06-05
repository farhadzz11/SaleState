import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Home from './assets/Home'
import Porfile from './assets/Porfile'
import About from './assets/About'
import SignIn from './assets/SignIn'
import SignUp from './assets/SignUp'

function App() {
  return (
   <BrowserRouter >
   <Header/>
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Porfile />} />
      <Route path='/about' element={<About />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App

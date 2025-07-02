import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import NotFound from './components/NotFound.jsx'
import About from './components/About/About.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <StrictMode>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path="*" element={<NotFound />} />
            <Route path="/:userid" element={<User/>}/>
            <Route path="/github" element={<Github/>}/>
        </Routes>
        <Footer/>
      </StrictMode>,
  </BrowserRouter>
)

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import AboutPage from './Pages/AboutPage'
import ResumePage from './Pages/ResumePage'
// import PortfolioPage from './Pages/PortfolioPage'
// import ServicePage from './Pages/ServicePage'
import ContactUsPage from './Pages/ContactUsPage'
import SkillPage from './Pages/SkillPage'
import ProjectPage from './Pages/ProjectPage'
import EducationPage from './Pages/EducationPage'


export default function App() {
  return (
   <>
   {/* <BrowserRouter basename={process.env.NODE_ENV === "development" ? "/" : '/Portflo/'}> */}
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/'element={<HomePage/>}/>
    <Route path='/about'element={<AboutPage/>}/>
    <Route path='/resume'element={<ResumePage/>}/>
    <Route path='/skills'element={<SkillPage/>}/>
    {/* <Route path='/portofolio'element={<PortfolioPage/>}/>
    <Route path='/services'element={<ServicePage/>}/> */}
    <Route path='/contact'element={<ContactUsPage/>}/>
    <Route path='/project'element={<ProjectPage/>}/>
    <Route path='/education'element={<EducationPage/>}/>
    
   </Routes>
   <Footer/>
   </BrowserRouter>
   
   </>
  )
}

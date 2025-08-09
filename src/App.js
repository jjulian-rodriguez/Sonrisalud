import './App.css';
import React from 'react';
import Navbar from "./components/navbar/navbar.jsx"
import Header from "./components/header/header.jsx"
import {Routes, Route} from "react-router-dom"
import About from './pages/about/about.jsx';
import Footer from './components/footer/footer.jsx';
import Services from './pages/services/services.jsx';
import Main from './components/main/main.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={
        <>
          <Header/>
          <Main/>
        </> }/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

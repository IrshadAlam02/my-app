
import './App.css';
import Navbar from './componet/Navbar';
// import About from './componet/About';
import { useState } from 'react';
import Textarea from './componet/Textarea';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

// import Textarea from './componet/Textarea';



function App() {
  const[mode,setmode]=useState('cyan-800');
  function togglemode(){
    if(mode === 'cyan-800')
    {
      setmode('black')
      document.body.style.backgroundColor = 'rgb(39 39 42)';
      document.title='DarkMode-On';
    }
    else{
      setmode ('cyan-800')
      document.body.style.backgroundColor = ' rgb(12, 69, 85)';
      document.title='DarkMode- Off';
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar mode={mode} togglemode={togglemode} />
    <Textarea/>
    {/* <Routes> */}
          {/* <Route path='/about' element={<About/>} /> */}
          {/* <Route path='/Textarea' element={<Textarea/>} /> */}
    {/* </Routes> */}
  {/* </Router> */}
  </>
  );
}

export default App;

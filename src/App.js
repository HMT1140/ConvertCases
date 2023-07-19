
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, link } from "react-router-dom";

import About from './components/About';



function App() {
  const [alert , setalert] =useState(null)
  const showalert = (types, message)=>{
    if (mode === 'dark'){
      message=message;
      types=types;
      setalert.message('Dark mode has been enabled.')
      setalert.types('Success')
      
    }
    else{
      setalert.message('Light mode has been enabled')
      setalert.types('Success')
    }
  }

  const [mode , setmode]= useState('light')
  const Togglemode = ()=>{
    if (mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#162954';
      
    
    }
    else{
      setmode('light')
      document.body.style.backgroundColor= 'white'
      
    }

  }
 

  return (
     <BrowserRouter
     >
       <div className="App">
      <Navbar title="ConvertCases" mode={mode} Togglemode={Togglemode}/>
      <Routes>
            <Route exact path="/About" element={<About />} />
          </Routes>
          <Routes>
            <Route
             exact path="/"
              element={
                <Textform
                  
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
      
      
      
    </div>
     </BrowserRouter>
     
    
    
  );
}

export default App;

import "./styles.css";
import Navbar from './Navbar';
import Home from "./pages/Home";
import Assignment1 from "./pages/A1.js";
import Assignment2 from "./pages/A2";
import Assignment3 from "./pages/A3";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './pages/A2';


function App (){
  // let component
  // switch (window.location.pathname){
  //   case "/":
  //     component= <Home/>
  //     break
  //   case "/A1":
  //     component = <Assignment1/>
  //     break
  //   case "/A2":
  //     component = <Assignment2/>
  //     break
  //   case "/A3":
  //     component = <Assignment3/>
  //     break
  // }
  // return(
  //   < >
  //   <Navbar />
  //   {component}
  //   </>

  // )
  return(

  
    <Router>
      <div className= "App">
      <header> 
      
      </header>
    
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/> }/>
        <Route path='/A1' element ={<Assignment1/>}/>
        <Route path="/A2" element ={<TicTacToe/>}/>
        <Route path="/A3" element ={<Assignment3/>}/>
      
      
      </Routes>


      </div>
    
    
    
    </Router>
  )
}
export default App


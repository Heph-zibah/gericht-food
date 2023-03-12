import React from "react";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'

function App() {
  return (
    <div className="">
     <Nav/>
     <Routes>
     <Route path="/" element={ <Home/> } />
     </Routes>
    </div>
  );
}

export default App;

import React from "react";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Error from "./pages/Error";

function App() {
  return (
    <div className="">
     <Nav/>
     <Routes>
     <Route path="/" element={ <Home/> } />
     <Route path="*" element={<Error/>}/>
     </Routes>
    </div>
  );
}

export default App;

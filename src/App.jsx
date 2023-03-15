import React from "react";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Error from "./pages/Error";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="container">
     <Nav/>
     <Routes>
     <Route path="/" element={ <Home/> } />
     <Route path="/pages" element={ <Pages/> } />
     <Route path="*" element={<Error message="Page not found"/>}/>
     </Routes>
    </div>
  );
}

export default App;

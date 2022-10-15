import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home"

import Header from "./Header";
import Works from "../Pages/Works";
import About from "../Pages/About";
import Onu from "../Pages/Onu";

export default function Router(){

    return(
          <BrowserRouter>
             
             <Header rota="Home" rota2="Works" rota3="About" rota4="Onu" />
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/works" element={<Works/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/onu" element={<Onu/>}/>

             </Routes>
          
          </BrowserRouter>

    );
}
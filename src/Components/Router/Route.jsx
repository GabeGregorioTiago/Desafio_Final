import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home"

import Header from "./Header";
import Works from "../Pages/Works";
import About from "../Pages/About";


export default function Router(){

    return(
          <BrowserRouter>
             
             <Header rota="Início" rota2="Sites" rota3="Sobre" />
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/works" element={<Works/>}/>
                <Route path="/about" element={<About/>}/>
         

             </Routes>
          
          </BrowserRouter>

    );
}
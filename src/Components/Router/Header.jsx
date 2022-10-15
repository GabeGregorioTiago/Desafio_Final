import React,{useState} from "react";
import {Link} from  "react-router-dom";
import * as S from "../Styles/Header-Styles"
import Logo from "../Figures/Logo-removebg-preview.png"
import Home from "../Figures/379-3791531_white-home-icon-png-logo-home-white-png-removebg-preview.png"
import Information from "../Figures/340-3406810_info-icon-white-white-info-icon-png-transparent-removebg-preview.png"
import Work from "../Figures/globe_outline.png"
import Onu from "../Figures/kisspng-white-angle-font-icon-symbol-helping-hand-5ab0e735533912.3162179215215429653409.png"
import Insta from "../Figures/Insta.png"
import Github from "../Figures/github.png"
const Header =({rota,rota2,rota3,rota4})=>{
    
   const [open,setOpen]=useState(false);  
   return(
         
           
                 <S.HEADER>
                    <S.IMG src={Logo} alt=""/>
                    <h1>MENU</h1>
                   <div>
                   <S.BUTTON onClick={()=>{setOpen(!open)}}>{open === true ? "x" : "≡"}</S.BUTTON>
                {open && (<nav>
                   <S.Ul>
                   <li><S.LINK to="/"><img src={Home}/><p>{rota}</p></S.LINK></li>
                    <li><S.LINK to="/works"><img src={Work}/><p>{rota2}</p></S.LINK></li>
                    <li><S.LINK to="/about"><img src={Information}/><p>{rota3}</p></S.LINK></li>
                    <li><S.LINK to="/onu"><img src={Onu}/><p>{rota4}</p></S.LINK></li>
                    <li>Socials</li> 
                    <li><S.IMGTWO src={Insta}/><S.IMGTWO src={Github}/></li>
                    
                   
                      
                   </S.Ul>
                </nav>)}
                    </div>    
                 
                
              </S.HEADER>
               
       
              
               

      );

};

export default Header;
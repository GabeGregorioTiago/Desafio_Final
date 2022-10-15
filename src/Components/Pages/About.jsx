import React from "react";

import * as S from "../Styles/About-Styles"
import Gif from "../Figures/animate.gif"
import Figure from "../Figures/1-removebg-preview.png"
import FigureTwo from "../Figures/2-removebg-preview.png"
const About =()=>{
    
 
   return(
         
              <S.BODY>

                 
                 <S.DIVTWO>
                  <img src={Gif}/>
                  <S.DIV>
                      <h3>Formação</h3>
                      <p>Sou bacharel em física, com ênfase em física computacional, pela Universidade Federal Fluminense (UFF). </p>
                  </S.DIV>
                 </S.DIVTWO>
              </S.BODY>
              
               

      );

};

export default About;
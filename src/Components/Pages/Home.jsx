import React from "react";
import * as S from "../Styles/Home-Styles"
import Image from "../Figures/FotoUM.png"
import C from "../Figures/c.png"
import Cplus from "../Figures/cplus.png"
import CSS from "../Figures/css.png"
import Curriculo from "../Curriculo_Gabriel_Silva_Gregorio_Pereira_Tiago.pdf"
const Home =()=>{
    
 
   return(
         
              <S.BODY>
                 <S.DIVTWO>
                   <h5>Olá!</h5>
                   <h1>Eu sou o Gabriel</h1>
                   <p>Bem-Vind@ ao meu portifólio</p>
                   <button><a href={Curriculo} download="Curriculo-Gabriel.pdf">Currículo</a></button>
                    <div>
                       <p>Habilidades em programação</p>
                       <S.FIGURE>
                           <S.IMGONE src={C}/>
                           <S.IMGTWO src={Cplus}/>
                           <S.IMGTHREE src={CSS}/>
                       </S.FIGURE>
                    </div>
                 </S.DIVTWO>
                  <S.DIVONE>
                     <S.FIGURETWO>
                         <img src={Image}/>
                     </S.FIGURETWO>
                     <button><a href={Curriculo} download="Curriculo-Gabriel.pdf">Currículo</a></button>
                     <S.DIVTHREE>
                       <p>Habilidades em programação</p>
                       <S.FIGURE>
                           <S.IMGONE src={C}/>
                           <S.IMGTWO src={Cplus}/>
                           <S.IMGTHREE src={CSS}/>
                       </S.FIGURE>
                    </S.DIVTHREE>
                  </S.DIVONE>
              </S.BODY>
              
               

      );

};

export default Home;
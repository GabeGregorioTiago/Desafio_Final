import React from "react";
import * as S from "../Styles/Home-Styles"
import Image from "../Figures/FotoUM.png"
import C from "../Figures/c.png"
import Cplus from "../Figures/cplus.png"
import CSS from "../Figures/css.png"

const Home =()=>{
    
 
   return(
         
              <S.BODY>
                 <S.DIVTWO>
                   <h5>Hello!</h5>
                   <h1>I'm Gabriel</h1>
                   <p>Welcome to my portfolio</p>
                   <button>VIEW RESUME</button>
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
                     <button>VIEW RESUME</button>
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
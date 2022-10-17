import React from "react";
import SiteOne from "../Figures/SiteOne.png"
import SiteTwo from "../Figures/SiteTwo.png"
import SiteThree from "../Figures/SiteThree.png"
import SiteFour from "../Figures/SiteFour.png"
import SiteFive from "../Figures/SiteFive.png"
import SiteSix from "../Figures/SiteSix.png"
import SiteSeven from "../Figures/SiteSeven.png"
import SiteEight from "../Figures/SiteEight.png"
import * as S from "../Styles/Works-Styles"

const Works =()=>{
    
 
   return(
         
              <S.BODY>
               <S.DIV>
                  <a href="https://hooks-07-desafio-api-hg2c.vercel.app/">
                    <img src={SiteOne} />
                  </a>
                  <a href="https://pagina-filmes-e-series-zc9z.vercel.app/">
                    <img src={SiteTwo} />
                  </a>
                  <a href="https://api-harry-potter-4not.vercel.app/">
                    <img src={SiteThree} />
                  </a>
                  <a href="https://hooks-07-desafio-api-hg2c.vercel.app/">
                    <img src={SiteFour} />
                  </a>
                  <a href="https://hooks-07-desafio-api-hg2c.vercel.app/">
                    <img src={SiteFive} />
                  </a>
                  <a href="https://hooks-07-desafio-api-hg2c.vercel.app/">
                    <img src={SiteSix} />
                  </a>
                  <a href="https://hooks-07-desafio-api-hg2c.vercel.app/">
                    <img src={SiteSeven} />
                  </a>
                  <a href="https://hooks-07-desafio-api-hg2c.vercel.app/">
                    <img src={SiteEight} />
                  </a>
               </S.DIV>
                  
              </S.BODY>
              
               

      );

};

export default Works;
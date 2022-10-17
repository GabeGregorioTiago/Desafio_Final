import React from "react";

import * as S from "../Styles/About-Styles"
import Gif from "../Figures/animate.gif"
import Pigs from "../Figures/porquinhas.jpg"
import Table from "../Figures/Optical-table.png"
const About =()=>{
    
 
   return(
         
              <S.BODY>

                 <S.DIVONE>
                  <S.DIVTHREE>
                       <div>
                          <p>Esse foi o resultado de uma simulação computacional que fiz durante a graduação para a disciplina Computação De Alto Desepenho I, a qual resolve a equação de difusão.</p>
                       </div>
                  </S.DIVTHREE>
                   
                   <S.DIVTWO>
                        <h2>Formação</h2>
                        <p>Sou Bacharel em Física, com ênfase em Física Computacional, pela Universidade Federal Fluminense (UFF).</p>
                    </S.DIVTWO>
                 </S.DIVONE>
                  
                 <S.DIVONE>
                   
                    <S.DIVSIX>
                        <h2>Amores</h2>
                        <p>Gosto muito de animais, atualmente tenho como bichinhos de estimação três porquinhas da índia (Olivia, Maggie e Marie).</p>
                    </S.DIVSIX>
                    <S.DIVFOUR>
                        <div>
                           <p>Foto de duas das minhas porquinhas: Marie (Direita); Olivia (Esquerda).</p>   
                        </div>
                    </S.DIVFOUR>

                    <S.DIVSEVEN>
                        <h2>Amores</h2>
                        <p>Gosto muito de animais, atualmente tenho como bichinhos de estimação três porquinhas da índia (Olivia, Maggie e Marie).</p>
                    </S.DIVSEVEN>
                 </S.DIVONE>
                  
                 <S.DIVONE>
                 <S.DIVFIVE>
                       <div>
                          <p>Exemplo de mesa e equipamentos que utilizo para realizar os experimentos.</p>   
                       </div>
                   </S.DIVFIVE>
                   
                   <S.DIVTWO>
                        
                       <h2>Estudos</h2>
                       <p>Atualmente estou fazendo mestrado em Física pela Universidade Federal Fluminense, onde estudo a simulação experimental de jogos quânticos com os graus de liberdade de um feixe de laser intenso.</p>
                   </S.DIVTWO>
                   
                </S.DIVONE>
              </S.BODY>
              
               

      );

};

export default About;
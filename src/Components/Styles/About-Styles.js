import styled from "styled-components";
import Gif from "../Figures/animate.gif"
import Pigs from "../Figures/porquinhas.jpg"
import Table from "../Figures/Optical-table.png"
export const BODY =styled.body`
 
  padding-top:15vh;
 
   height:170vh;
   background-color:#1f1f1f;
   display:flex;
   align-items: center;
  justify-content: space-around;
  flex-direction:column;
  @media  screen and (min-width: 360px) and (max-width: 480px){
    padding-top:0vh;
    height:325vh;
  }
`;

export const DIVONE =styled.div`
display:flex;
align-items: center;
justify-content: space-between;

width:60vw;

img{
    width:25vw;
}
h2{
    padding-top:6vh;
    color:white;
    padding-left:8vw;
}
p{
    color:white;
   
    width:18vw;
    margin-left:3vw;
    margin-top:3vh;
}

@media  screen and (min-width: 360px) and (max-width: 480px){
  
  flex-direction:column;
  
  width:85vw;
  height:70vh;
  h2{
    font-size:4vh;
  }
  p{
    font-size:3vh;
  }
}
`;
export const DIVTHREE =styled.div`
   background-image:url(${Gif});
   background-repeat: no-repeat;
  background-size: cover;
  width:25vw;
  height:40vh;
  display:flex;
align-items: center;
justify-content: space-between;

  div{
    width:25vw;
    height:40vh;
    opacity:0;
    &:hover{
      opacity:1;
      background: black;
      width:25vw;
      height:40vh;
      animation: moveToRight 2s ease-in-out;
      animation-delay: 1000ms;
   
      cursor: pointer;
      
    }
     
  }
  @media  screen and (min-width: 360px) and (max-width: 480px){
    width:90vw;
    height:40vh;
  
    div{
      width:90vw;
      height:40vh;
      opacity:0;
      &:hover{
        opacity:1;
        background: black;
        width:90vw;
        height:40vh;
        animation: moveToRight 2s ease-in-out;
        animation-delay: 1000ms;
     
        cursor: pointer;
        p{
         
          width:80vw;
          font-size:3vh;
        }
        
      }
  }
`;

export const DIVTWO =styled.div`
  
  width:25vw;
  
  height:40vh;
  @media  screen and (min-width: 360px) and (max-width: 480px){
   
    width:70vw;
    heigh:20vh;:
    display:flex;
align-items: center;
justify-content: space-between;
flex-direction:column;
   p{
    
     width:65vw;
   }
  }
`;

export const DIVFOUR =styled.div`
   background-image:url(${Pigs});
   background-repeat: no-repeat;
  background-size: cover;
  width:25vw;
  height:40vh;
  display:flex;
  align-items: center;
  justify-content: space-between;
  
  div{
    width:25vw;
    height:40vh;
    opacity:0;
    &:hover{
      opacity:1;
      background: black;
      width:25vw;
      height:40vh;
      animation: moveToRight 2s ease-in-out;
      animation-delay: 1000ms;
   
      cursor: pointer;
      
    }
  }
  @media  screen and (min-width: 360px) and (max-width: 480px){
    width:90vw;
    height:40vh;
     
    div{
      width:90vw;
      height:40vh;
      opacity:0;
      &:hover{
        opacity:1;
        background: black;
        width:90vw;
        height:40vh;
        animation: moveToRight 2s ease-in-out;
        animation-delay: 1000ms;
     
        cursor: pointer;
        p{
         
          width:80vw;
          font-size:3vh;
        }
        
      }
  }
  

`;
export const DIVFIVE =styled.div`
   background-image:url(${Table});
   background-repeat: no-repeat;
  background-size: cover;
  width:25vw;
  height:40vh;
  display:flex;
  align-items: center;
  justify-content: space-between;
  
  div{
    width:25vw;
    height:40vh;
    opacity:0;
    &:hover{
      opacity:1;
      background: black;
      width:25vw;
      height:40vh;
      animation: moveToRight 2s ease-in-out;
      animation-delay: 1000ms;
   
      cursor: pointer;
      
    }
     
  }
  @media  screen and (min-width: 360px) and (max-width: 480px){
    width:90vw;
    height:40vh;
     
    div{
      width:90vw;
      height:40vh;
      opacity:0;
      &:hover{
        opacity:1;
        background: black;
        width:90vw;
        height:40vh;
        animation: moveToRight 2s ease-in-out;
        animation-delay: 1000ms;
     
        cursor: pointer;
        p{
         
          width:80vw;
          font-size:3vh;
        }
        
      }
  }
`;


export const DIVSIX =styled.div`
  
  width:25vw;
  
  height:40vh;
  @media  screen and (min-width: 360px) and (max-width: 480px){
     display:none;
    width:70vw;
    heigh:20vh;:
    display:flex;
align-items: center;
justify-content: space-between;
flex-direction:column;
   p{
    
     width:65vw;
   }
  }
`;
export const DIVSEVEN =styled.div`
  display:none;
  width:25vw;
  
  height:40vh;
  @media  screen and (min-width: 360px) and (max-width: 480px){
    display:contents;
    width:70vw;
    heigh:20vh;:
    display:flex;
align-items: center;
justify-content: space-between;
flex-direction:column;
   p{
    
     width:65vw;
   }
  }
`;
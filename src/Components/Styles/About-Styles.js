import styled from "styled-components";
import Fig from "../Figures/2-removebg-preview.png"

export const BODY =styled.body`
 
  padding-top:15vh;
 
   height:100vh;
   background-color:#1f1f1f;
   display:flex;
   align-items: center;
  justify-content: space-around;
`;


export const DIV =styled.div`
background-image: url(${Fig}); 
background-repeat: no-repeat;
  background-size: cover; 
  width:25vw;
  
  height:40vh;
  position:absolute;
  left:14.7vw;
  top:27vh;
`;

export const DIVTWO =styled.div`
display:flex;
align-items: center;
justify-content: space-around;
img{
    width:25vw;
}
h3{
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
`;
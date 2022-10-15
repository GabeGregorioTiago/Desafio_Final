import styled from "styled-components";
import {Link} from "react-router-dom";
export const HEADER = styled.header`
   height:9vh;
   display:flex;
   align-items: center;
  justify-content: space-around;
   background-color:#000000;
   position:fixed;
   width:100%;
   div{
     
    height:30vh;
    width:20vw;
    height:9vh;
    margin-top:3vh;
    margin-left:69vw;
   }
  h1{
    position:absolute;
    right:6vw;
    color:white;
    font-size:3vh;
  }
  @media  screen and (min-width: 360px) and (max-width: 480px){

    h1{
      display:none;

    }
    div{
      
     margin-left:54.8vw;
      width:45vw;
    }
 }
`;
export const BUTTON = styled.button`
    width:3vw;
    height:6vh;
    border:none;
    margin-left:14vw;
    font-size:4vh;
    border-radius:20px 20px 20px 20px;   
    background-color:#42403f;
    @media  screen and (min-width: 360px) and (max-width: 480px){

      width:15vw;
      margin-left:25vw;
      font-size:5vh;
   }
`;
export const IMG = styled.img`
   width:10vw;
   height:6vh;
   margin-left:2vw;
  @media  screen and (min-width: 360px) and (max-width: 480px){

     width:45vw;
     height:6vh;
     position:absolute;
     left:22vw;
  }
  
`;

export const Ul = styled.ul`
list-style: none;
    height:91vh;
     background-color:rgb(66,64,63,0.8);
     margin-top:1.5vh;
     
      li{
        padding-top:2vh;
        margin-left:1vw;
        color:white;
      }
    @media  screen and (min-width: 360px) and (max-width: 480px){
        li{
           margin-left:2vw;
          font-size:3vh;
        }
     
    }   

`;
export const LINK = styled(Link)`
  display:flex;
   align-items: center;
  justify-content: space-around;
  
  width:7vw;
   color:white;
   img{
    width:1.7vw;
    height:3.5vh;
  }
  @media  screen and (min-width: 360px) and (max-width: 480px){
     
     width:30vw;
     margin-left:0vw;
     img{
      width:8vw;
      height:4vh;
    }
    p{
      font-size:3vh;
    }

 }
`

export const IMGTWO = styled.img`
     width:1.5vw;
    height:3.5vh;
    margin-left:1vw;
    @media  screen and (min-width: 360px) and (max-width: 480px){
      height:4vh;
      width:9vw;
      margin-left:3vw;
     
 
  }
`;
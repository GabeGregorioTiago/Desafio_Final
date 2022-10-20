import styled from "styled-components";

export const BODY =styled.body`
 
  padding-top:15vh;
  
   height:165vh;
   background-color:#1f1f1f;
   display:flex;
   align-items: center;
  justify-content: space-around;
  flex-direction:column;
  @media  screen and (min-width: 360px) and (max-width: 480px){
    height:420vh;
  }
`;

export const DIVONE = styled.div`
  
    height:40vh;
    width:30vw;
    border-radius:5vh;
    background-color:rgb(30,40,50,0.8);
    img{
      margin-top:3vh;
      margin-left:2vw;
      width:25vw;
      height:25vh;
    }
    @media  screen and (min-width: 360px) and (max-width: 480px){
      
      width:90vw;
      img{
            margin:0;
            margin-top:2vh;
            margin-left:3.5vw;
           width:82vw;
           
      }
    }
`;

export const DITWO = styled.div`
  
    width:20vw;
    height:8vh;
    display:flex;
    align-items: center;
   justify-content: space-around;
   margin-left:5vw;
   margin-top:2vh;
    button{
      border:none;
      background-color:black;
      color:white;
      width:7vw;
      height:4vh;
      border-radius:10vh;
    }
    a{
      color:white;
    }
    @media  screen and (min-width: 360px) and (max-width: 480px){
       margin:0;
      
       width:85vw;
        margin-top:2.5vh;
        margin-left:1.5vw;
       button{
         width:38vw;
         height:6vh;
         font-size:3vh;
       }

    }
`;
export const DITHREE = styled.div`

display:flex;
align-items: center;
justify-content: space-around;
flex-wrap:wrap;
width:95vw;
height:140vh;

@media  screen and (min-width: 360px) and (max-width: 480px){

  flex-direction:column;
  height:410vh;
  width:90vw;
}
`;
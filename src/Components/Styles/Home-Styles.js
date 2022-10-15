import styled from "styled-components";
export const BODY =styled.body`
 
  padding-top:15vh;
 
   height:100vh;
   background-color:#1f1f1f;
   display:flex;
   align-items: center;
  justify-content: space-around;
  @media  screen and (min-width: 360px) and (max-width: 480px){

  flex-direction:column;
  height:135vh;
}
`;
export const DIVONE = styled.div`

 
  button{
    display:none;
    
  }
  @media  screen and (min-width: 360px) and (max-width: 480px){
        
    button{
           display:flex;
           align-items: center;
   justify-content: space-around;
           border:solid black;
         background-color:transparent;
        height:10vh;
        width:50vw;
        color:white;
        opacity:0.6;
            margin-top:4vh;
           margin-left:15vw;
           font-size:2.5vh;
        }
  
  }
`;
export const FIGURETWO =styled.div`
background-color:rgb(66,64,63,0.8);
  
width:25vw;
height:25vw;
border-radius:40vh ;

img{
  position:relative;
  bottom:2vh;
  left:0.5vw;
  
  width:22vw;
  height:26vw;
  border-radius:40vh;
}
@media  screen and (min-width: 360px) and (max-width: 480px){
  margin-left:7vw;
  width:70vw;
height:70vw;
img{
  width:70vw;
  height:80vw;
  bottom:4.9vh;
  left:-1vw;
}
}
`;
export const DIVTWO = styled.div`
   h1{
    
    color:white;
    font-size:9vh;
   }
   h5{
    color:white;
    font-size:4vh;
   }
  p{
    color:white;
    font-size:4vh;
  }
  button{
    border:solid black;
     background-color:transparent;
     height:7vh;
     width:8vw;
     color:white;
     opacity:0.6;
     margin-top:5vh;
     margin-left:8vw;

  }
  @media  screen and (min-width: 360px) and (max-width: 480px){
    
   

     button{
         display:none;
     }
     h1{
      margin-bottom:2vh;
        font-size:6vh;
     }
    h5{
      margin-bottom:2vh;
    }
    p{
      margin-bottom:15vh;
    }
     div{
       display:none;
     }
  }
`

export const FIGURE = styled.figure`
   display:flex;
   align-items: center;
   justify-content: space-around;
   margin-top:4vh;
   @media  screen and (min-width: 360px) and (max-width: 480px){
 
    width:80vw;
   }

`;

export const IMGONE = styled.img`
      
width:4vw;
height:10vh;
@media  screen and (min-width: 360px) and (max-width: 480px){

  width:13vw;
  height:7vh;
}
`;

export const IMGTWO = styled.img`
      
width:4vw;
height:10vh;
@media  screen and (min-width: 360px) and (max-width: 480px){

  width:13vw;
  height:7vh;
}
`;


export const IMGTHREE = styled.img`
      
width:12vw;
height:9vh;
@media  screen and (min-width: 360px) and (max-width: 480px){

  width:45vw;
  height:7vh;
}

`;

export const DIVTHREE = styled.div`
     display:none;
     p{
       font-size:3vh;
       color:white;
       margin-top:5vh;
     }
     @media  screen and (min-width: 360px) and (max-width: 480px){
       display:contents;
       
     }
`
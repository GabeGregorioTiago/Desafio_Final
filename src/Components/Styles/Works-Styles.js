import styled from "styled-components";

export const BODY =styled.body`
 
  padding-top:15vh;
  
   height:185vh;
   background-color:#1f1f1f;
   display:flex;
   align-items: center;
  justify-content: space-around;
  flex-direction:column;
  @media  screen and (min-width: 360px) and (max-width: 480px){
    height:350vh;
  }
`;
export const DIV =styled.div`
margin-left:3vw;
height:180vh;
display: flex;
flex-wrap: wrap;
align-items: center;
  justify-content: space-around;
    a{
   
        width:45vw;
        height:40vh;
        overflow: hidden;
    }
     img{
        width:40vw;
        height:35vh;
        &:hover{
            width:45vw;
            height:40vh;
        }
     }
     @media  screen and (min-width: 360px) and (max-width: 480px){
        flex-direction:column;
     
        width:80vw;
        height:340vh;
        margin-right:13vw;
        a{
            width:95vw;
           
        }
        img{
            width:90vw;
            height:35vh;
            &:hover{
                width:95vw;
                height:40vh;
            }
        }
    }  
`;
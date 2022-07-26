import styled from 'styled-components'
import React from 'react'
import { colors } from '../utils/definitions'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100&family=Roboto:wght@100&display=swap');
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        box-sizing: border-box;
    }
     @media (prefers-color-scheme: ${props => (props.theme ? 'dark' : 'light')}) {
        html {
          color-scheme: dark;
        }
        body {
          color: white;
          background: black;
        }
      }
`

export const HomeContainer = styled.div`
  .container {
    min-height: 100vh;
    padding: 0;
    margin: 0;
  }

  .main {
    padding: 2rem ;
    display: flex;
    flex-direction: column;
  }
`
export const Button = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    background-color: ${props => (props.theme == true ? colors.black : colors.white )}; 
    border: 1px solid ${({theme}) => (theme == true ?  colors.offWhite : colors.deepYellow) };
    color: ${({theme}) => (theme == true ? colors.offWhite : colors.deepYellow) };
    padding: 0.5rem 1rem;
    margin: 0;
    font-weight: 500;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
    width: fit-content;
    height: fit-content;
    box-shadow:  0 1px 1px ${colors.buttonShadow};
  
  &:disabled{
    background-color: beige;
    color: ${colors.disabled};
    border-color: ${colors.disabled};
    cursor: default;
  } 
`

export const TestAreaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    textarea{
      width: 500px !important;
      height: 400px !important;
    }
    
    @media only screen and (max-width: 1200px){
       flex-direction: column;
       .userText{
            margin-top: 30px;
       }
       .userText, .mainText{
            textarea{
                width: 500px !important;
                height: 400px !important;
        }
    }
    

    @media only screen and (max-width: 570px){
        .userText, .mainText{
             textarea{
                 width: 350px !important;
                 height: 350px !important;
              }
        }
     }

     @media only screen and (max-width: 367px){
      .userText, .mainText{
           textarea{
               width: 275px !important;
               height: 300px !important;
            }
      }
   }
  }
  
  .mainText, .userText{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    label{
        text-transform: uppercase;
        font-size: 0.85rem;
        font-weight: bold;
        margin-bottom: 5px;
    }
    textarea{
        border: 2px solid ${colors.deepYellow};
        border-radius: 10px;
        width: 550px;
        height: 87%;
    }
  }
  
  .mainText .button, .userText .button{
    margin-top: 10px;
  }
`
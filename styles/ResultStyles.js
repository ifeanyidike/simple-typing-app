import styled from 'styled-components'
import { colors } from '../utils/definitions'

export const ResultContainer = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    min-height: 80vh;
    display: grid;
    place-items: center;

    .content{
        text-align: center;
    }
    .content .greetings{
        background-color: ${colors.lightGreetings};
        position: relative;
        text-align: center;
        color: ${colors.nearWhite};
        font-weight: bold;   
        left: -50px;
        padding: 15px;
        width: calc(100% + 80px);   
        svg{
            color: ${colors.lightYellow};
            font-size: 1.8rem;
            font-weight: bold;
        }    
        @media only screen and (max-width: 540px){
            width: 80%; 
            left: 0;
            margin: 0 auto;
           text-align: center;
        } 
    }
    
    .content .greetings::after,
    .content .greetings::before {
      content: "";
      border: 10px solid;
      border-color: ${colors.darkGreetings} ${colors.darkGreetings} transparent transparent;
      position: absolute;
      left: 0;
      bottom: -20px;
    }
    
    .content .greetings::after {
      left: auto;
      right: 0;
      border-color: ${colors.darkGreetings} transparent transparent ${colors.darkGreetings};
    }
    .content address{
        margin: 50px 0;
    }
    
    .content address output{
        font-size: 1.5rem;
        color: ${({theme}) => theme == true ? colors.nearWhite : colors.darkGreetings} 
    }
    
    .content button:hover{
        box-shadow:  none;
        text-decoration: underline;
    }
`
import styled from 'styled-components'
import { colors } from '../utils/definitions'

export const TimeAreaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-height: 50px;
    @media only screen and (max-width: 540px){
        flex-direction: column;
        margin-bottom: 50px;
        align-items: center;
     }
  

  .timeSelect{
    @media only screen and (max-width: 540px){
        margin-bottom: 5px;
     }
  }
  
  .timeSelect .selectElement{
    width: fit-content;
  }
  .timeSelect .timeInput{
    position: relative;
    display: flex;
    align-items: center;
  }
  .timeSelect .timeInput .element{
    display: flex;
  }
  .timeSelect .timeInput input{
    height: 35px;
    padding: 0 15px;
    outline: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 1px solid ${({theme}) => (theme == true ? colors.offWhite : colors.deepYellow) };
    position: relative;
    padding: 3px 10px;
  }
  
  .timeSelect .timeInput span{
    height: 35px;
    padding: 3px 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: ${({theme}) => (theme == true ? colors.white : colors.darkGreetings) };
    color: ${({theme}) => (theme == true ? colors.black : colors.white) };
    border: 1px solid ${({theme}) => (theme == true ? colors.offWhite : colors.darkGreetings) };
    border-left: none;
  }
  
  .timeSelect .timeInput .syncIcon{
    margin-left: 15px;
    cursor: pointer;
    color: ${({theme}) => (theme == true ? colors.offWhite : colors.deepYellow) };
  }

  .custom-select__menu{
    background-color: ${props => (props.theme == true ? colors.black : colors.white)}
  }
  
  .timeDisplay{
    font-family: 'Lexend Deca', sans-serif;
    padding: 5px;
    font-size: 30px;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 540px){
        margin-bottom: 5px;
    }
  }
`
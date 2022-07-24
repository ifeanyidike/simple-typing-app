import styled from 'styled-components'
import { colors } from '../utils/definitions'

export const HeaderContainer = styled.div`
    background-color: ${props => (props.theme == true ? colors.headerDark : colors.header )};
    color: ${props => (props.theme == true ? colors.header : colors.semiBlack )};
    font-family: 'Lexend Deca', sans-serif;
    font-size: 2rem;
    padding: 20px;
    display: flex;
    justify-content: space-between;
`

export const ThemeToggleContainer = styled.div`
    width: 55px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background-color: ${colors.semiBlack};
    border-radius: 20px;
    position: relative;
    .leftItems{
        display: flex;
    }
    .rightItems{
        display: flex;
    }
   .togglerIcon {
       color: ${colors.lightYellow};
       width: 20px;
       height: 20px;
       margin: 0 3px
   }
   .moon{
       transform: rotate(270deg);
   }
`

export const ThemeBallContainer = styled.div`
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: ${colors.nearWhite};
    position: absolute;
    top: 2px;
    left: 2px;
   
    transform: translate(${props => props.translate});
    transition: all 0.3s ease;   
`
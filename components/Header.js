
import ThemeToggler from './ThemeToggler'
import { HeaderContainer } from '../styles/HeaderStyles'

const Header = ({toggleThemeMode, themeMode}) => {
  return (
    <HeaderContainer theme={themeMode}>
        <span>Simple Typing Test</span> 
        <ThemeToggler toggleThemeMode={toggleThemeMode} themeMode={themeMode} />
    </HeaderContainer>
  )
}

export default Header
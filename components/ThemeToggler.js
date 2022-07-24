import React from 'react'
import { ThemeToggleContainer } from '../styles/HeaderStyles'
import { IoSunnySharp } from 'react-icons/io5'
import { GiNightSleep } from 'react-icons/gi'
import ThemeBall from './ThemeBall'

const ThemeToggler = ({toggleThemeMode, themeMode}) => {

    return (
        <ThemeToggleContainer onClick={() => toggleThemeMode(!themeMode)}>
            <ThemeBall translate={themeMode ? '30px' : '0px'} />
            <div className="leftItems">
                <GiNightSleep className='togglerIcon moon' style={{ display: themeMode ? 'block' : 'none' }} />
            </div>
            <div className="rightItems">
                <IoSunnySharp className='togglerIcon' style={{ display: themeMode ? 'none' : 'block' }} />
            </div>
        </ThemeToggleContainer>
    );
}
export default ThemeToggler
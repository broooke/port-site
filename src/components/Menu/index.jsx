import React from 'react'
import Logo from '../Logo'
import MenuButton from './MenuButton'
import MenuContent from './MenuContent'

function Menu() {
    return (
        <div className='menu-wrapper'>
            <Logo />
            <MenuButton />
            <MenuContent />
        </div>
    )
}

export default Menu

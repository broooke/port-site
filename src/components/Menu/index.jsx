import React from 'react'
import Logo from '../Logo'
import MenuButton from './MenuButton'
import MenuContent from './MenuContent'

function Menu() {
    return (
        <div className='menu-wrapper'>
            <MenuButton />
            <MenuContent />
        </div>
    )
}

export default Menu

import React, { useContext } from 'react'
import './style.scss'
import cn from 'classnames'
import { MenuContext } from '../MenuManager'

function MenuButton() {
    const {open, setOpen} = useContext(MenuContext)
    
    return (
        <div className={cn("menu-button-wrap", { open })}>
            <button className="menu-button" onClick={() => setOpen(!open)}>
                <svg class="menu-opener__square" width="20" height="20" viewBox="0 0 12 12" fill="none">
                    <rect y="10" width="2" height="2" fill="currentColor"></rect>
                    <rect y="5" width="2" height="2" fill="currentColor"></rect>
                    <rect width="2" height="2" fill="currentColor"></rect>
                    <rect x="5" y="10" width="2" height="2" fill="currentColor"></rect>
                    <rect x="5" y="5" width="2" height="2" fill="currentColor"></rect>
                    <rect x="5" width="2" height="2" fill="currentColor"></rect>
                    <rect x="10" y="10" width="2" height="2" fill="currentColor"></rect>
                    <rect x="10" y="5" width="2" height="2" fill="currentColor"></rect>
                    <rect x="10" width="2" height="2" fill="currentColor"></rect>
                </svg>
            </button>
        </div>
    )
}

export default MenuButton

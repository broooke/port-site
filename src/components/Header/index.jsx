import React from 'react'
import './style.scss'

function Header() {
    return (
        <div data-scroll-section className="header">
            <div className="header-wrap">
                <div className='logo'>
                    <h1>Gaydenko<br></br>Nikita</h1>
                </div>
                <div className='links'>
                    <p>about me</p>
                    <p>my works</p>
                    <p>lets collab</p>
                </div>
            </div>
        </div>
    )
}

export default Header

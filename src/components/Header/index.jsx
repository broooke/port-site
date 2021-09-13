import React from 'react'
import './style.scss'

function Header() {
    return (
        <div data-scroll-section className="header">
            <div className="header-wrap">
                <div className='logo'>
                    <h1><span className='fam'>Gaydenko</span><br></br><span className='nam'>Nikita</span></h1>
                </div>
                <div className='links'>
                    <a href="#" className='link'>
                        <span class="mask">
                            <div class="link-container">
                                <span class="link-title1 title">about me</span>
                                <span class="link-title2 title">about me</span>
                            </div>
                        </span>
                    </a>
                    <a href="#" className='link'>
                        <span class="mask">
                            <div class="link-container">
                                <span class="link-title1 title">my works</span>
                                <span class="link-title2 title">my works</span>
                            </div>
                        </span>
                    </a>
                    <a href="#" className='link'>
                        <span class="mask">
                            <div class="link-container">
                                <span class="link-title1 title">lets collab</span>
                                <span class="link-title2 title">lets collab</span>
                            </div>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header

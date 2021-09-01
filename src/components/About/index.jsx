import React from 'react'
import './style.scss'

function About() {
    return (
        <div data-scroll-section className='about-block'>
            <div className='about-title-wrap'>
                <span>02</span>
                <h1>About me</h1>
            </div>
            <div className='about-wrap'>
                <div className="frontend-block">
                    <h1>Frontend</h1>
                </div>
                <div className='image-block'>
                    <img src="./images/header.png" alt="" />
                </div>
                <div className="backend-block">
                    <h1>Backend</h1>
                </div>
            </div>
        </div>
    )
}

export default About

import React from 'react'
import './style.scss'

function About() {
    return (
        <div data-scroll-section className='about-block'>
            <div className='about-title-wrap'>
                <span>02</span>
                <h1>About me</h1>
            </div>
            <div className='subtitle-wrap'>
                <h1>
                    killing<br></br>of the<br></br> ordi<br></br>-nary
                </h1>
            </div>
            <div className='about-wrap'>
                <div className='text-wrap'>
                    <h1 className='whatido-title'>what i do</h1>
                    <p>i am fullstack developer with primary focus on <span>Django</span>/<span>React</span> who love creating, designing and
                        developing wow projects. 
                    </p>
                    <div className='skills-wrap'>
                        <div className='skill-column'>
                            <h1>frontend</h1>
                            <ul>
                                <li>- React</li>
                                <li>- Redux</li>
                                <li>- Bootstrap</li>
                                <li>- Material UI</li>
                                <li>- HTML/CSS</li>
                                <li>- JS</li>
                            </ul>
                        </div>
                        <div className='skill-column'>
                            <h1>backend</h1>
                            <ul>
                                <li>- Python</li>
                                <li>- Django</li>
                                <li>- DRF</li>
                                <li>- Celery</li>
                                <li>- postgresql</li>
                                <li>- redis</li>
                            </ul>
                        </div>
                        <div className='skill-column'>
                            <h1>deploy/devops</h1>
                            <ul>
                                <li>- heroku</li>
                                <li>- aws</li>
                                <li>- docker</li>
                                <li>- nginx</li>
                                <li>- gunicorn</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

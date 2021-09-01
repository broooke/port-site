import React from 'react'
import './style.scss'

function Hello() {
    return (
        <div data-scroll-section className='text-wrapper'>
            <div className='text-block'>
                <span>01</span>
                <h1>Hello<br></br>I'm Nikita<br></br>
                    Fullstack<br></br>Developer<br></br>
                    Driven to create<br></br>cool work
                </h1>
                <div className='circle-wrapper'>
                    <svg width="403px" height="403px" viewBox="0 0 403 403" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="btn-circle-wrap" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="btn-circle-wrapper" transform="translate(-237.000000, -465.000000)">
                                <g id="btn-circle" transform="translate(166.000000, 466.000000)">
                                    <path d="M272.5,401 C383.233092,401 473,311.233092 473,200.5 C473,89.7669077 383.233092,0 272.5,0 C161.766908,0 72,89.7669077 72,200.5" id="Shape" stroke="#ffffff" opacity="0.531542969" transform="translate(272.500000, 200.500000) scale(-1, -1) translate(-272.500000, -200.500000) " strokeDasharray="944.9669189453125" style={{strokeDashoffset: '0px'}}></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div className="title">
                        <span className="s-03"><span>show</span></span><br></br>
                        <span className="s-03"><span>creativity</span></span>
                    </div>
                </div>
                {/* <div>
                    <img src="https://ocean-of-technologies.s3.us-east-2.amazonaws.com/hector_detour03.png" />
                </div> */}
            </div>
        </div>
    )
}

export default Hello

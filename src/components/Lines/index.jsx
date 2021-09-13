import React, {useRef} from 'react'
import './style.scss'
import cn from "classnames";
import useOnScreen from "../../hooks/useOnScreen";

function Lines() {
    const ref = useRef(null)
    const onScreen = useOnScreen(ref, 0.6);

    return (
        <div ref={ref} data-scroll-section className={cn('lines-block', { "is-reveal": onScreen })}>
            <div className='title-lines-wrap'>
                <h1>i work with</h1>
            </div>
            <div className='lines-flex'>
                <div className='lines-wrap'>
                    <div className='slider-block'>
                        <section className={'sliderWrap'}>
                            <div className={'sliderWrapMovingLeft'}>
                                <h2 className={'sliderWrapText'}>SPORT - TECHNOLOGY - FASHION - SPORT - TECHNOLOGY - FASHION - SPORT - TECHNOLOGY - FASHION</h2>
                            </div>
                        </section>
                    </div>
                    <div className='slider-block'>
                        <section className={'sliderWrap'}>
                            <div className={'sliderWrapMovingRight'}>
                                <h2 className={'sliderWrapText'}>BEAUTY - REAL ESTATE - ARCHITECTURE - BEAUTY - REAL ESTATE - ARCHITECTURE - BEAUTY - REAL ESTATE - ARCHITECTURE</h2>
                            </div>
                        </section>
                    </div>
                    <div className='slider-block'>
                        <section className={'sliderWrap'}>
                            <div className={'sliderWrapMovingLeft'}>
                                <h2 className={'sliderWrapText'}>PARTNERS - TRAVEL - SCIENCE - PARTNERS - TRAVEL - SCIENCE - PARTNERS - TRAVEL - SCIENCE</h2>
                            </div>
                        </section>
                    </div>
                    <div className='slider-block'>
                        <section className={'sliderWrap'}>
                            <div className={'sliderWrapMovingRight'}>
                                <h2 className={'sliderWrapText'}>AUTOMOTIVE - MUSIC - HOTELS - AUTOMOTIVE - MUSIC - HOTELS - AUTOMOTIVE - MUSIC - HOTELS</h2>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* <marquee behavior="scroll" direction="right">SPORT - TECHNOLOGY - FASHION</marquee>
            <marquee behavior="scroll" direction="left">BEAUTY - REAL ESTATE - ARCHITECTURE</marquee>
            <marquee behavior="scroll" direction="right">PARTNERS - TRAVEL - SCIENCE</marquee>
            <marquee behavior="scroll" direction="left">AUTOMOTIVE - MUSIC - HOTELS</marquee> */}

        </div>
    )
}

export default Lines

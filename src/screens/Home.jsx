import React from 'react'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuManager from '../components/Menu/MenuManager'

function Home() {
    return (
        <MenuManager>
            <Menu />
            <div data-scroll-container id="main-container" className="main-container">

                <h1 data-scroll-section>
                    Bleu <br /> Blanc <br /> Studio
                </h1>
                <h1 data-scroll-section>
                    Bleu <br /> Blanc <br /> Studio
                </h1>
                <Gallery />
            </div>
        </MenuManager>
    )
}

export default Home

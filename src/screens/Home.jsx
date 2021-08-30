import React from 'react'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Hello from '../components/Hello'
import Menu from '../components/Menu'
import MenuManager from '../components/Menu/MenuManager'

function Home() {
    return (
        <MenuManager>
            <Menu />
            <div data-scroll-container id="main-container" className="main-container">
                <Hello />
                {/* <Gallery /> */}
            </div>
        </MenuManager>
    )
}

export default Home

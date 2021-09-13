import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Hello from '../components/Hello'
import Lines from '../components/Lines'
import Menu from '../components/Menu'
import MenuManager from '../components/Menu/MenuManager'

function Home() {
    return (
        <MenuManager>
            <Menu />
            <div data-scroll-container id="main-container" className="main-container">
                <Header />
                <Hello />
                <About />
                {/* <Gallery /> */}
                <Lines />
                <Contact />
            </div>
        </MenuManager>
    )
}

export default Home

import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuManager from '../components/Menu/MenuManager'

function Home() {
    return (
        <MenuManager>
            <Menu />
            <div className="main-container">
                <Header />
            </div>
        </MenuManager>
    )
}

export default Home

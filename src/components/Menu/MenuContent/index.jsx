import React, { useContext } from 'react'
import { MenuContext } from '../MenuManager'
import './style.scss'
import cn from 'classnames'
import { Facebook, Instagram, Youtube, Dribbble, Twitch } from "react-feather";

const internalLinks = [
    {
      url: "#1",
      component: <span>Projects</span>,
      img:
        "https://images.unsplash.com/photo-1615713170963-2595d2c721bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    },
    {
      url: "#2",
      component: <span>Recognition</span>,
      img:
        "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2148&q=80",
    },
    {
      url: "#3",
      component: <span>Studio</span>,
      img:
        "https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
    },
    {
      url: "#4",
      component: <span>Contribution</span>,
      img:
        "https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80",
    },
    {
      url: "#5",
      component: <span>Career</span>,
      img:
        "https://images.unsplash.com/photo-1588200618450-3a5b1d3b9aa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
    },
];
  
const externalLinks = [
    {
      url: "www.facebook.com",
      component: <Facebook />,
    },
    {
      url: "www.instagram.com",
      component: <Instagram />,
    },
    {
      url: "www.youtube.com",
      component: <Youtube />,
    },
    {
      url: "www.dribbble.com",
      component: <Dribbble />,
    },
    {
      url: "www.twitch.com",
      component: <Twitch />,
    },
]



function MenuContent() {
    const {open} = useContext(MenuContext)

    return (
        <div className="menu-holder">
            <div className={cn("menu-inside", {open})}>
                <div className="menu-nav-container">
                    <ul className="internal-nav-links">
                        {internalLinks.map(link => (
                            <li key={link.url}>
                                <a href={link.url}>{link.component}</a>
                                <img src={link.img} alt="" />
                            </li>
                        ))}
                    </ul>
                    <ul className="external-nav-links">
                        {externalLinks.map(link => (
                            <li key={link.url}>
                                <a href={link.url}>{link.component}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenuContent

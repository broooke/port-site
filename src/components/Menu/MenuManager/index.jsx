import React, { createContext, useState } from 'react'

export const MenuContext = createContext({
    open: false,
    setOpen: () => {},
    load: false,
    setLoad: () => {},
})

function MenuManager(props) {
    const [open, setOpen] = useState(false)
    const [load, setLoad] = useState(false)

    return <MenuContext.Provider value={{open, setOpen, load, setLoad}}>{props.children}</MenuContext.Provider>
}

export default MenuManager

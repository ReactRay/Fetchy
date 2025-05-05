
import { createContext, useContext, useState, useEffect } from "react";


const AppContext = createContext()


export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    function toggleDarkTheme() {

        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme)
        const body = document.querySelector('body')
        body.classList.toggle('dark')

    }
    return <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchQuery, setSearchQuery }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)
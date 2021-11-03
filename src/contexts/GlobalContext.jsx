
import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

const GlobalContextProvider = (props) => {
    const [casesAmount, setCasesAmount] = useState(0)
    const [lang, setLang] = useState("es")
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <GlobalContext.Provider value={{
            casesAmount,
            setCasesAmount,
            lang,
            setLang,
            loggedIn,
            setLoggedIn
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider

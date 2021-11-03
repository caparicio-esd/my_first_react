import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const getTheUserFullName = () => {

    }

    return (
        <AuthContext.Provider value={{
            currentUser, 
            getTheUserFullName
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

import React, { createContext, useState } from 'react'

export const SingleCaseContext = createContext();

const SingleCaseContextProvider = ({ children, case_ }) => {
    const [currentCase, setCurrentCase] = useState(case_)

    return (
        <SingleCaseContext.Provider value={{
            currentCase, 
            setCurrentCase
        }}>
            {children}
        </SingleCaseContext.Provider>
    )
}

export default SingleCaseContextProvider

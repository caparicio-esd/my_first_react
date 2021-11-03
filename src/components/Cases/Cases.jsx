import React, { createContext, useContext, useState } from 'react'
import SingleCase from './SingleCase'
import { cases as cases_ } from './../../models/cases'
import styles from "./SingleCase.module.sass"
import { GlobalContext } from './../../contexts/GlobalContext'
import SingleCaseContextProvider from './../../contexts/SingleCaseContext'

export const CasesContext = createContext();

const Cases = () => {
    // https://www.youtube.com/watch?v=O6P86uwfdR0
    const [cases, setCases] = useState(cases_)
    const { setCasesAmount } = useContext(GlobalContext)

    const addNewCase = () => {
        const newCase = {
            title: "asjkdblaksndlkasndlkasndlkanslkd",
            muted: true,
            pinned: false,
            category: "pink"
        }
        const newCases = [...cases];
        newCases.push(newCase)
        setCases(newCases)
    }

    const removeLastCase = () => {
        const newCases = [...cases];
        newCases.pop()
        setCases(newCases)
    }

    const toggleActiveByIndex = (index) => {
        const newCases = [...cases]
        newCases[index].active = !newCases[index].active
        setCases(newCases);
        setCasesAmount(newCases.length)
    }




    return (
        <CasesContext.Provider value={{
            cases,
            setCases,
            toggleActiveByIndex
        }}>
            <div className={`${styles.cases}`}>
                {
                    cases.map((case_, i) => (
                        <SingleCaseContextProvider key={i} case={case_}>
                            <SingleCase
                                key={i}
                                index={i}
                                title={case_.title}
                                muted={case_.muted}
                                category={case_.category}
                                addCase={addNewCase} />
                        </SingleCaseContextProvider>
                    ))
                }
            </div>
        </CasesContext.Provider>
    )
}

export default Cases

import React, { useState } from 'react'
import SingleCase from './SingleCase'
import { cases as cases_ } from './../../models/cases'

const Cases = () => {
    // https://www.youtube.com/watch?v=O6P86uwfdR0
    const [cases, setCases] = useState(cases_)

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


    return (
        <div className="cases">
            <div className="section_header"></div>
            <div className="section_content">
                <button onClick={addNewCase}>add case</button>
                <button onClick={removeLastCase}>remove case</button>
                {
                    cases.map((case_, i) => (
                        <SingleCase
                            key={i}
                            title={case_.title}
                            muted={case_.muted}
                            category={case_.category}
                            addCase={addNewCase} />
                    ))
                }
            </div>
        </div>
    )
}

export default Cases

import React from 'react'
import SingleCase from './SingleCase'
import { cases } from './../../models/cases'

const Cases = () => {
    return (
        <div className="cases">
            <div className="section_header"></div>
            <div className="section_content">
                
                {
                    cases.map((case_, i) => (
                        <SingleCase
                            key={i}
                            title={case_.title}
                            muted={case_.muted}
                            category={case_.category} />
                    ))
                }


            </div>
        </div>
    )
}

export default Cases

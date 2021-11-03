import React, { useContext } from 'react'
import { CasesContext } from '../Cases/Cases'

const Tabulable = (props) => {
    const { toggleActiveByIndex } = useContext(CasesContext)
    console.log(toggleActiveByIndex);
    return (
        <a tabIndex="1" onClick={() => toggleActiveByIndex(props.index)}>
            {props.children}
        </a>
    )
}

export default Tabulable

import React, { useContext } from 'react'
import { FrutasContext } from './ChatBlock'
import { Fruta } from './Fruta'

const GrupoDeFrutas = () => {
    const frutasContext = useContext(FrutasContext)
    // console.log(frutasContext);

    return (
        <div>
            <Fruta />
        </div>
    )
}

export default GrupoDeFrutas

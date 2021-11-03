import React, { useContext } from 'react'
import { FrutasContext } from './ChatBlock'

export const Fruta = () => {
    const frutasContext = useContext(FrutasContext)
    console.log(frutasContext);
    return (
        <div>
            fruta
        </div>
    )
}

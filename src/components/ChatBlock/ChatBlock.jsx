import React, { createContext, useState } from 'react'
import GrupoDeFrutas from './GrupoDeFrutas';


const FrutasContext = createContext()

const ChatBlock = () => {
    const [frutas, setFrutas] = useState(["manzana", "pera", "platano"])
    const [chats, setChat] = useState([])

    const addFruta = () => {
        setFrutas([])
    }

    return (
        <div>
            <FrutasContext.Provider value={{
                frutas, 
                setFrutas, 
                chats, 
                setChat, 
                addFruta
            }}>
                <GrupoDeFrutas />
            </FrutasContext.Provider>
        </div>
    )
}

export default ChatBlock
export { FrutasContext }
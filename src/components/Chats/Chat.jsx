import React from 'react'
// import dayjs from 'dayjs'

const Chat = ({chat, removeChatById, i}) => {

    // dayjs

    const hours = chat.date.getHours();
    const minutes = chat.date.getMinutes();
    const seconds = chat.date.getSeconds();
    const time = `${hours}.${minutes}.${seconds}`

    return (
        <div className="chat_element">
            <h3>{chat.title}- <button onClick={() => removeChatById(i)}>x</button> </h3> 
            <span>{time}</span>
        </div>
    )
}

export default Chat

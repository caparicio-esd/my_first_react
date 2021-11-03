import React, { useState } from 'react'
import ContentHeader from './ContentHeader'
import styles from './Content.module.sass'
import Chat from '../Chats/Chat'
import chatsOriginal from './../../models/chats'

const ContentChats = () => {

    const [chats, setChats] = useState(chatsOriginal);

    const addNewChat = () => {
        const newChat = [...chats]
        newChat.push({
            title: "hola",
            date: new Date(),
            categories: ["red", "blue", "green"],
            users: ["juan", "ana"],
            muted: false,
            pinned: false,
            active: false,
        })
        setChats(newChat)
    }

    const revertChats = () => {
        setChats(chatsOriginal)
    }
    const killChats = () => {
        setChats([])
    }
    const removeChatById = (id) => {
        const newChat = [...chats]
        newChat.splice(id, 1)
        setChats(newChat)
    }
    const addNewChatWithInput = (ev) => {
        ev.preventDefault();
        const value = ev.target.new.value
        const newChat = [...chats]
        newChat.push({
            title: value,
            date: new Date(),
            categories: ["red", "blue", "green"],
            users: ["juan", "ana"],
            muted: false,
            pinned: false,
            active: false,
        })
        setChats(newChat)
        ev.target.reset();
    }

    return (
        <div className={[styles.chat_list].join(" ")}>
            <ContentHeader title="chats" background="#73BAFF" />
            <div className="content_body">
                {
                    chats.map((chat, i) => (
                        <Chat chat={chat} key={i} i={i} removeChatById={removeChatById} />
                    ))
                }
            </div>
            <button onClick={addNewChat}>add chat</button>
            <button onClick={revertChats}>revert chat</button>
            <button onClick={killChats}>kill chat</button>
            <form onSubmit={addNewChatWithInput}>
                <input type="text" name="new" />
                <button>add new...</button>
            </form>
        </div>
    )
}

export default ContentChats

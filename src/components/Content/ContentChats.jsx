import React from 'react'
import ContentHeader from './ContentHeader'
import styles from './Content.module.sass'

const ContentChats = () => {
    return (
        <div className={[styles.chat_list].join(" ")}>
            <ContentHeader title="chats" background="#73BAFF" />
            <div className="content_body">
                content chats
            </div>
        </div>
    )
}

export default ContentChats

import React from 'react'
import ContentHeaderChat from './ContentHeaderChat'
import styles from './Content.module.sass'

const ContentChatBlock = () => {
    return (
        <div className={[styles.chat_block].join(" ")}>
            <ContentHeaderChat />
            <div className="content_body">
                content chats block
            </div>
            <div className="content_footer">
                
            </div>
        </div>
    )
}

export default ContentChatBlock

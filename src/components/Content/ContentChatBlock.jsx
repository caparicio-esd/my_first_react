import React from 'react'
import ContentHeaderChat from './ContentHeaderChat'
import styles from './Content.module.sass'
import ChatBlock from '../ChatBlock/ChatBlock'

const ContentChatBlock = () => {
    return (
        <div className={[styles.chat_block].join(" ")}>
            <ContentHeaderChat />
            <div className="content_body">
                <ChatBlock />
            </div>
            <div className="content_footer">
                
            </div>
        </div>
    )
}

export default ContentChatBlock

import React from 'react'
import ContentCases from './ContentCases'
import ContentChatBlock from './ContentChatBlock'
import ContentChats from './ContentChats'
import ContentConnected from './ContentConnected'
import {content} from './Content.module.sass'
import {content as acontent} from './../App.module.sass'

const Content = () => {
    return (
        <div className={`${content} ${acontent}`}>
            <ContentCases />
            <ContentConnected />
            <ContentChats />
            <ContentChatBlock />
        </div>
    )
}

export default Content

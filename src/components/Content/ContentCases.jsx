import React from 'react'
import ContentHeader from './ContentHeader'
import styles from './Content.module.sass'
import { AccessAlarm } from '@material-ui/icons'
import Cases from './../Cases/Cases'

const ContentCases = () => {
    return (
        <div className={[styles.cases].join(" ")}>
            <ContentHeader title="cases" />
            <div className="content_body">
                <Cases />
            </div>
        </div>
    )
}

export default ContentCases

import React from 'react'
import ContentHeader from './ContentHeader'
import styles from './Content.module.sass'

const ContentConnected = () => {
    return (
        <div className={[styles.connected].join(" ")}>
            <ContentHeader title="connected" hasCategories={false} />
            <div className="content_body">
                content connected
            </div>
        </div>
    )
}

export default ContentConnected

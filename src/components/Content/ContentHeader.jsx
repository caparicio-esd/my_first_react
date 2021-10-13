import { Add } from '@material-ui/icons'
import React from 'react'
import Category from '../Categories/Category'
import styles from './Content.module.sass'
import Button from './../Dsys/Button'

const ContentHeader = ({ title = "cases", hasCategories = true, background = "#8FC7FD" }) => {
    return (
        <div className={`${styles.content_header}`} style={{ backgroundColor: background }}>
            <div className={`${styles.content_header_title}`}>{title}</div>
            {
                hasCategories ?
                    <div className={`${styles.content_header_categories}`}>
                        <div className={`${styles.categories}`}>
                            <Category className={`${styles.category}`} fill="#EB5757" />
                            <Category className={`${styles.category}`} fill="#F2994A" />
                            <Category className={`${styles.category}`} fill="#27AE60" />
                            <Category className={`${styles.category}`} fill="#2D9CDB" />
                            <Category className={`${styles.category}`} fill="#BB6BD9" />
                            <Category className={`${styles.category}`} />
                        </div>
                        <div className={`${styles.add_category}`}>
                            <Button><Add /></Button>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default ContentHeader

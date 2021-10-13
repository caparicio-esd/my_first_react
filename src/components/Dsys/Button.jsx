import React from 'react'
import styles from './Button.module.sass'

const Button = ({ children = "pass", primary = true, link = false }) => {
    console.log(styles);
    return (
        <button className={`${styles.btn} ${primary && styles.primary} ${link && styles.link}`}>
            {children}
        </button>
    )
}

export default Button

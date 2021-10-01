import React from 'react'
import styles from "./SingleCase.module.scss"



/**
 * 
 * Blablablablalba, 
 * 
 * @param {String} color : Color de entrada;
 * @returns {String} : blabla
 */
const getTheColor = (color) => {
    let colorOut;
    switch (color) {
        case "red":
            colorOut = "#991128";
            break;
        case "green":
            colorOut =  "#11992c";
            break;
        case "blue":
            colorOut =  "#129u01";
            break;
        default:
            colorOut =  "#ddd";
    }
    return colorOut;
}



// const SingleCase = ({ title }) => {
const SingleCase = (props) => {

    const mutedButtonClass = [
        "button",
        props.muted ? "muted" : "",
        styles.muted
    ]
    const pinnedButtonClass = [
        "button",
        props.pinned ? "pinned" : "",
        styles.pinned
    ]
    const caseClass = [
        "case",
        props.muted ? "muted" : "",
        props.pinned ? "pinned" : "",
        styles.case
    ]

    const stylesCategory = {
        backgroundColor: getTheColor(props.category)
    }

    return (
        <div className={caseClass.join(" ")}>
            <div className={styles.case_left}>
                {
                    props.category ?
                        <div className={styles.category}
                        style={stylesCategory}>
                            {props.category}
                        </div>
                        : null
                }
                <h4 className={styles.title}>{props.title}</h4>
            </div>
            <div className={styles.case_right}>
                <div className={mutedButtonClass.join(" ")}>Muted</div>
                <div className={pinnedButtonClass.join(" ")}>Pinned</div>
            </div>
        </div>
    )
}

export default SingleCase

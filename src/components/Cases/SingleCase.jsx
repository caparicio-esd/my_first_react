import React from 'react'
import Category from '../Categories/Category';
import styles from "./SingleCase.module.scss"
import Button from './../Dsys/Button'
import { PinDrop, VolumeOff } from '@material-ui/icons';


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
                <Category fill={getTheColor(props.category)} />
                <h4 className={styles.title}>{props.title}</h4>
            </div>
            <div className={styles.case_right}>
                <Button link={true} primary={false}>
                    <VolumeOff />
                </Button>
                <Button link={true} primary={false}>
                    <PinDrop />
                </Button>
            </div>
        </div>
    )
}

export default SingleCase

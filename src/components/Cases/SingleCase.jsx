import React, { useState } from 'react'
import Category from '../Categories/Category';
import styles from "./SingleCase.module.sass"
import Button from './../Dsys/Button'
import { PinDrop, VolumeOff } from '@material-ui/icons';
import Tabulable from '../Dsys/Tabulable';


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
            colorOut = "#11992c";
            break;
        case "blue":
            colorOut = "#129u01";
            break;
        default:
            colorOut = "#ddd";
    }
    return colorOut;
}



const SingleCase = (props) => {
    const [clicked, setClicked] = useState(false);

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
        clicked ? "clicked" : "",
        styles.case
    ]

    const stylesCategory = {
        backgroundColor: getTheColor(props.category)
    }

    const toggleClick = () => {
        setClicked(!clicked)
    }

    return (
        <Tabulable index={props.index}>
            <div className={caseClass.join(" ")} onClick={toggleClick}>
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
        </Tabulable>
    )
}

export default SingleCase

import { Notifications, Person } from '@material-ui/icons'
import React, { useContext } from 'react'
import * as hstyles from './Header.module.sass'
import userPic from './../../assets/img/user_picture.png'
import { GlobalContext } from '../../contexts/GlobalContext'

const HeaderNavigation = () => {
    const { casesAmount } = useContext(GlobalContext)


    console.log(userPic);
    return (
        <div className={`${hstyles.header_navi}`}>
            <div className={`${hstyles.notifications}`}>
                <Notifications htmlColor="#B9B9B9" />
                <div className={`${hstyles.bubble}`}>{casesAmount}</div>
            </div>
            <div className={`${hstyles.tasks}`}>
                <Person htmlColor="#B9B9B9" />
                <span className={`${hstyles.tasks_label}`}>My Tasks</span>
            </div>
            <div className={`${hstyles.user}`}>
                <img src={userPic} alt="" />
                <span className={`${hstyles.user_name}`}>Johanna Doe</span>
            </div>
        </div>
    )
}

export default HeaderNavigation

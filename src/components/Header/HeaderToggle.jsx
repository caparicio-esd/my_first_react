import { MoreVert } from '@material-ui/icons'
import React from 'react'
import * as hstyles from './Header.module.sass'

const HeaderToggle = () => {
    return (
        <div className={`${hstyles.header_toggle}`}>
            <MoreVert htmlColor="#888888" />
        </div>
    )
}

export default HeaderToggle

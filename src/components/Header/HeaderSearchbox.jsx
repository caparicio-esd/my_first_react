import { Search } from '@material-ui/icons'
import React from 'react'
import * as hstyles from './Header.module.sass'

const HeaderSearchbox = () => {
    console.log(hstyles);
    return (
        <div className={`${hstyles.header_searchbox}`}>
            <form action="" className={`${hstyles.form}`}>
                <div className={`${hstyles.icon}`}>
                    <Search fontSize='small' />
                </div>
                <div className={`${hstyles.input}`}>
                    <input type="text" className={`${hstyles.input_control}`} placeholder="Search..." />
                </div>
            </form>
        </div>
    )
}

export default HeaderSearchbox

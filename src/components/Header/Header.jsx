import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderNavigation from './HeaderNavigation'
import HeaderSearchbox from './HeaderSearchbox'
import HeaderToggle from './HeaderToggle'
import * as astyles from './../App.module.sass'
import * as hstyles from './Header.module.sass'

const Header = () => {
    return (
        <div className={`${astyles.header} ${hstyles.header}`}>
            <div className={`${hstyles.header_left}`}>
                <HeaderLogo />
                <HeaderSearchbox />
            </div>

            <div className={`${hstyles.header_right}`}>
                <HeaderNavigation />
                <HeaderToggle />
            </div>
        </div>
    )
}

export default Header

import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderNavigation from './HeaderNavigation'
import HeaderSearchbox from './HeaderSearchbox'
import HeaderToggle from './HeaderToggle'


const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <HeaderLogo />
                <HeaderSearchbox />
            </div>

            <div className="header_right">
                <HeaderNavigation />
                <HeaderToggle />
            </div>
        </div>
    )
}

export default Header

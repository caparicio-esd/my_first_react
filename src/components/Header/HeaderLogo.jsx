import React from 'react'
import logo from './../../assets/img/header_brand_logo.png'
import * as hstyles from './Header.module.sass'

const HeaderLogo = () => {
    const projectName = "acm.chat"

    return (
        <div className={`${hstyles.header_brand}`}>
            <div className={`${hstyles.logo}`}>
                <img src={logo} alt="" />
            </div>
            <div className={`${hstyles.slogan}`}>
                {projectName}
            </div>
        </div>
    )
}

export default HeaderLogo
